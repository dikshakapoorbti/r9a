# Deployment Troubleshooting Guide

## Issue: Changes Not Visible After Deployment

### Step 1: Check Deployment Logs in cPanel

1. Go to **cPanel → Git Version Control**
2. Click **Manage** on your repository
3. Look at the **Deployment** section
4. Check for any **ERROR** messages in the log

**Common errors:**
- `npm: command not found` → Node.js not set up
- `Permission denied` → File permission issues
- `No such file or directory` → Path incorrect

---

### Step 2: Verify Build Actually Happened

The deployment MUST run `npm run build` to create the production files.

**Check if deployment ran these commands:**
```bash
npm ci --production=false
npm run build
cp -R dist/. /home1/r9ainbd4/public_html/
```

If the deployment log shows errors at any step, that's your issue.

---

### Step 3: Check if Files Were Copied

**Via cPanel File Manager:**
1. Go to **cPanel → File Manager**
2. Navigate to `/home1/r9ainbd4/public_html/`
3. You should see these files:
   - `index.html`
   - `.htaccess`
   - `assets/` folder (with JS and CSS files)

**Check file timestamps:**
- Files should have **recent modification dates** (today's date)
- If files are old, deployment didn't copy new files

---

### Step 4: Verify Node.js Setup in cPanel

**The build requires Node.js 18+:**

1. Go to **cPanel → Setup Node.js App**
2. Check if Node.js application exists for your domain
3. If not, create one:
   - **Node.js version**: 18 or higher
   - **Application mode**: Production
   - **Application root**: `/home1/r9ainbd4/repository` (your repo path)
   - **Application URL**: Leave blank or your domain
   - **Application startup file**: Not needed for Git deployment

---

### Step 5: Manual Deployment Test

If automated deployment isn't working, try manually:

**Via SSH (if you have SSH access):**
```bash
cd /home1/r9ainbd4/repository  # Your repo location
npm install
npm run build
cp -R dist/* /home1/r9ainbd4/public_html/
cp .htaccess /home1/r9ainbd4/public_html/
chmod -R 755 /home1/r9ainbd4/public_html/
```

**Via cPanel Terminal:**
Same commands as above.

---

### Step 6: Check Browser Cache

Even if deployment worked, you might see old version due to caching:

**Clear browser cache:**
- Chrome/Edge: `Ctrl+Shift+Delete` (Windows) or `Cmd+Shift+Delete` (Mac)
- Or try **Incognito/Private window**
- Or **Hard Refresh**: `Ctrl+Shift+R` (Windows) / `Cmd+Shift+R` (Mac)

---

### Step 7: Verify .htaccess is Working

**Check if .htaccess file exists:**
1. cPanel File Manager → `/home1/r9ainbd4/public_html/`
2. Click **Settings** (top right) → Enable "Show Hidden Files"
3. Look for `.htaccess` file

**Content should be:**
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>
```

---

## Quick Diagnosis Checklist

- [ ] **Git deployment logs show success?** (No errors in cPanel Git interface)
- [ ] **Node.js 18+ installed?** (Setup Node.js App in cPanel)
- [ ] **Build command ran?** (`npm run build` in logs)
- [ ] **Files copied to public_html?** (Check File Manager timestamps)
- [ ] **`.htaccess` exists in public_html?** (Enable "Show Hidden Files")
- [ ] **Browser cache cleared?** (Hard refresh or incognito mode)
- [ ] **Correct permissions?** (Files should be 644, folders 755)

---

## Alternative: Manual Build and Upload

If Git deployment keeps failing, you can build locally and upload:

**On your computer:**
```bash
npm run build
```

**Upload via cPanel File Manager:**
1. Compress the `dist/` folder into a ZIP
2. Upload ZIP to `/home1/r9ainbd4/public_html/`
3. Extract it there
4. Upload `.htaccess` separately
5. Delete the ZIP file

---

## Most Common Issues & Fixes

### Issue 1: "npm: command not found"
**Fix:** Set up Node.js in cPanel (Setup Node.js App)

### Issue 2: Old files still showing
**Fix:**
- Clear browser cache (Ctrl+Shift+R)
- Check file timestamps in File Manager
- Add cache-busting version number to files

### Issue 3: 404 on page refresh
**Fix:**
- Verify `.htaccess` exists in public_html
- Check Apache has mod_rewrite enabled

### Issue 4: Build fails
**Fix:**
- Check Node.js version (must be 18+)
- Run `npm install` before build
- Check for syntax errors in code

### Issue 5: Files not copying
**Fix:** Updated `.cpanel.yml`:
- Changed `cp -R dist/*` to `cp -R dist/.`
- Added `-f` flag for force copy
- Added permission fix: `chmod -R 755`

---

## Contact Support If:

- Deployment logs show persistent errors
- Node.js Setup fails
- File permissions can't be changed
- `.htaccess` doesn't work (might need mod_rewrite enabled)

Your hosting provider can help with server-level issues.
