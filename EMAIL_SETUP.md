# Email Notification Setup Guide

## Overview
The website now uses **EmailJS** for sending email notifications when someone submits the contact form. This replaces the previous mailer.php implementation.

## Why EmailJS?
- ✅ **Free tier available** (200 emails/month)
- ✅ **No backend required** - works from the browser
- ✅ **Easy setup** - Just copy/paste credentials
- ✅ **Reliable** - Handles email delivery automatically
- ✅ **Secure** - API keys are environment variables

---

## Setup Instructions

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

### Step 2: Add Email Service
1. In the EmailJS dashboard, go to **"Email Services"**
2. Click **"Add New Service"**
3. Select **Gmail** (recommended) or any other email provider
4. Click **"Connect Account"** and authorize Gmail
5. Note down your **Service ID** (e.g., `service_abc123`)

### Step 3: Create Email Template
1. Go to **"Email Templates"** in the dashboard
2. Click **"Create New Template"**
3. Use this template:

```
Subject: New Contact Form Submission from {{from_email}}

New contact form submission received:

From: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Company: {{company}}

Message:
{{message}}

Submitted at: {{submission_time}}
```

4. In the **Settings** tab:
   - **To Email**: `{{to_email}}`
   - **From Name**: `Retrospecta Website`
   - **From Email**: Your EmailJS email (auto-filled)
   - **Reply To**: `{{from_email}}`

5. Click **"Save"** and note down your **Template ID** (e.g., `template_xyz789`)

### Step 4: Get Public Key
1. Go to **"Account"** → **"General"** in the dashboard
2. Find your **Public Key** (e.g., `abc123XYZ`)
3. Keep this page open - you'll need it next

### Step 5: Configure Environment Variables
1. In your project root, create a file named `.env`:
   ```bash
   touch .env
   ```

2. Add your EmailJS credentials to `.env`:
   ```env
   VITE_EMAILJS_SERVICE_ID=service_abc123
   VITE_EMAILJS_TEMPLATE_ID=template_xyz789
   VITE_EMAILJS_PUBLIC_KEY=abc123XYZ
   ```

3. Replace the example values with your actual credentials from EmailJS

4. **IMPORTANT**: Make sure `.env` is in your `.gitignore` file (it should be by default)

### Step 6: Test the Setup
1. Restart your development server:
   ```bash
   npm run dev
   ```

2. Go to [http://localhost:5173](http://localhost:5173)

3. Scroll to the contact form and submit a test message

4. Check **dikshakapoorbti@gmail.com** for the email

5. If you don't receive the email:
   - Check the browser console for errors
   - Verify all three environment variables are set correctly
   - Check EmailJS dashboard for usage/errors

---

## How It Works

1. **User submits form** → Data validation happens
2. **Form data saved to Firebase** → Always happens first
3. **Email sent via EmailJS** → Uses browser fetch API
4. **You receive email** → Sent to dikshakapoorbti@gmail.com
5. **User sees success message** → Form resets

**Note**: Even if the email fails to send, the form data is still saved in Firebase, so no submissions are lost!

---

## Troubleshooting

### Email not received?
1. Check spam folder
2. Verify EmailJS credentials in `.env`
3. Check EmailJS dashboard for quota limits
4. Look at browser console for error messages

### Getting "EmailJS not configured" warning?
- Make sure `.env` file exists in project root
- Verify variable names start with `VITE_`
- Restart the development server after creating `.env`

### Form submits but no email sent?
- Check EmailJS free tier limits (200 emails/month)
- Verify the email service is connected properly
- Check EmailJS dashboard logs

---

## Production Deployment

### For Vercel/Netlify:
1. Go to your project settings
2. Add environment variables:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
3. Redeploy your site

### Security Notes:
- The public key is safe to expose in the browser
- Rate limiting is handled by EmailJS
- Additional security is built into the form (honeypot, rate limiting)

---

## Cost

**Free Tier** (Current plan):
- 200 emails/month
- 2 email templates
- 2 email services
- Perfect for small business websites

**If you need more**:
- **Personal Plan**: $8/month for 1,000 emails
- **Professional Plan**: $15/month for 5,000 emails

---

## Alternative: Using Firebase Functions

If you prefer a backend solution, you can use Firebase Cloud Functions instead. This requires:
1. Upgrade to Firebase Blaze plan (pay-as-you-go)
2. Set up SendGrid or similar email service
3. Deploy a Cloud Function to send emails

Let me know if you want help setting this up instead!

---

**Setup Complete!** ✅
Once you've followed these steps, emails will be sent to dikshakapoorbti@gmail.com every time someone submits the contact form.
