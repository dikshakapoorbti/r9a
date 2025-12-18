# 📧 Visual Email Setup Guide - Get Emails in 10 Minutes!

## ⚠️ Why You're Not Getting Emails

The email system needs to be configured first. Think of it like setting up a new phone - you need to activate it before it works!

---

## 🚀 Quick Setup (Follow Each Step)

### STEP 1: Create EmailJS Account (2 minutes)

1. **Go to**: https://www.emailjs.com/
2. **Click**: "Sign Up" (top right)
3. **Enter**:
   - Your email: `dikshakapoorbti@gmail.com`
   - Create a password
   - Click "Sign Up"
4. **Check your email** and verify your account

---

### STEP 2: Connect Gmail (2 minutes)

1. **In EmailJS dashboard**, click **"Email Services"** (left sidebar)
2. **Click**: "Add New Service" button
3. **Select**: "Gmail"
4. **Click**: "Connect Account"
5. **Sign in** with your Gmail (`dikshakapoorbti@gmail.com`)
6. **Allow** EmailJS to send emails on your behalf
7. **Copy** the Service ID (looks like: `service_abc123`)
8. **Save** it somewhere (you'll need it in Step 4)

---

### STEP 3: Create Email Template (3 minutes)

1. **Click** "Email Templates" (left sidebar)
2. **Click** "Create New Template"
3. **In the template editor**:

   **Subject line**, type:
   ```
   New Contact Form: {{from_email}}
   ```

   **Message body**, paste this:
   ```
   NEW CONTACT FORM SUBMISSION

   From: {{from_name}}
   Email: {{from_email}}
   Phone: {{phone}}
   Company: {{company}}

   Message:
   {{message}}

   Submitted: {{submission_time}}
   ```

4. **Click the "To" tab** at the top
5. **Enter**: `dikshakapoorbti@gmail.com`
6. **From Name**: `Retrospecta Website`
7. **Click "Save"**
8. **Copy** the Template ID (looks like: `template_xyz789`)

---

### STEP 4: Get Public Key (1 minute)

1. **Click** your profile icon (top right)
2. **Select** "Account"
3. **Click** "General" tab
4. **Find** "Public Key" (looks like: `abc123XYZ`)
5. **Copy** it

---

### STEP 5: Add Credentials to Your Project (2 minutes)

1. **Open** the file `.env` in your project root (I just created it for you)

2. **Replace** the placeholder values with your actual credentials:

   ```env
   VITE_EMAILJS_SERVICE_ID=service_abc123
   VITE_EMAILJS_TEMPLATE_ID=template_xyz789
   VITE_EMAILJS_PUBLIC_KEY=abc123XYZ
   ```

   ⚠️ **IMPORTANT**: Replace `service_abc123`, `template_xyz789`, and `abc123XYZ` with YOUR actual values from EmailJS!

3. **Save** the file

---

### STEP 6: Restart Your Server

1. **Stop** your current dev server (press `Ctrl+C` in terminal)
2. **Start** it again:
   ```bash
   npm run dev
   ```

---

### STEP 7: Test It! 🎉

1. **Go to**: http://localhost:5173
2. **Scroll down** to the contact form
3. **Fill it out** with test data:
   - Email: your email
   - Phone: any number
   - Company: Test Company
   - Message: This is a test message
4. **Click** "Request Callback"
5. **Check** `dikshakapoorbti@gmail.com` inbox (should arrive in 10-30 seconds!)

---

## ✅ Checklist - Did You Complete All Steps?

- [ ] Created EmailJS account
- [ ] Connected Gmail service
- [ ] Created email template
- [ ] Got Service ID
- [ ] Got Template ID
- [ ] Got Public Key
- [ ] Added all 3 to `.env` file
- [ ] Saved `.env` file
- [ ] Restarted dev server
- [ ] Tested the form

---

## 🔍 Troubleshooting

### "Haven't got any email" - Check These:

#### 1. **Check Spam Folder**
   - EmailJS emails sometimes land in spam first
   - Mark as "Not Spam" if found

#### 2. **Verify .env File**
   Open `.env` and make sure:
   - ✅ All three values are filled in (not "your_service_id_here")
   - ✅ No extra spaces around the `=` sign
   - ✅ No quotes around the values
   - ✅ File is saved

   **Good Example:**
   ```env
   VITE_EMAILJS_SERVICE_ID=service_abc123
   ```

   **Bad Examples:**
   ```env
   VITE_EMAILJS_SERVICE_ID = service_abc123  ❌ (extra spaces)
   VITE_EMAILJS_SERVICE_ID="service_abc123" ❌ (quotes)
   VITE_EMAILJS_SERVICE_ID=your_service_id_here ❌ (not replaced)
   ```

#### 3. **Check Browser Console**
   1. Open website (http://localhost:5173)
   2. Press `F12` to open Developer Tools
   3. Click "Console" tab
   4. Submit the form
   5. Look for errors

   **If you see**: "EmailJS not configured"
   → Your `.env` file isn't being read. Restart the server!

   **If you see**: "Email notification failed"
   → Your EmailJS credentials are wrong. Double-check them!

#### 4. **Verify Server Restarted**
   After creating/editing `.env`, you MUST restart:
   ```bash
   # Stop server: Ctrl+C
   # Start again:
   npm run dev
   ```

#### 5. **Check EmailJS Dashboard**
   1. Go to https://dashboard.emailjs.com/
   2. Click "History" (left sidebar)
   3. You should see your email attempts
   4. If there's an error, it will show why

---

## 🎯 What Happens When It Works

When everything is set up correctly:

1. **User fills form** on website
2. **Data saved** to Firebase ✅ (happens even if email fails)
3. **Email sent** via EmailJS to `dikshakapoorbti@gmail.com` ✅
4. **You receive** email within 10-30 seconds ✅
5. **User sees** success message ✅

---

## 💰 EmailJS Free Tier

- ✅ **200 emails/month** (FREE)
- ✅ **No credit card** required
- ✅ **Unlimited** templates
- ✅ **Perfect** for business website

If you get more than 200 form submissions per month, you can upgrade to:
- **Personal Plan**: $8/month for 1,000 emails
- **Professional**: $15/month for 5,000 emails

---

## 🆘 Still Not Working?

If you followed all steps and still no email:

1. **Double-check** each step above
2. **Try this test**: In browser console, type:
   ```javascript
   console.log(import.meta.env.VITE_EMAILJS_SERVICE_ID)
   ```
   Should show your Service ID. If it shows `undefined`, the `.env` file isn't loaded.

3. **Check file location**: `.env` must be in project root:
   ```
   retrospecta-website/
   ├── .env          ← HERE!
   ├── package.json
   ├── src/
   └── vite.config.js
   ```

4. **Verify template variables**: In EmailJS template, make sure you used these EXACT variable names:
   - `{{to_email}}`
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{phone}}`
   - `{{company}}`
   - `{{message}}`
   - `{{submission_time}}`

---

## 📝 Example Email You'll Receive

```
Subject: New Contact Form: john@example.com

NEW CONTACT FORM SUBMISSION

From: john@example.com
Email: john@example.com
Phone: +919876543210
Company: Tech Solutions Inc

Message:
We need help building an AI system for our customer support.
Please contact us to discuss pricing and timeline.

Submitted: 12/17/2025, 2:30:00 PM
```

---

## ✨ Pro Tips

1. **Save your credentials**: Keep your EmailJS credentials in a password manager
2. **Test regularly**: Submit a test form once a week to make sure it's working
3. **Check quota**: EmailJS dashboard shows how many emails you've sent this month
4. **Whitelist sender**: Add EmailJS to your Gmail contacts so emails never go to spam

---

## 🎓 What You Just Learned

You now understand:
- ✅ How email notifications work (browser → EmailJS → Gmail)
- ✅ Why environment variables (`.env`) are used
- ✅ How to configure third-party services
- ✅ How to troubleshoot integration issues

This same pattern applies to many other services (payment processing, analytics, etc.)!

---

**Need Help?** Check the console for error messages and verify each checklist item above!

**Once working**: You'll receive an email every time someone fills out the contact form on your website! 🎉
