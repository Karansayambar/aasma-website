import React from "react";

const Header = () => {
  return (
    <header className="bg-transparent backdrop-blur-sm border-b border-gray-200/20 w-full z-100 absolute top-0 right-0 left-0">
      {/* Main Header Container */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-10 lg:py-4">
        <div className="flex flex-col lg:flex-row justify-between items-center py-4">
          {/* Company Name */}
          <div className="text-center lg:text-left mb-4 lg:mb-0">
            <p className="text-xl sm:text-2xl font-bold text-white whitespace-nowrap">
              AASMA INFRAVENTURE'S PVT. LTD.
            </p>
          </div>

          {/* Navigation Menu */}
          <nav className="w-full lg:w-auto">
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 lg:gap-6">
              {[
                "Home",
                "About Us",
                "Projects",
                "Upcoming Projects",
                "History",
                "Services",
                "Contact",
                "UPS-INFRA",
                "Career",
              ].map((item) => (
                <button
                  key={item}
                  className="px-3 py-2 text-sm sm:text-base text-white hover:text-blue-600 
                             transition-colors duration-200 whitespace-nowrap
                             hover:bg-white/50 rounded-lg backdrop-blur-sm"
                >
                  {item}
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
