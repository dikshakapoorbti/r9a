# Retrospecta Solutions - Website

AI-powered business solutions portfolio website built with React + Vite, featuring 6 comprehensive AI project demonstrations.

**Live Site:** https://r9a.in
**Repository:** https://github.com/dikshakapoorbti/r9a

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm

### Local Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Visit `http://localhost:5173` to see the site locally.

---

## 📁 Project Structure

```
retrospecta-website/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── common/         # Card, Loader
│   │   ├── contact/        # Contact form with EmailJS
│   │   ├── insights/       # AI Insights demo components
│   │   ├── kyc/            # KYC verification demo components
│   │   ├── layouts/        # DemoLayout wrapper
│   │   ├── navigation/     # Navigation bar
│   │   └── constants/      # project.constant.js (all project data)
│   ├── data/               # Demo data for each AI project
│   ├── pages/              # Page components
│   │   ├── HomePage.jsx               # Landing page
│   │   ├── CareersPage.jsx            # Careers page
│   │   ├── ProjectDetailsWrapper.jsx  # Routes to demo pages
│   │   ├── AiInsights.jsx             # Churn Prediction demo
│   │   ├── AiKyc.jsx                  # KYC Verification demo
│   │   ├── AiSocialMedia.jsx          # Social Media Manager demo
│   │   ├── AiRecruitment.jsx          # Recruitment Automation demo
│   │   ├── AiSegmentation.jsx         # Customer Segmentation demo
│   │   └── AiReporting.jsx            # Reporting Automation demo
│   ├── lib/                # External libraries (Firebase)
│   ├── utils/              # Utility functions (security.js)
│   ├── App.jsx             # Main app with routing
│   ├── main.jsx            # Entry point
│   └── index.css           # Global Tailwind styles
├── public/                 # Static assets (logo, PDF)
├── dist/                   # Production build (**committed for cPanel deployment**)
├── .cpanel.yml             # cPanel Git deployment config
├── .htaccess               # Apache URL rewriting for React Router
├── deploy.sh               # Build script (for future Node.js setup)
└── package.json            # Dependencies
```

---

## 🎨 Features

### Core Features
- **6 AI Project Demonstrations** - Interactive live demos with real data
- **Responsive Design** - Mobile, tablet, desktop optimized
- **Performance Optimized** - Code splitting, lazy loading, ~240KB initial load
- **React Router** - Client-side routing with .htaccess support
- **Contact Form** - EmailJS integration with Firebase logging & bot protection
- **Careers Page** - Summer internship applications

### AI Projects Portfolio

1. **AI Data Insights & Churn Prediction** (`/project/ai-data-insights`)
   - Predict customer churn with 95% accuracy
   - Revenue forecasting with ML models

2. **AI Social Media Manager** (`/project/ai-social-media`)
   - Automate posting with n8n workflows
   - 90% time savings, 40% engagement increase

3. **AI Recruitment Automation** (`/project/ai-recruitment`)
   - Resume screening and interview scheduling
   - 70% faster hiring process

4. **AI Customer Segmentation** (`/project/ai-segmentation`)
   - ML-powered customer clustering
   - 3x conversion rate improvement

5. **AI Reporting Automation** (`/project/ai-reporting`)
   - Auto-generate reports from Excel/Sheets
   - 95% automation, 25 hours/week saved

6. **AI-Powered KYC Verification** (`/project/ai-kyc`)
   - Identity verification with 99% accuracy
   - Reduce onboarding from days to minutes

Each project includes:
- Live interactive demo with sample data
- Visual architecture diagrams
- Tech stack breakdown by layer
- Business value metrics and ROI
- Implementation roadmap

---

## 🛠️ Tech Stack

### Frontend
- **React 19.1** - UI library
- **Vite 7.1** - Build tool and dev server (extremely fast)
- **React Router 7.10** - Client-side routing
- **Tailwind CSS 4.1** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library

### Backend Services
- **Firebase Firestore** - Contact form data storage
- **EmailJS** - Email delivery service

### Build & Deployment
- **Vite** - Fast builds with automatic code splitting
- **cPanel Git Deployment** - Automated deployment from GitHub
- **Apache .htaccess** - URL rewriting for SPA routing

