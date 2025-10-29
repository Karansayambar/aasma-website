import React from "react";

const HeroPage = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          // poster="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        >
          {/* Multiple working video sources */}
          <source
            src="https://www.pexels.com/download/video/1197801/"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 lg:mb-8">
          Building Your
          <span className="block text-yellow-400">Dreams</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-8 lg:mb-12 max-w-3xl">
          Quality construction services with excellence and precision.
          Transforming visions into reality since 2010.
        </p>

        {/* Buttons Container */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8">
          {/* Our Projects Button */}
          <button
            className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold 
                          py-3 px-8 lg:py-4 lg:px-12 rounded-lg text-lg lg:text-xl 
                          transition-all duration-300 transform hover:scale-105 
                          shadow-lg hover:shadow-xl"
          >
            Our Projects
          </button>

          {/* Contact Us Button */}
          <button
            className="bg-transparent border-2 border-white hover:bg-white/20 
                          text-white font-bold py-3 px-8 lg:py-4 lg:px-12 rounded-lg 
                          text-lg lg:text-xl transition-all duration-300 
                          transform hover:scale-105 backdrop-blur-sm"
          >
            Contact Us
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
