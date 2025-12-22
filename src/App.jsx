import React, { useState, useEffect, lazy, Suspense } from "react";
import {
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";

import Navigation from "./components/navigation/Navigation.jsx";
import Logo from "./components/Logo.jsx";
import PROJECTS from "./components/constants/project.constant.js";
import ScrollToTop from "./ScrollToTop.js";

// Lazy load page components for better initial load performance
const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const CareersPage = lazy(() => import("./pages/CareersPage.jsx"));
const ProjectDetailsWrapper = lazy(() => import('./pages/ProjectDetailsWrapper.jsx'));




/* ---------------- APP ---------------- */

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("home");

  /* Scroll spy only on home page */
  useEffect(() => {
    if (location.pathname !== "/") return;

    const handleScroll = () => {
      const sections = ["home", "projects", "contact"];
      const scrollPosition = window.scrollY + 120;

      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (!el) return;

        const { offsetTop, offsetHeight } = el;
        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActiveSection(section);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  /* ---------------- NAV HANDLERS ---------------- */

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleNavigateHome = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavigateSection = (id) => {
    navigate("/");
    setTimeout(() => scrollToSection(id), 100);
  };

  const handleNavigateCareers = () => navigate("/careers");

  const handleApplyNow = () => {
    navigate("/");
    setTimeout(() => scrollToSection("contact"), 100);
  };

  const handleBackToHome = () => navigate("/");

  const handleNavigateToProject = (project) => {
    navigate(`/project/${project.slug}`);
  };

  /* ---------------- JSX ---------------- */

  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <Navigation
        activeSection={activeSection}
        onNavigateHome={handleNavigateHome}
        onNavigateSection={handleNavigateSection}
        onNavigateCareers={handleNavigateCareers}
      />

      <Suspense fallback={
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-slate-600">Loading...</p>
          </div>
        </div>
      }>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                onScrollToSection={scrollToSection}
                onNavigateToProject={handleNavigateToProject}
              />
            }
          />

          <Route
            path="/careers"
            element={
              <CareersPage
                onApplyNow={handleApplyNow}
                onBackToHome={handleBackToHome}
              />
            }
          />

          <Route
            path="/project/:slug"
            element={<ProjectDetailsWrapper />}
          />
        </Routes>
      </Suspense>

      {/* ---------------- FOOTER ---------------- */}

      <footer className="bg-gray-900 text-white py-12 mt-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <Logo onClick={handleNavigateHome} />
              <p className="text-gray-400 mt-4 max-w-md">
                Transforming businesses through innovative AI solutions and
                cutting-edge software development.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={handleNavigateHome}>Home</button></li>
                <li><button onClick={() => handleNavigateSection("projects")}>Projects</button></li>
                <li><button onClick={() => handleNavigateSection("contact")}>Contact</button></li>
                <li><button onClick={handleNavigateCareers}>Careers</button></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Contact</h3>
              <p className="text-gray-400">contact@r9a.in</p>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400">
            <p>© 2025 Retrospecta Solutions</p>
            <p className="text-xs mt-2 text-gray-500">v1.0.0 • Dec 22, 2025</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;