---

## 📧 Contact Form Setup

The contact form integrates EmailJS (email delivery) and Firebase (data storage).

### EmailJS Configuration
1. Create account at [EmailJS](https://www.emailjs.com/)
2. Set up email service and template
3. Update credentials in `src/components/contact/ContactForm.jsx`:
   ```javascript
   const SERVICE_ID = 'your_service_id';
   const TEMPLATE_ID = 'your_template_id';
   const PUBLIC_KEY = 'your_public_key';
   ```

### Firebase Configuration
1. Create project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Firestore Database
3. Update config in `src/lib/firebase.js`:
   ```javascript
   const firebaseConfig = {
     apiKey: "your_api_key",
     authDomain: "your_auth_domain",
     projectId: "your_project_id",
     // ... other fields
   };
   ```

**Note:** The MongoDB cluster mentioned in old docs is no longer used. Firebase is the current backend.

---

## 🚢 Deployment to cPanel

### How Deployment Works

**Key Concept:** cPanel Git deployment just copies files - it doesn't build your app.

**Workflow:**
```
1. Build locally: npm run build (creates dist/ folder)
2. Commit: git add -A && git commit -m "message"
3. Push: git push origin main
4. Deploy in cPanel Git Version Control interface
5. cPanel copies dist/* to public_html/
```

### Why Commit dist/ Folder?

- React apps need to be BUILT before deployment (`npm run build`)
- cPanel can't run npm or Node.js automatically (without special setup)
- Solution: Build locally, commit `dist/` folder to Git
- `.cpanel.yml` simply copies pre-built files

### Quick Deployment

```bash
# Make your changes in src/
npm run dev  # Test locally

# Build production version
npm run build

# Commit everything (including dist/)
git add -A
git commit -m "Your changes"
git push origin main

# Then in cPanel:
# Git Version Control → Manage → Pull or Deploy → Deploy HEAD Commit
```

###.cpanel.yml Configuration

```yaml
deployment:
  tasks:
    - export DEPLOYPATH=/home1/r9ainbd4/public_html/
    - /bin/cp -R dist/* $DEPLOYPATH
    - /bin/cp .htaccess $DEPLOYPATH
    - /bin/cp dist/index.html $DEPLOYPATH
```

Simple file copy - follows cPanel documentation pattern exactly.

**For step-by-step deployment guide, see [DEPLOYMENT_STEPS.md](DEPLOYMENT_STEPS.md)**

---

## 🔧 Performance Optimizations

### Code Splitting Strategy
- **React Router pages** - Lazy loaded per route
- **Contact form** - Lazy loaded (reduces initial bundle)
- **Demo components** - Split into separate chunks
- **Vendor libraries** - Separated (React, Firebase, EmailJS)

### Bundle Sizes (Gzipped)
```
Main bundle:      ~8.5 KB  (3 KB gzipped)
React vendor:   ~225 KB  (72 KB gzipped)
Firebase vendor: ~297 KB  (73 KB gzipped)
Demo pages:      ~7-11 KB each (lazy loaded)
Total initial:   ~240 KB  (optimized for fast load)
```

### Optimization Techniques
- Tree shaking (removes unused code)
- Minification with esbuild
- CSS extraction and minification
- DNS prefetching for external services
- Module preloading for critical resources
- Image optimization
- .htaccess caching headers

---

## 🎯 Managing Project Data

All project information is centralized in:
```
src/components/constants/project.constant.js
```

Each project object includes:
- Basic info (title, slug, description, category, stats, image)
- Objectives and business use case
- Executive summary
- Tech stack (by layer)
- High-level design layers
- Sample dataset information
- Key insights
- Business value metrics
- Next steps and future enhancements

### Adding a New Project

1. **Add project to constants**
   ```javascript
   // src/components/constants/project.constant.js
   {
     title: "Your Project Name",
     slug: "your-project-slug",
     type: "demo",
     // ... other fields
   }
   ```

2. **Create demo data file**
   ```javascript
   // src/data/yourProjectDemo.jsx
   export const demoData = [ /* your data */ ];
   ```

3. **Create demo page component**
   ```javascript
   // src/pages/AiYourProject.jsx
   import DemoLayout from "../components/layouts/DemoLayout";
   // ... build your demo
   ```

4. **Add route in ProjectDetailsWrapper**
   ```javascript
   const AiYourProject = lazy(() => import("./AiYourProject.jsx"));
   // ... add route
   ```

5. **Add architecture diagram in DemoLayout** (optional)

---

## 🧪 Development Workflow

### Making Changes

```bash
# 1. Start dev server
npm run dev

# 2. Make changes in src/
# Changes hot-reload automatically

# 3. Test in browser
# Open http://localhost:5173

# 4. Build for production
npm run build

# 5. Test production build
npm run preview

# 6. Commit and deploy
git add -A
git commit -m "Describe your changes"
git push origin main

# 7. Deploy in cPanel Git interface
```

### Code Quality

```bash
# Run ESLint
npm run lint

# Auto-fix linting issues
npm run lint -- --fix
```

---

## 🐛 Troubleshooting

### Common Issues

**Changes not showing after deployment**
- Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- Check cPanel deployment logs for errors
- Try incognito/private browsing mode

**404 on page refresh**
- Ensure `.htaccess` is in `public_html/`
- Enable "Show Hidden Files" in cPanel File Manager
- Check Apache mod_rewrite is enabled

**Contact form not working**
- Verify EmailJS credentials
- Check Firebase configuration
- Open browser console (F12) for error messages

**Build fails**
- Delete `node_modules/`: `rm -rf node_modules`
- Reinstall: `npm install`
- Check Node.js version: `node -v` (must be 18+)

**For detailed troubleshooting, see [TROUBLESHOOTING.md](TROUBLESHOOTING.md)**

---

## 🔐 Security Features

### Bot Protection
- **Honeypot fields** - Invisible to humans, catch bots
- **Rate limiting** - Max 3 submissions per 5 minutes
- **Input validation** - All fields sanitized
- **Firebase security rules** - Restrict data access

### Best Practices
- XSS protection via React's default escaping
- HTTPS enforced via .htaccess
- No sensitive data in client-side code
- Secure Firebase configuration

---

## 📚 Documentation

- **README.md** (this file) - Complete project guide
- **[DEPLOYMENT_STEPS.md](DEPLOYMENT_STEPS.md)** - Deployment walkthrough
- **[TROUBLESHOOTING.md](TROUBLESHOOTING.md)** - Common issues and fixes

---

## 🎓 For New Developers

### Getting Started Checklist

1. ✅ Install Node.js 18+
2. ✅ Clone repo: `git clone https://github.com/dikshakapoorbti/r9a.git`
3. ✅ Install dependencies: `npm install`
4. ✅ Start dev server: `npm run dev`
5. ✅ Open http://localhost:5173
6. ✅ Make changes in `src/`
7. ✅ Build: `npm run build`
8. ✅ Commit with `dist/`: `git add -A && git commit`
9. ✅ Push and deploy in cPanel

### Key Files to Understand

1. **src/App.jsx** - Main app, routing, footer
2. **src/pages/HomePage.jsx** - Landing page with hero and projects grid
3. **src/components/constants/project.constant.js** - **ALL project data here**
4. **src/components/layouts/DemoLayout.jsx** - Wrapper for demo pages
5. **src/components/contact/ContactForm.jsx** - Form logic, validation, EmailJS
6. **.cpanel.yml** - Deployment config (copies dist/ files)
7. **.htaccess** - Apache config for React Router support

### Important Notes

- **Always run `npm run build` before committing** - Ensures `dist/` is up to date
- **dist/ folder is committed** - Required for cPanel deployment
- **Project data is centralized** - Edit `project.constant.js`, not individual pages
- **Use lazy loading** - Keep initial bundle small for performance

---

## 📞 Contact

**Email:** contact@r9a.in
**Website:** https://r9a.in
**GitHub:** https://github.com/dikshakapoorbti/r9a

---

## 📄 License

Proprietary - © 2025 Retrospecta Solutions. All rights reserved.

---

**Built with ❤️ by Retrospecta Solutions**
