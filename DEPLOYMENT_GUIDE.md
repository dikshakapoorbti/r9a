# cPanel Deployment Guide

## Quick Deployment Steps

### 1. Push to Git Remote
```bash
git push origin main
```

### 2. Deploy in cPanel
1. Log into cPanel
2. Go to **Git Version Control**
3. Find your repository and click **Manage**
4. Click the **Pull or Deploy** tab
5. Click **Deploy HEAD Commit** button

### 3. Verify Deployment

After deployment completes, verify it worked by checking:

#### Method 1: View Page Source
1. Visit your website
2. Right-click → View Page Source (or press `Ctrl+U` / `Cmd+U`)
3. Look for this line in the `<head>` section:
   ```html
   <!-- Deployment Test: v1.0.0 - Dec 22, 2025 -->
   ```

#### Method 2: Check Footer
1. Visit your website
2. Scroll to the bottom footer
3. You should see: **"v1.0.0 • Dec 22, 2025"** in small gray text

## Deployment Configuration

**File:** `.cpanel.yml`
- Automatically runs `npm install`
- Builds production bundle with `npm run build`
- Copies files to `/home1/r9ainbd4/public_html/`
- Deploys `.htaccess` for React Router support

**Deployment Path:** `/home1/r9ainbd4/public_html/`

## Troubleshooting

### Deployment Fails
- **Check Node.js version**: Must be 18+ (Setup Node.js App in cPanel)
- **Check build errors**: View deployment logs in cPanel Git interface
- **Verify .cpanel.yml**: Make sure deployment path is correct

### Website Shows Old Version
- **Hard refresh**: Press `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- **Clear browser cache**: Or try in incognito/private mode
- **Check deployment logs**: Ensure deployment actually completed

### React Router Not Working (404 on refresh)
- **Verify .htaccess deployed**: Check if file exists in public_html
- **Check Apache mod_rewrite**: Must be enabled (usually is by default)

## Recent Commits

1. **b7e72ea** - Test deployment with version indicator v1.0.0
2. **7c73214** - Add cPanel deployment configuration with automatic build

## Version History

- **v1.0.0** (Dec 22, 2025) - Initial deployment with version tracking
