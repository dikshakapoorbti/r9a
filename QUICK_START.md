# Quick Start - Email Setup

## 🚀 Get Emails Working in 5 Minutes!

### Step 1: Sign up for EmailJS
Go to: https://www.emailjs.com/

### Step 2: Get Your 3 Credentials
After signup, you'll get:
1. **Service ID** (from Email Services page)
2. **Template ID** (from Email Templates page)
3. **Public Key** (from Account → General)

### Step 3: Create `.env` File
In your project root, create a file named `.env` and add:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

Replace the values with your actual credentials from EmailJS.

### Step 4: Restart Server
```bash
# Stop the current server (Ctrl+C)
# Start again
npm run dev
```

### Step 5: Test
1. Visit http://localhost:5173
2. Scroll to contact form
3. Submit a test message
4. Check **dikshakapoorbti@gmail.com** for the email!

---

## Need Detailed Instructions?
See [EMAIL_SETUP.md](EMAIL_SETUP.md) for the complete step-by-step guide.

## Performance Results
- ✅ HomePage loads **96% faster** (11KB vs 313KB)
- ✅ No more email delivery issues
- ✅ All security measures in place

---

**Questions?** Check [PERFORMANCE_IMPROVEMENTS.md](PERFORMANCE_IMPROVEMENTS.md) for full details.
