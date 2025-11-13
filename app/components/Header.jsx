"use client";
import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Home", id: "home" },
    { label: "About Us", id: "about-us" },
    { label: "Projects", id: "projects" },
    { label: "Upcoming Projects", id: "upcoming-projects" },
    { label: "History", id: "history" },
    { label: "Services", id: "usp-highlights" },
    { label: "Contact", id: "contact" },
    { label: "UPS-INFRA", id: "usp-highlights" },
    { label: "Career", id: "career" },
  ];

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMenuOpen(false); // close menu on click
    }
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gradient-to-b from-white/30 to-white/10 backdrop-blur-xl border-t border-white/20 shadow-[inset_0_0_30px_rgba(255,255,255,0.15)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-10 lg:py-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo / Title */}
          <div className="text-center lg:text-left">
            <p
              className={`text-xl sm:text-xl md:2xl font-bold whitespace-nowrap transition-colors duration-300 ${
                scrolled ? "text-gray-900" : "text-white"
              }`}
            >
              Aasma Infraventures
            </p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-6">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleScroll(item.id)}
                className={`px-3 py-2 text-sm sm:text-base rounded-lg transition-all duration-200 whitespace-nowrap ${
                  scrolled
                    ? "text-gray-900 hover:text-blue-600 hover:bg-gray-100"
                    : "text-white hover:text-blue-400 hover:bg-white/20 backdrop-blur-sm"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Icon */}
          <button
            className="lg:hidden p-2 rounded-md transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X
                className={`w-7 h-7 ${
                  scrolled ? "text-gray-900" : "text-white"
                }`}
              />
            ) : (
              <Menu
                className={`w-7 h-7 ${
                  scrolled ? "text-gray-900" : "text-white"
                }`}
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } ${
          scrolled
            ? "bg-gradient-to-b from-white/30 to-white/10 backdrop-blur-xl border-t border-white/20 shadow-[inset_0_0_30px_rgba(255,255,255,0.15)]"
            : "bg-gradient-to-b from-black/40 to-black/20 backdrop-blur-xl border-t border-white/10 shadow-[inset_0_0_30px_rgba(255,255,255,0.1)]"
        }`}
      >
        <nav className="flex flex-col items-center gap-3 py-4">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleScroll(item.id)}
              className={`px-3 py-2 text-base rounded-lg w-3/4 text-center transition-all duration-300 ${
                scrolled
                  ? "text-gray-900 hover:text-amber-600 hover:bg-white/40"
                  : "text-white hover:text-amber-400 hover:bg-white/20"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
