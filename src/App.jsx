import React, { useState, useEffect } from "react";
import Navigation from "./components/navigation/Navigation.jsx";
import HomePage from "./pages/HomePage.jsx";
import CareersPage from "./pages/CareersPage.jsx";
import Logo from "./components/Logo.jsx";

const App = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    if (currentPage === "home") {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [currentPage]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavigateHome = () => {
    setCurrentPage("home");
    setActiveSection("home");
    scrollToSection("home");
  };

  const handleNavigateSection = (sectionId) => {
    setCurrentPage("home");
    setActiveSection(sectionId);
    scrollToSection(sectionId);
  };

  const handleNavigateCareers = () => {
    setCurrentPage("careers");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleApplyNow = () => {
    setCurrentPage("home");
    setTimeout(() => scrollToSection("contact"), 100);
  };

  const handleBackToHome = () => {
    setCurrentPage("home");
    scrollToSection("home");
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation
        activeSection={activeSection}
        onNavigateHome={handleNavigateHome}
        onNavigateSection={handleNavigateSection}
        onNavigateCareers={handleNavigateCareers}
      />
      {currentPage === "home" ? (
        <HomePage onScrollToSection={scrollToSection} />
      ) : (
        <CareersPage
          onApplyNow={handleApplyNow}
          onBackToHome={handleBackToHome}
        />
      )}

      <footer className="bg-gray-900 text-white py-12 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="mb-4">
                <Logo />
              </div>
              <p className="text-gray-400 max-w-md">
                Transforming businesses with innovative AI solutions and
                cutting-edge software development. Remote-first, globally
                connected.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button
                    onClick={handleNavigateHome}
                    className="hover:text-white transition-colors"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigateSection("projects")}
                    className="hover:text-white transition-colors"
                  >
                    Projects
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigateSection("contact")}
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleNavigateCareers}
                    className="hover:text-white transition-colors"
                  >
                    Careers
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-400">
                <li>contact@r9a.in</li>
                <li>Remote-First Global</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Retrospecta Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
