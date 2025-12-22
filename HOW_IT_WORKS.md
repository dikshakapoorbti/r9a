# How the Deployment Works

## Your Question: "This dist file was created by you"

You're correct! Here's what's happening and why:

## The Challenge

**React/Vite apps need to be BUILT before deployment:**
- Source code (`src/` folder) is NOT what goes to production
- You must run `npm run build` to create production files
- This creates the `dist/` folder with optimized HTML/CSS/JS

**cPanel Git deployment is simple:**
- It just copies files from your Git repo
- It does NOT run `npm install` or `npm run build` automatically
- It expects ready-to-deploy files in the repo

## The Solution (What We Did)

### Step 1: Build Locally
```bash
npm run build
```
This creates `dist/` folder with production files.

### Step 2: Commit dist/ to Git
Normally `dist/` is in `.gitignore` (not tracked by Git).
We removed it from `.gitignore` so we can commit the built files.

### Step 3: Simple .cpanel.yml
```yaml
---
deployment:
  tasks:
    - export DEPLOYPATH=/home1/r9ainbd4/public_html/
    - /bin/cp -R dist/* $DEPLOYPATH
    - /bin/cp .htaccess $DEPLOYPATH
    - /bin/cp dist/index.html $DEPLOYPATH
```

This follows cPanel docs exactly - just copy files!

## How It Works

```
Your Computer          Git Repository         cPanel Server
    │                       │                      │
    │  npm run build        │                      │
    │  ────────────>        │                      │
    │  (creates dist/)      │                      │
    │                       │                      │
    │  git add dist/        │                      │
    │  git commit           │                      │
    │  git push             │                      │
    │  ────────────────────>│                      │
    │                       │                      │
    │                       │  Deploy in cPanel    │
    │                       │  ──────────────────> │
    │                       │                      │
    │                       │  Copy dist/* files   │
    │                       │  Copy .htaccess      │
    │                       │  ──────────────────> │
    │                       │                 public_html/
```

## Workflow Going Forward

**Every time you make changes:**

1. Make your code changes in `src/`
2. Test locally: `npm run dev`
3. Build production: `npm run build`
4. Commit everything:
   ```bash
   git add -A
   git commit -m "Your message"
   git push origin main
   ```
5. Deploy in cPanel Git interface

## Why Not Build in cPanel?

**To build in cPanel, you would need:**
- Node.js application set up
- npm installed
- Build dependencies (hundreds of MB)
- 1-2 minutes build time per deployment

**Current approach:**
- ✅ Build on your fast computer
- ✅ Commit optimized files
- ✅ cPanel just copies files (instant!)
- ✅ No server resources wasted

## The dist/ Folder

**What's in it:**
```
dist/
├── index.html          (Your built app entry point)
├── assets/
│   ├── css/
│   │   └── index-xxx.css    (Optimized CSS)
│   └── js/
│       ├── index-xxx.js     (Main bundle)
│       ├── HomePage-xxx.js  (Lazy loaded)
│       └── ...              (Other chunks)
├── r9a-logo.png
└── ...
```

**Key points:**
- File names have hashes (e.g., `index-BQQ2-gWy.css`)
- This is for cache busting (forces browser to load new version)
- Vite automatically generates this on `npm run build`

## Is This Normal?

**For static hosting (like cPanel):** YES!
- GitHub Pages: Commit built files
- Netlify/Vercel: They build for you (but they have build servers)
- cPanel: Expects built files

**For platforms with build servers:** They run `npm run build` automatically.

## Summary

✅ **dist/ is pre-built on your computer**
✅ **dist/ is committed to Git** (not ignored)
✅ **.cpanel.yml copies dist/ files** (no building)
✅ **Follows cPanel documentation pattern** (simple file copy)

This is the standard approach for deploying React apps to cPanel!
