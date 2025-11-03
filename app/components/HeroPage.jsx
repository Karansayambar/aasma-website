"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const HeroPage = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-neutral-900">
      {/* Video Background with Parallax */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full scale-110"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://www.pexels.com/download/video/2835995/"
            type="video/mp4"
          />
        </video>

        {/* Sophisticated Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60"></div>
      </motion.div>

      {/* Elegant Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "100px 100px",
        }}
      />

      {/* Main Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col"
      >
        {/* Center Hero Content */}
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl w-full">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Column - Main Message */}
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.4 }}
                >
                  <div className="inline-flex items-center gap-2 mb-6 border-l-4 border-amber-500 pl-4">
                    <span className="text-amber-400 text-sm font-semibold tracking-[0.3em] uppercase">
                      Est. 2005
                    </span>
                  </div>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.6 }}
                  className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[0.9]"
                >
                  Crafting
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-orange-400">
                    Architectural
                  </span>
                  <br />
                  Excellence
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="text-xl text-white/70 mb-8 font-light leading-relaxed max-w-lg"
                >
                  Delivering premium construction with unmatched quality and
                  precision. Building dreams into reality since 2005.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 1 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <motion.button
                    whileHover={{
                      y: -3,
                      boxShadow: "0 20px 40px rgba(251, 191, 36, 0.3)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="group bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 font-semibold tracking-wide flex items-center justify-center gap-3 transition-all duration-300"
                  >
                    View Our Portfolio
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </motion.button>

                  <motion.button
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.98 }}
                    className="border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 font-semibold tracking-wide backdrop-blur-sm transition-all duration-300"
                  >
                    Get in Touch
                  </motion.button>
                </motion.div>
              </div>

              {/* Right Column - Stats Cards */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="hidden lg:grid grid-cols-2 gap-6"
              >
                {[
                  { number: "30+", label: "Projects", sublabel: "Completed" },
                  { number: "500+", label: "Units", sublabel: "Delivered" },
                  { number: "20+", label: "Years", sublabel: "Experience" },
                  { number: "98%", label: "Clients", sublabel: "Satisfied" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 + i * 0.1 }}
                    whileHover={{ y: -10, transition: { duration: 0.3 } }}
                    className="bg-white/5 backdrop-blur-md border border-white/10 p-8 group hover:bg-white/10 hover:border-amber-500/50 transition-all duration-500"
                  >
                    <div className="text-5xl font-bold text-amber-400 mb-2 group-hover:scale-110 transition-transform duration-500">
                      {stat.number}
                    </div>
                    <div className="text-white text-lg font-semibold">
                      {stat.label}
                    </div>
                    <div className="text-white/50 text-sm font-light">
                      {stat.sublabel}
                    </div>
                    <div className="w-12 h-1 bg-gradient-to-r from-amber-500 to-transparent mt-4 group-hover:w-full transition-all duration-500"></div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Features Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="pb-8 px-8 lg:px-16"
        >
          <div className="max-w-7xl mx-auto border-t border-white/10 pt-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: "🏆", text: "Award Winning" },
                { icon: "🔒", text: "100% Quality" },
                { icon: "⚡", text: "On-Time Delivery" },
                { icon: "💎", text: "Premium Materials" },
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.4 + i * 0.1 }}
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group cursor-pointer"
                >
                  <span className="text-2xl group-hover:scale-125 transition-transform duration-300">
                    {feature.icon}
                  </span>
                  <span className="text-sm font-light">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Sophisticated Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
        >
          <div className="text-white text-xs tracking-[0.2em] font-light">
            SCROLL
          </div>
          <div className="w-[2px] h-12 bg-gradient-to-b from-white to-transparent"></div>
        </motion.div>
      </motion.div>

      {/* Elegant Corner Frames */}
      {[
        "top-0 left-0 border-l-2 border-t-2",
        "top-0 right-0 border-r-2 border-t-2",
        "bottom-0 left-0 border-l-2 border-b-2",
        "bottom-0 right-0 border-r-2 border-b-2",
      ].map((position, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
          className={`absolute ${position} w-24 h-24 border-white/20`}
        />
      ))}
    </div>
  );
};

export default HeroPage;
