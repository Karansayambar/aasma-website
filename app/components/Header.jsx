"use client";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

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
    }
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
      ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-gray-200"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-10 lg:py-4">
        <div className="flex flex-col lg:flex-row justify-between items-center py-4">
          <div className="text-center lg:text-left mb-4 lg:mb-0">
            <p
              className={`text-xl sm:text-2xl font-bold whitespace-nowrap transition-colors duration-300 ${
                scrolled ? "text-gray-900" : "text-white"
              }`}
            >
              AASMA INFRAVENTURE'S PVT. LTD.
            </p>
          </div>

          <nav className="w-full lg:w-auto">
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 lg:gap-6">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleScroll(item.id)}
                  className={`px-3 py-2 text-sm sm:text-base rounded-lg transition-all duration-200 whitespace-nowrap
                  ${
                    scrolled
                      ? "text-gray-900 hover:text-blue-600 hover:bg-gray-100"
                      : "text-white hover:text-blue-400 hover:bg-white/20 backdrop-blur-sm"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
