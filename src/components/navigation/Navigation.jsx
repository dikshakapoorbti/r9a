import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "../Logo.jsx";

const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const Navigation = ({
  activeSection,
  onNavigateHome,
  onNavigateSection,
  onNavigateCareers,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOthersOpen, setIsOthersOpen] = useState(false);

  const handleLinkClick = (id) => {
    if (id === "home") {
      onNavigateHome?.();
    } else {
      onNavigateSection?.(id);
    }
    setIsMenuOpen(false);
    setIsOthersOpen(false);
  };

  const handleCareersClick = () => {
    onNavigateCareers?.();
    setIsMenuOpen(false);
    setIsOthersOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">

          {/* ✅ LOGO + NAME → HOME */}
          <div
            className="flex items-center gap-2 cursor-pointer select-none"
            onClick={onNavigateHome}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && onNavigateHome?.()}
          >
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {link.label}
              </button>
            ))}

            {/* Others Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsOthersOpen(true)}
              onMouseLeave={() => setIsOthersOpen(false)}
            >
              <button
                type="button"
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1"
                aria-haspopup="menu"
                aria-expanded={isOthersOpen}
              >
                Others
                <ChevronDown
                  size={16}
                  className={`transform transition-transform ${
                    isOthersOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isOthersOpen && (
                <div className="absolute top-full left-0 w-56 bg-white border border-gray-200 rounded-md shadow-lg overflow-hidden z-50">
                  <button
                    onClick={handleCareersClick}
                    className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    Careers
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-2">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className="px-3 py-2 text-left text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-md"
                >
                  {link.label}
                </button>
              ))}

              {/* Mobile Others */}
              <div>
                <button
                  onClick={() => setIsOthersOpen(!isOthersOpen)}
                  className="w-full px-3 py-2 text-left text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-md flex items-center justify-between"
                >
                  Others
                  <ChevronDown
                    size={16}
                    className={`transform transition-transform ${
                      isOthersOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOthersOpen && (
                  <div className="ml-4 mt-1">
                    <button
                      onClick={handleCareersClick}
                      className="block w-full text-left px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-md text-sm"
                    >
                      Careers
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
