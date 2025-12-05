import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db, serverTimestamp } from "../../lib/firebase.js";

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

  const countWords = (text) => text.trim().split(/\s+/).filter(Boolean).length;
  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim());
  const isValidPhoneDigits = (digits) => digits.replace(/\D/g, "").length >= 7;

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
      await addDoc(collection(db, "contactRequests"), payload);
      /*
        Future: enable auto-ack email
        await sendAcknowledgementEmail(formData.email.trim(), {
          subject: "Thanks for contacting Retrospecta",
          message:
            "Our team will reach out within 24 to 48 hours regarding your query.",
        });
      */

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
            onChange={(e) => setCountryCode(e.target.value)}
            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="+91">India (+91)</option>
            <option value="+1">United States (+1)</option>
            <option value="+44">United Kingdom (+44)</option>
            <option value="+61">Australia (+61)</option>
            <option value="+971">UAE (+971)</option>
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
