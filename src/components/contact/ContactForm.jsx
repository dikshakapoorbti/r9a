import React, { useState, useRef } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db, serverTimestamp } from "../../lib/firebase.js";
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [countryCode, setCountryCode] = useState("+91");
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const phoneInputRef = useRef(null);

  const countWords = (text) => text.trim().split(/\s+/).filter(Boolean).length;
  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim());
  const isValidPhoneDigits = (digits) => digits.replace(/\D/g, "").length >= 7;

  // Enhanced security: Check for suspicious patterns (phishing prevention)
  const containsSuspiciousContent = (text) => {
    const suspiciousPatterns = [
      /<script/i,
      /javascript:/i,
      /on\w+\s*=/i, // Event handlers like onclick=
      /<iframe/i,
      /eval\(/i,
      /document\./i,
      /window\./i,
    ];
    return suspiciousPatterns.some(pattern => pattern.test(text));
  };

  /*
   Future: Automatic acknowledgement email
   This will be enabled once server-side email infrastructure is ready
   (e.g., PHPMailer on cPanel or Firebase Trigger Email).
   Current implementation is intentionally disabled to avoid errors
   while SMTP dependencies and CORS/WAF settings are not yet in place.
  */
  const SEND_ACK_DISABLED = true;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setErrors({});

    if (honeypot) {
      return;
    }

    const last = Number(localStorage.getItem("contact_last_submit_ts") || 0);
    const now = Date.now();
    if (now - last < 60000) {
      setErrorMessage("Please wait a minute before submitting again.");
      return;
    }

    const newErrors = {};
    if (!isValidEmail(formData.email)) newErrors.email = "Enter a valid email";
    const phoneDigits = formData.phone.replace(/\D/g, "");
    if (!isValidPhoneDigits(phoneDigits)) newErrors.phone = "Enter a valid phone";
    if (countWords(formData.message) < 2) //for now
      newErrors.message = "Describe your project in at least 20 words";

    // Security check: Block suspicious content
    if (containsSuspiciousContent(formData.email) ||
        containsSuspiciousContent(formData.company) ||
        containsSuspiciousContent(formData.message)) {
      setErrorMessage("Invalid input detected. Please remove any HTML or script content.");
      return;
    }

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitted(true);

    const phoneE164 = `${countryCode}${phoneDigits}`;
    const payload = {
      email: formData.email.trim(),
      phone: phoneE164,
      company: formData.company.trim(),
      message: formData.message.trim(),
      createdAt: serverTimestamp(),
    };

    try {
      // Save to Firebase
      await addDoc(collection(db, "contactRequests"), payload);

      // Send email notification to admin using EmailJS
      try {
        // EmailJS configuration
        const emailParams = {
          to_email: 'dikshakapoorbti@gmail.com',
          from_name: formData.email.trim(),
          from_email: formData.email.trim(),
          phone: phoneE164,
          company: formData.company.trim() || 'N/A',
          message: formData.message.trim(),
          submission_time: new Date().toLocaleString(),
        };

        // EmailJS credentials from environment variables
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (serviceId && templateId && publicKey) {
          await emailjs.send(serviceId, templateId, emailParams, publicKey);
        } else {
          console.warn('EmailJS not configured. Please set up .env file with EmailJS credentials.');
        }
      } catch (emailError) {
        console.error('Email notification failed:', emailError);
        // Continue even if email fails - data is saved in Firebase
      }

      setFormData({ email: "", phone: "", company: "", message: "" });
      localStorage.setItem("contact_last_submit_ts", String(Date.now()));
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch {
      setErrorMessage("Could not save your request. Please try again later.");
      setIsSubmitted(false);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Email Address *
        </label>
        <input
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          placeholder="your@email.com"
        />
        {errors.email && (
          <p className="mt-2 text-sm text-red-600">{errors.email}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Phone Number *
        </label>
        <div className="flex gap-3">
          <select
            value={countryCode}
            onChange={(e) => {
              setCountryCode(e.target.value);
              setTimeout(() => phoneInputRef.current?.focus(), 0);
            }}
            className="min-w-[140px] px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white cursor-pointer hover:border-blue-400 transition-colors"
            style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 20 20\'%3E%3Cpath stroke=\'%236b7280\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'1.5\' d=\'M6 8l4 4 4-4\'/%3E%3C/svg%3E")',
              backgroundPosition: 'right 0.5rem center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '1.5em 1.5em',
              paddingRight: '2.5rem',
              appearance: 'none'
            }}
          >
            {/* Popular countries first */}
            <option value="+91">India +91</option>
            <option value="+1">USA/Canada +1</option>
            <option value="+44">United Kingdom +44</option>
            <option value="+971">UAE +971</option>
            <option value="+61">Australia +61</option>
            <option value="+65">Singapore +65</option>

            {/* Asia */}
            <option value="+93">Afghanistan +93</option>
            <option value="+880">Bangladesh +880</option>
            <option value="+975">Bhutan +975</option>
            <option value="+673">Brunei +673</option>
            <option value="+855">Cambodia +855</option>
            <option value="+86">China +86</option>
            <option value="+852">Hong Kong +852</option>
            <option value="+62">Indonesia +62</option>
            <option value="+81">Japan +81</option>
            <option value="+82">South Korea +82</option>
            <option value="+853">Macau +853</option>
            <option value="+60">Malaysia +60</option>
            <option value="+960">Maldives +960</option>
            <option value="+95">Myanmar +95</option>
            <option value="+977">Nepal +977</option>
            <option value="+92">Pakistan +92</option>
            <option value="+63">Philippines +63</option>
            <option value="+94">Sri Lanka +94</option>
            <option value="+886">Taiwan +886</option>
            <option value="+66">Thailand +66</option>
            <option value="+84">Vietnam +84</option>

            {/* Middle East */}
            <option value="+973">Bahrain +973</option>
            <option value="+20">Egypt +20</option>
            <option value="+98">Iran +98</option>
            <option value="+964">Iraq +964</option>
            <option value="+972">Israel +972</option>
            <option value="+962">Jordan +962</option>
            <option value="+965">Kuwait +965</option>
            <option value="+961">Lebanon +961</option>
            <option value="+968">Oman +968</option>
            <option value="+974">Qatar +974</option>
            <option value="+966">Saudi Arabia +966</option>
            <option value="+963">Syria +963</option>
            <option value="+90">Turkey +90</option>
            <option value="+967">Yemen +967</option>

            {/* Europe */}
            <option value="+355">Albania +355</option>
            <option value="+43">Austria +43</option>
            <option value="+375">Belarus +375</option>
            <option value="+32">Belgium +32</option>
            <option value="+387">Bosnia +387</option>
            <option value="+359">Bulgaria +359</option>
            <option value="+385">Croatia +385</option>
            <option value="+357">Cyprus +357</option>
            <option value="+420">Czech Republic +420</option>
            <option value="+45">Denmark +45</option>
            <option value="+372">Estonia +372</option>
            <option value="+358">Finland +358</option>
            <option value="+33">France +33</option>
            <option value="+49">Germany +49</option>
            <option value="+30">Greece +30</option>
            <option value="+36">Hungary +36</option>
            <option value="+354">Iceland +354</option>
            <option value="+353">Ireland +353</option>
            <option value="+39">Italy +39</option>
            <option value="+371">Latvia +371</option>
            <option value="+370">Lithuania +370</option>
            <option value="+352">Luxembourg +352</option>
            <option value="+389">North Macedonia +389</option>
            <option value="+356">Malta +356</option>
            <option value="+373">Moldova +373</option>
            <option value="+382">Montenegro +382</option>
            <option value="+31">Netherlands +31</option>
            <option value="+47">Norway +47</option>
            <option value="+48">Poland +48</option>
            <option value="+351">Portugal +351</option>
            <option value="+40">Romania +40</option>
            <option value="+7">Russia +7</option>
            <option value="+381">Serbia +381</option>
            <option value="+421">Slovakia +421</option>
            <option value="+386">Slovenia +386</option>
            <option value="+34">Spain +34</option>
            <option value="+46">Sweden +46</option>
            <option value="+41">Switzerland +41</option>
            <option value="+380">Ukraine +380</option>

            {/* Africa */}
            <option value="+213">Algeria +213</option>
            <option value="+244">Angola +244</option>
            <option value="+267">Botswana +267</option>
            <option value="+257">Burundi +257</option>
            <option value="+237">Cameroon +237</option>
            <option value="+251">Ethiopia +251</option>
            <option value="+233">Ghana +233</option>
            <option value="+254">Kenya +254</option>
            <option value="+266">Lesotho +266</option>
            <option value="+218">Libya +218</option>
            <option value="+261">Madagascar +261</option>
            <option value="+265">Malawi +265</option>
            <option value="+223">Mali +223</option>
            <option value="+230">Mauritius +230</option>
            <option value="+212">Morocco +212</option>
            <option value="+258">Mozambique +258</option>
            <option value="+264">Namibia +264</option>
            <option value="+234">Nigeria +234</option>
            <option value="+250">Rwanda +250</option>
            <option value="+221">Senegal +221</option>
            <option value="+248">Seychelles +248</option>
            <option value="+27">South Africa +27</option>
            <option value="+211">South Sudan +211</option>
            <option value="+249">Sudan +249</option>
            <option value="+255">Tanzania +255</option>
            <option value="+228">Togo +228</option>
            <option value="+216">Tunisia +216</option>
            <option value="+256">Uganda +256</option>
            <option value="+260">Zambia +260</option>
            <option value="+263">Zimbabwe +263</option>

            {/* Americas */}
            <option value="+54">Argentina +54</option>
            <option value="+591">Bolivia +591</option>
            <option value="+55">Brazil +55</option>
            <option value="+56">Chile +56</option>
            <option value="+57">Colombia +57</option>
            <option value="+506">Costa Rica +506</option>
            <option value="+53">Cuba +53</option>
            <option value="+593">Ecuador +593</option>
            <option value="+503">El Salvador +503</option>
            <option value="+502">Guatemala +502</option>
            <option value="+504">Honduras +504</option>
            <option value="+52">Mexico +52</option>
            <option value="+505">Nicaragua +505</option>
            <option value="+507">Panama +507</option>
            <option value="+595">Paraguay +595</option>
            <option value="+51">Peru +51</option>
            <option value="+598">Uruguay +598</option>
            <option value="+58">Venezuela +58</option>

            {/* Oceania */}
            <option value="+679">Fiji +679</option>
            <option value="+64">New Zealand +64</option>
            <option value="+675">Papua New Guinea +675</option>
            <option value="+685">Samoa +685</option>
            <option value="+676">Tonga +676</option>
          </select>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) =>
              setFormData({
                ...formData,
                phone: e.target.value.replace(/[^0-9\s-]/g, ""),
              })
            }
            ref={phoneInputRef}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="Phone number"
          />
        </div>
        {errors.phone && (
          <p className="mt-2 text-sm text-red-600">{errors.phone}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Company
        </label>
        <input
          type="text"
          value={formData.company}
          onChange={(e) =>
            setFormData({ ...formData, company: e.target.value })
          }
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          placeholder="Your Company Name"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Project Details
        </label>
        <textarea
          rows={4}
          required
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          placeholder="Tell us about your project requirements..."
        />
        {errors.message && (
          <p className="mt-2 text-sm text-red-600">{errors.message}</p>
        )}
      </div>

      <input
        type="text"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        className="hidden"
        aria-hidden="true"
        tabIndex={-1}
        autoComplete="off"
      />

      <button
        type="submit"
        disabled={isSubmitted}
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitted
          ? "Request Sent! We'll call you soon."
          : "Request Callback"}
      </button>

      {errorMessage && (
        <div className="text-center text-red-600 text-sm font-medium">
          {errorMessage}
        </div>
      )}

      {isSubmitted && !errorMessage && (
        <div className="text-center text-green-600 font-medium">
          Thank you! We'll contact you within 24–48 hours.
        </div>
      )}
    </form>
  );
};

export default ContactForm;
