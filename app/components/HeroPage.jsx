"use client";
import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const HeroPage = () => {
  const { scrollYProgress } = useScroll();
  const [time, setTime] = useState(new Date());
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleScrollTo = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-neutral-900">
      {/* Professional Video Background */}
      <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://cdn.pixabay.com/video/2023/02/28/160456-804004017_tiny.mp4"
            type="video/mp4"
          />
          {/* Fallback video sources */}
          <source
            src="https://assets.codepen.io/3364143/7b5f1d1b-7d9a-4c30-9b5b-5c5c5b5b5b5b.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Enhanced Video Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/95 via-slate-900/60 to-neutral-900/95"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-neutral-900/90"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/80 via-transparent to-neutral-900/80"></div>

        {/* Subtle Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      </motion.div>

      {/* Main Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 min-h-screen flex flex-col justify-center"
      >
        {/* Center Content */}
        <div className="px-6 lg:px-16">
          <div className="max-w-4xl mx-auto">
            {/* Main Title */}
            <div className="text-left mb-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex items-center gap-4 mb-8"
              >
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: 60 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-px bg-emerald-400"
                />
                <div className="text-emerald-400 pt-20 md:pt-0 text-sm font-light tracking-widest uppercase">
                  Excellence Since 2005
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-6 leading-tight"
              >
                <span className="block">Building The</span>
                <span className="block font-normal">Future With</span>
                <span className="block text-emerald-400 font-light">
                  Precision
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg text-white/80 font-light max-w-2xl leading-relaxed mb-12"
              >
                Transforming architectural visions into extraordinary realities
                through innovative design, superior craftsmanship, and
                sustainable construction practices.
              </motion.p>
            </div>

            {/* Stats - Minimal */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
            >
              {[
                { number: "30+", label: "Projects Completed" },
                { number: "98%", label: "Client Satisfaction" },
                { number: "20+", label: "Years Experience" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 + i * 0.1 }}
                  className="text-left group"
                >
                  <div className="text-2xl lg:text-3xl font-light text-white mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                    {stat.number}
                  </div>
                  <div className="text-white/60 text-sm font-light tracking-wide">
                    {stat.label}
                  </div>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1, delay: 1 + i * 0.1 }}
                    className="h-0.5 bg-emerald-400/30 mt-3 group-hover:bg-emerald-400/60 transition-colors"
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 items-start mb-20"
            >
              <motion.button
                onClick={() => handleScrollTo("projects")}
                whileHover={{
                  x: 10,
                  backgroundColor: "rgba(16, 185, 129, 0.1)",
                }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center gap-6 px-8 py-4 text-white font-light text-lg border border-emerald-400/30 hover:border-emerald-400 transition-all duration-500 backdrop-blur-sm"
              >
                <span>View Our Portfolio</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-emerald-400"
                >
                  →
                </motion.span>
              </motion.button>

              <motion.button
                onClick={() => handleScrollTo("contact")}
                whileHover={{
                  x: 10,
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center gap-6 px-8 py-4 text-white/70 font-light text-lg border border-white/20 hover:border-white/40 hover:text-white transition-all duration-500 backdrop-blur-sm"
              >
                <span>Start Your Project</span>
              </motion.button>
            </motion.div>

            {/* Services Preview */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="pt-12 border-t border-white/10"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Architectural Design",
                    description:
                      "Innovative concepts and detailed technical drawings",
                    icon: "📐",
                  },
                  {
                    title: "Construction Management",
                    description:
                      "End-to-end project oversight and quality control",
                    icon: "🏗️",
                  },
                  {
                    title: "Sustainable Solutions",
                    description:
                      "Eco-friendly materials and energy-efficient designs",
                    icon: "🌱",
                  },
                ].map((service, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 + i * 0.2 }}
                    className="group p-6 hover:bg-white/5 transition-all duration-500 border border-transparent hover:border-white/10"
                  >
                    <div className="text-2xl mb-4">{service.icon}</div>
                    <h3 className="text-white font-light text-lg mb-3 group-hover:text-emerald-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-white/60 text-sm font-light leading-relaxed">
                      {service.description}
                    </p>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 0.8, delay: 1.4 + i * 0.2 }}
                      className="h-0.5 bg-emerald-400/20 mt-4 group-hover:bg-emerald-400/40 transition-colors"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="absolute bottom-0 left-0 right-0 px-8 lg:px-16 py-8"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center text-white/40 text-xs font-light tracking-wide gap-2">
            <div>Premium Construction Services Worldwide</div>
            <div>Architectural Excellence Since 1998</div>
            <div>Licensed & Certified Professionals</div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
        className="absolute bottom-8 right-8 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
        >
          <div className="text-white text-xs tracking-widest font-light uppercase -rotate-90 origin-center whitespace-nowrap mb-12">
            Scroll to Explore
          </div>
          <div className="w-px h-20 bg-gradient-to-t from-emerald-400 via-emerald-400/50 to-transparent" />
        </motion.div>
      </motion.div>

      {/* Video Loading Fallback */}
      <div className="absolute inset-0 bg-neutral-900 z-0 video-fallback hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-slate-800 to-neutral-900"></div>
      </div>

      <style jsx>{`
        .video-fallback {
          background: linear-gradient(45deg, #0f0f0f, #1a1a1a, #0f0f0f);
        }
        video {
          filter: brightness(0.8) contrast(1.1);
        }
      `}</style>
    </div>
  );
};

export default HeroPage;
