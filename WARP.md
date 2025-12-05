# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Tooling & Commands

This is a React + Vite single-page application using Tailwind CSS and ESLint 9, with npm as the package manager (presence of `package-lock.json`). All commands should be run from the repository root.

- **Install dependencies**
  - `npm install`

- **Run the development server** (Vite dev server, defaults to port 5173)
  - `npm run dev`

- **Build for production**
  - `npm run build`

- **Preview the production build locally**
  - `npm run preview`

- **Lint the codebase** (ESLint 9 with React Hooks and React Refresh configs, see `eslint.config.js`)
  - `npm run lint`

- **Tests**
  - There is currently **no test runner or `npm test` script configured** in `package.json`.
  - Before adding or running tests, set up a test framework (e.g. Vitest or Jest) and add the corresponding npm scripts (for example, `"test"`, `"test:watch"`).
  - Agents should **not assume** any test commands exist; always check `package.json` for the authoritative list of scripts.

## High-Level Architecture

### Build & runtime stack

- **Bundler / dev server**: Vite (`vite.config.js`) with `@vitejs/plugin-react` and Tailwind CSS via `@tailwindcss/vite`.
- **Framework**: React 19, using functional components and hooks only.
- **Styling**:
  - Global stylesheet `src/index.css` imports Tailwind (`@import "tailwindcss";`).
  - Tailwind is configured in `tailwind.config.js` to scan `index.html` and `src/**/*.{js,ts,jsx,tsx}`.
  - Legacy `App.css` is present but the main layout uses Tailwind utility classes.
- **Linting**:
  - `eslint.config.js` uses the new flat config format.
  - Extends `@eslint/js` recommended rules plus `eslint-plugin-react-hooks` and `eslint-plugin-react-refresh` (Vite integration).
  - Browser globals are provided via `globals.browser`.
  - Custom rule: `'no-unused-vars'` ignores variables matching `^[A-Z_]` (useful for constants).

### Application entrypoint

- **`src/main.jsx`**
  - Imports `App` and `./index.css`.
  - Uses `createRoot(document.getElementById('root'))` and wraps `<App />` in `<StrictMode>`.
  - This file is the only React root; all routing and page-like behavior is implemented inside `App.jsx`.

### Top-level application component

- **`src/App.jsx`** contains **all** current UI logic and page structure. It defines several nested components inside a single file:
  - `App` (default export): orchestrates global state, navigation, and which "page" is shown.
  - `Navigation`: fixed top navigation bar with desktop and mobile variants.
  - `ContactForm`: contact/callback form section.
  - `HomePage`: main marketing/landing sections (`home`, `projects`, `contact`).
  - `CareersPage`: a separate, careers-focused page with internship details.

Key state management patterns in `App`:

- `currentPage` (`"home" | "careers"`)
  - Controls whether `HomePage` or `CareersPage` is rendered.
  - Navigation items (including the "Careers" link under the "Others" menu) update this state.

- `activeSection` (`"home" | "projects" | "contact"`)
  - Used only when `currentPage === "home"`.
  - A `useEffect` attaches a `scroll` listener in that mode, computing which section is in view by querying DOM elements by id (`document.getElementById`) for `home`, `projects`, and `contact` and comparing `window.scrollY` against their offsets.
  - The desktop nav highlights the active section by comparing this state and applying Tailwind classes.

- `isMenuOpen`
  - Tracks whether the mobile navigation menu is expanded.

- `isOthersOpen`
  - Shared state for the **"Others"** dropdown, used in both the desktop nav (hover-controlled) and mobile nav (click-controlled).
  - When modifying this behavior, take care that both desktop and mobile variants depend on the same flag and ensure it is reset appropriately when navigating.

The `scrollToSection(sectionId)` helper performs `document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })` and closes the mobile menu. If you introduce React Router or change layout structure, ensure section IDs (`home`, `projects`, `contact`) remain stable or update all call sites.

### Page composition

- **Home page (`HomePage`)**
  - Structured as stacked sections with Tailwind-based layout:
    - **Hero section** (`id="home"`):
      - Marketing copy explaining Retrospecta's AI and software development focus.
      - Call-to-action buttons "Get Started" (scrolls to `contact`) and "View Projects" (scrolls to `projects`).
      - Right-hand visual card using Lucide icons (`Brain`, `Code`, `Users`, `Rocket`).
    - **Services section**: three service cards (AI & ML, Software Development, Remote Consulting), generated from a local array and using Lucide icons.
    - **Projects section** (`id="projects"`): grid of featured project cards with gradients and metrics; currently static mock data.
    - **Contact section** (`id="contact"`): left column with contact info and right column with `ContactForm` wrapped in a styled panel.

- **Careers page (`CareersPage`)**
  - Uses the same global `Navigation` and `footer` as `HomePage` via the surrounding `App` component.
  - Contains content for a "Summer Internship Program 2025": description, requirements, and a bulleted list of benefits.
  - The "Apply Now" button switches `currentPage` back to `"home"` and then scrolls to the `contact` section after a short timeout, reusing the existing contact form for applications.

- **Footer**
  - Shared across both pages; lives inside `App` below the conditional render of `HomePage` / `CareersPage`.
  - Provides quick links that reuse the same navigation patterns (toggling `currentPage` and scrolling to sections with `scrollToSection`).

### Forms and external services

- **`ContactForm` (`src/components/contact/ContactForm.jsx`)**
  - Local `formData` state for `email`, `phone`, `company`, and `message`.
  - On submit, writes a document into the `contactRequests` collection in **Firebase Firestore** using the client SDK.
  - Firebase app + Firestore client are initialized in `src/lib/firebase.js` using Vite env vars (`VITE_FIREBASE_*`).
  - Displays inline error/success messages and disables the button while a submit is in progress.

## Guidance for Future Changes

- Centralized page orchestration now lives in `src/App.jsx`, while UI is split into components (`src/components`) and pages (`src/pages`). When modifying layout, preserve:
  - The state relationships in `App` (`currentPage`, `activeSection`).
  - Scroll-based section highlighting and IDs (`home`, `projects`, `contact`) used by navigation.
- If you change Firestore structure (e.g. collection name or fields), update both `ContactForm` and any external dashboards/queries that read from the same data.
- Before introducing tests or additional tooling (routing, state management libraries, etc.), update `package.json` scripts so agents can rely on them as the canonical interface for running commands.
