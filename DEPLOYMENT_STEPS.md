# Step-by-Step Deployment Instructions

## The Problem

cPanel Git deployment can't automatically run `npm install` and `npm run build` unless Node.js is properly set up as an application. Here are **TWO METHODS** to deploy:

---

## METHOD 1: Build Locally, Deploy via Git (RECOMMENDED)

This method builds on your computer, then deploys to cPanel.

### Step 1: Build Locally
```bash
npm run build
```

This creates the `dist/` folder with production files.

### Step 2: Commit the Build
```bash
git add dist/
git commit -m "Add production build for deployment"
git push origin main
```

### Step 3: Deploy in cPanel
1. Go to **cPanel → Git Version Control**
2. Click **Manage** on your repository
3. Click **Pull or Deploy** tab
4. Click **Deploy HEAD Commit**

The `.cpanel.yml` will:
- Copy files from `dist/` to `public_html/`
- Copy `.htaccess` for routing

### Step 4: Verify
- Visit your website
- Check footer for version number
- Hard refresh: `Ctrl+Shift+R` (or `Cmd+Shift+R` on Mac)

---

## METHOD 2: Setup Node.js App in cPanel (Automated Build)

This method sets up automatic building in cPanel.

### Step 1: Setup Node.js Application in cPanel

1. Go to **cPanel → Setup Node.js App**
2. Click **Create Application**
3. Fill in:
   - **Node.js version**: 18.x or higher
   - **Application mode**: Production
   - **Application root**: Path to your Git repository (e.g., `/home1/r9ainbd4/repository`)
   - **Application URL**: Your domain or subdirectory
   - **Application startup file**: Leave empty (not needed for build-only)
4. Click **Create**

### Step 2: Update .cpanel.yml

The `deploy.sh` script will run automatically when Node.js is available:

```yaml
---
deployment:
  tasks:
    - export DEPLOYPATH=/home1/r9ainbd4/public_html/
    - /bin/bash deploy.sh
    - /bin/cp -R dist/* $DEPLOYPATH
    - /bin/cp .htaccess $DEPLOYPATH
```

### Step 3: Deploy
1. Push code to Git
2. Deploy in cPanel Git interface
3. Check deployment logs for errors

---

## CURRENT ISSUE: Why Changes Aren't Showing

### Most Likely Causes:

1. **`dist/` folder not in repository**
   - The `.cpanel.yml` tries to copy from `dist/`
   - If `dist/` doesn't exist, nothing gets copied
   - **Solution**: Use METHOD 1 (build locally and commit `dist/`)

2. **Node.js not set up**
   - The `deploy.sh` script can't run without Node.js
   - **Solution**: Use METHOD 1 OR set up Node.js app (METHOD 2)

3. **Browser cache**
   - Old files cached in browser
   - **Solution**: Hard refresh (`Ctrl+Shift+R`)

4. **Deployment failed silently**
   - Check deployment logs in cPanel
   - Look for error messages

---

## QUICK FIX (Do This Now)

### Option A: Build & Deploy Immediately

```bash
# On your computer
npm run build
git add dist/
git add .gitignore  # Remove dist/ from .gitignore if it's there
git commit -m "Add dist folder for deployment v1.0.1"
git push origin main
```

Then deploy in cPanel.

### Option B: Manual Upload (If Git keeps failing)

```bash
# Build locally
npm run build
```

Then:
1. Compress the `dist/` folder to `dist.zip`
2. Go to cPanel → File Manager
3. Navigate to `/home1/r9ainbd4/public_html/`
4. Upload `dist.zip`
5. Extract it
6. Upload `.htaccess` file
7. Delete `dist.zip`

---

## Verification Checklist

After deployment:

- [ ] Visit website in incognito/private browser window
- [ ] Footer shows: **"v1.0.1 • Dec 22, 2025 • Build: 2025-12-22"**
- [ ] View page source shows: `<!-- Deployment Test: v1.0.1 - UPDATED Dec 22, 2025 -->`
- [ ] All project pages load correctly
- [ ] No console errors in browser DevTools (F12)

---

## Files Overview

- **`.cpanel.yml`**: Deployment configuration for cPanel
- **`deploy.sh`**: Build script (requires Node.js in cPanel)
- **`.htaccess`**: Apache config for React Router
- **`dist/`**: Production build folder (created by `npm run build`)

---

## Next Steps

**Choose one:**

1. ✅ **Quick Solution**: Build locally and commit `dist/` folder
2. ⚙️ **Proper Solution**: Set up Node.js app in cPanel for automated builds

For now, I recommend **Quick Solution** to get your site deployed immediately.
