"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutUs = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  const stats = [
    { number: "30+", label: "Projects Completed", icon: "🏗️" },
    { number: "20+", label: "Years of Excellence", icon: "⏱️" },
    { number: "500+", label: "Units Sold", icon: "🏠" },
    { number: "98%", label: "Client Satisfaction", icon: "⭐" },
  ];

  const values = [
    {
      icon: "✅",
      title: "Quality Excellence",
      description: "Uncompromising quality in every project we undertake",
    },
    {
      icon: "🤝",
      title: "Integrity",
      description: "Honest and transparent in all our dealings",
    },
    {
      icon: "⚡",
      title: "Innovation",
      description: "Embracing new technologies and methods",
    },
    {
      icon: "🌱",
      title: "Sustainability",
      description: "Building for a better, greener future",
    },
  ];

  const teamMembers = [
    {
      name: "Pending (name to be confirmed)",
      position: "Pending (position or title to be added)",
      experience: "Pending (experience details to be added)",
    },
    {
      name: "Pending (name to be confirmed)",
      position: "Pending (position or title to be added)",
      experience: "Pending (experience details to be added)",
    },
    {
      name: "Pending (name to be confirmed)",
      position: "Pending (position or title to be added)",
      experience: "Pending (experience details to be added)",
    },
    {
      name: "Pending (name to be confirmed)",
      position: "Pending (position or title to be added)",
      experience: "Pending (experience details to be added)",
    },
  ];

  const AnimatedCounter = ({ end, duration = 2 }) => {
    const [count, setCount] = React.useState(0);
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

    React.useEffect(() => {
      if (!inView) return;

      const endValue = parseInt(end);
      const steps = 60;
      const increment = endValue / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= endValue) {
          setCount(endValue);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, (duration * 1000) / steps);

      return () => clearInterval(timer);
    }, [inView, end, duration]);

    return (
      <span ref={ref}>
        {count}
        {end.includes("+") ? "+" : end.includes("%") ? "%" : ""}
      </span>
    );
  };

  const handleScrollTo = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-black text-white overflow-hidden">
      {/* Hero Section with Parallax */}
      <motion.section
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{ opacity, scale }}
      >
        {/* Animated Background Grid */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/95 via-slate-900/60 to-neutral-900/95"></div>
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-neutral-500/10"
              style={{
                width: Math.random() * 300 + 100,
                height: Math.random() * 300 + 100,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
              }}
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                rotate: [0, Math.random() * 360],
                scale: [1, Math.random() + 0.5, 1],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.h1
              className="text-7xl md:text-9xl font-black mb-6 leading-none"
              style={{
                background:
                  "linear-gradient(135deg, #fff 0%, #fbbf24 50%, #f59e0b 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              BUILDING
              <br />
              <motion.span
                animate={{
                  textShadow: [
                    "0 0 20px #fbbf24",
                    "0 0 40px #fbbf24",
                    "0 0 20px #fbbf24",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                LEGACIES
              </motion.span>
            </motion.h1>
          </motion.div>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto font-light"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            For nearly two decades, Aasma Infraventures has been shaping
            skylines, delivering excellence, and creating spaces that inspire.
          </motion.p>

          <motion.div
            className="flex gap-4 text-2xl md:text-4xl font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.1 }}
            >
              <span className="text-amber-500">30+</span>
              <span className="text-sm text-gray-400">PROJECTS</span>
            </motion.div>
            <span className="text-gray-600">|</span>
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.1 }}
            >
              <span className="text-amber-500">500+</span>
              <span className="text-sm text-gray-400">UNITS</span>
            </motion.div>
            <span className="text-gray-600">|</span>
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.1 }}
            >
              <span className="text-amber-500">20+</span>
              <span className="text-sm text-gray-400">YEARS</span>
            </motion.div>
            <span className="text-gray-600">|</span>
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.1 }}
            >
              <span className="text-amber-500">98%</span>
              <span className="text-sm text-gray-400">Client Satisfaction</span>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-8 h-12 border-2 border-amber-500 rounded-full flex justify-center pt-2">
            <motion.div
              className="w-2 h-2 bg-amber-500 rounded-full"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.section>

      {/* Stats Section - Bold Cards */}
      {/* <section className="py-32 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-5xl md:text-7xl font-black text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            BY THE <span className="text-amber-500">NUMBERS</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -20 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-amber-500 to-orange-600 rounded-3xl"
                  animate={{
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                />
                <div className="relative bg-black border-2 border-amber-500 rounded-3xl p-8 h-full">
                  <motion.div
                    className="text-6xl mb-4"
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                  >
                    {stat.icon}
                  </motion.div>
                  <div className="text-6xl font-black text-amber-500 mb-2">
                    <AnimatedCounter end={stat.number} />
                  </div>
                  <div className="text-gray-400 font-semibold uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Story Section - Split with Image */}
      <section className="py-32 px-4 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <motion.div
            className="absolute top-0 right-0 w-96 h-96 bg-amber-500 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.5, 1],
              x: [0, 100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.h2
                className="text-6xl md:text-7xl font-black mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                OUR
                <br />
                <span className="text-amber-500">STORY</span>
              </motion.h2>

              <div className="space-y-6 text-lg text-gray-300 font-light leading-relaxed">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  Founded in 2005, Aasma Infraventures began as a small family
                  business with a bold vision — to build quality homes that last
                  for generations. From our first residential project to
                  becoming one of the most trusted names in the construction
                  industry, our journey has been defined by passion and
                  integrity.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  Over the years, we have completed more than 30 projects and
                  proudly handed over 500+ units to happy homeowners. Each
                  milestone reflects our unwavering commitment to excellence,
                  innovation, and customer satisfaction.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  Today, Aasma Infraventures continues to grow, focusing on
                  sustainable development, modern design, and enduring quality —
                  building not just structures, but lasting relationships and
                  trusted communities.
                </motion.p>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                className="relative"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.4 }}
              >
                {/* Enhanced Background Glow */}
                <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/30 via-orange-600/20 to-amber-500/30 rounded-3xl blur-3xl opacity-70 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Main Card */}
                <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 group-hover:border-amber-500/60 transition-all duration-500 shadow-2xl shadow-black/50">
                  {/* Header */}
                  <div className="text-center mb-8">
                    <motion.div
                      className="inline-flex items-center gap-3 text-amber-500 text-sm font-semibold uppercase tracking-wider mb-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <div className="w-1 h-1 bg-amber-500 rounded-full" />
                      Featured Projects
                      <div className="w-1 h-1 bg-amber-500 rounded-full" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white">
                      Our Portfolio
                    </h3>
                  </div>

                  {/* Grid Layout */}
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      {
                        image: "../aboutImg.jpeg",
                        label: "Commercial",
                        color: "from-blue-500/20 to-cyan-600/20",
                      },
                      {
                        image: "../aboutImg2.jpeg",
                        label: "Residential",
                        color: "from-emerald-500/20 to-green-600/20",
                      },
                      {
                        image: "../aboutImg3.jpeg",
                        label: "Infrastructure",
                        color: "from-purple-500/20 to-pink-600/20",
                      },
                      {
                        image: "../aboutImg4.jpeg",
                        label: "Transport",
                        color: "from-orange-500/20 to-red-600/20",
                      },
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        className="group relative"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                      >
                        {/* Card Hover Effect */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10`}
                        />

                        <motion.div
                          className="relative bg-gray-900 rounded-xl overflow-hidden border border-gray-700/50 group-hover:border-amber-500/50 flex flex-col items-center justify-center aspect-square transition-all duration-500 group-hover:shadow-2xl"
                          whileHover={{
                            scale: 1.05,
                            y: -4,
                            transition: { duration: 0.3 },
                          }}
                        >
                          {/* Image Container */}
                          <div className="relative w-full h-full overflow-hidden">
                            <motion.img
                              src={item.image}
                              alt={item.label}
                              className="w-full h-full  transition-transform duration-700 group-hover:scale-110"
                              whileHover={{ scale: 1.1 }}
                              transition={{ duration: 0.6 }}
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          </div>

                          {/* Content Overlay */}
                          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                            <motion.div
                              className="text-center"
                              initial={{ y: 10 }}
                              whileHover={{ y: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              {/* Label with Icon */}
                              <motion.div
                                className="flex items-center justify-center gap-2 mb-1"
                                initial={{ opacity: 0.8 }}
                                whileHover={{ opacity: 1 }}
                              >
                                <div className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                                {/* <span className="text-sm font-semibold text-white tracking-wide">
                                  {item.label}
                                </span> */}
                                <div className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                              </motion.div>

                              {/* View Project Text */}
                              <motion.div
                                className="text-xs text-amber-500 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-1"
                                initial={{ y: 5 }}
                                whileHover={{ y: 0 }}
                              >
                                View Projects
                                <svg
                                  className="w-3 h-3 transform group-hover:translate-x-1 transition-transform duration-300"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                  />
                                </svg>
                              </motion.div>
                            </motion.div>
                          </div>

                          {/* Corner Accents */}
                          <div className="absolute top-3 left-3 w-2 h-2 border-t-2 border-l-2 border-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          <div className="absolute top-3 right-3 w-2 h-2 border-t-2 border-r-2 border-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          <div className="absolute bottom-3 left-3 w-2 h-2 border-b-2 border-l-2 border-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          <div className="absolute bottom-3 right-3 w-2 h-2 border-b-2 border-r-2 border-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-4 left-4 w-2 h-2 bg-amber-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-4 right-4 w-2 h-2 bg-amber-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-amber-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 right-4 w-2 h-2 bg-amber-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section - Hexagon Grid */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="absolute top-0 left-0 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-600/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 text-amber-500 text-sm font-semibold uppercase tracking-wider mb-4">
              <div className="w-2 h-2 bg-amber-500 rounded-full" />
              Our Philosophy
              <div className="w-2 h-2 bg-amber-500 rounded-full" />
            </div>
            <motion.h2
              className="text-4xl md:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Core <span className="text-amber-500">Values</span>
            </motion.h2>
            <motion.p
              className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              The fundamental principles that guide our decisions and shape our
              culture
            </motion.p>
          </motion.div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 },
                }}
              >
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

                {/* Card */}
                <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 group-hover:border-amber-500/30 rounded-2xl p-8 h-full transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-amber-500/10">
                  {/* Icon Container */}
                  <motion.div
                    className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 5 }}
                  >
                    <div className="text-2xl text-white">{value.icon}</div>
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-amber-500 transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 leading-relaxed transition-colors duration-300">
                    {value.description}
                  </p>

                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-amber-500 to-orange-600 group-hover:w-3/4 transition-all duration-500 rounded-t-full" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-5xl md:text-7xl font-black text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            MEET OUR <span className="text-amber-500">LEADERS</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -20 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-orange-600 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

                <div className="relative bg-gradient-to-br from-gray-800 to-black border-2 border-gray-700 group-hover:border-amber-300 rounded-3xl overflow-hidden transition-all duration-500">
                  <div className="h-48 relative overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-black/50"
                      whileHover={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-8xl">
                      👤
                    </div>
                  </div>

                  <div className="p-6 text-center">
                    <h3 className="text-xl font-black text-white mb-2">
                      {member.name}
                    </h3>
                    <p className="text-amber-500 font-bold mb-2 text-sm uppercase tracking-wider">
                      {member.position}
                    </p>
                    <p className="text-gray-400 text-sm">{member.experience}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 bg-gradient-to-br from-amber-500 via-blue-500 to-amber-500 relative overflow-hidden">
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.h2
            className="text-5xl md:text-8xl font-black text-black mb-8"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            READY TO BUILD
            <br />
            TOGETHER?
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-black/80 mb-12 font-semibold"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Let's discuss how we can bring your vision to life with our
            expertise and dedication.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <motion.button
              className="bg-black text-white font-black py-6 px-12 rounded-full text-xl uppercase tracking-wider relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleScrollTo("contact")}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-100"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">Start Your Project</span>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
