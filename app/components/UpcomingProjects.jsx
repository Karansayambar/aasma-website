"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const UpcomingProjects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const upcomingProjects = [
    {
      id: 1,
      name: "Aasma Enclave 16",
      location: "Zingabai Takli, Nagpur",
      type: "2BHK and 3BHK Luxurious Flats",
      price: "Pending (pricing details to be added)",
      launchDate: "Upcoming (launch date to be announced soon)",
      completion: "Pending (expected completion date to be confirmed)",
      status: "Upcoming Project",
      image: "../aasma-enclave-16.jpg",
      features: [
        "Luxurious 2BHK & 3BHK apartments",
        "Prime location in Zingabai Takli",
        "Modern architecture",
        "High-end amenities",
        "Ample parking space",
        "24/7 security",
      ],
      units: "Pending (unit count to be added)",
      description:
        "Aasma Enclave 16 is an upcoming residential project offering premium 2BHK and 3BHK flats in the prime locality of Zingabai Takli, Nagpur. Designed for modern living, it combines comfort, elegance, and convenience with luxury amenities.",
      category: "Residential",
    },

    // Optional placeholders for future upcoming projects
    {
      id: 2,
      name: "Pending (Upcoming Project 2)",
      location: "Pending (location details to be added)",
      type: "Pending (property type to be added)",
      price: "Pending (pricing details to be added)",
      launchDate: "Pending (launch date to be confirmed)",
      completion: "Pending (completion date to be confirmed)",
      status: "Pending (status update to be added)",
      image: "Pending (image to be updated)",
      features: ["Pending (features list to be updated)"],
      units: "Pending (unit count to be added)",
      description: "Pending (project description to be added).",
      category: "Pending (category to be confirmed)",
    },
    {
      id: 3,
      name: "Pending (Upcoming Project 3)",
      location: "Pending (location details to be added)",
      type: "Pending (property type to be added)",
      price: "Pending (pricing details to be added)",
      launchDate: "Pending (launch date to be confirmed)",
      completion: "Pending (completion date to be confirmed)",
      status: "Pending (status update to be added)",
      image: "Pending (image to be updated)",
      features: ["Pending (features list to be updated)"],
      units: "Pending (unit count to be added)",
      description: "Pending (project description to be added).",
      category: "Pending (category to be confirmed)",
    },
  ];

  const filters = [
    { key: "all", label: "All Projects" },
    { key: "Residential", label: "Residential" },
    { key: "Commercial", label: "Commercial" },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Pre-Launch":
        return "bg-purple-500/90 text-white";
      case "Coming Soon":
        return "bg-blue-500/90 text-white";
      case "Pre-Registration":
        return "bg-amber-500/90 text-white";
      default:
        return "bg-neutral-500/90 text-white";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "Pre-Launch":
        return "🚀";
      case "Coming Soon":
        return "📅";
      case "Pre-Registration":
        return "📝";
      default:
        return "🏗️";
    }
  };

  const filteredProjects =
    activeFilter === "all"
      ? upcomingProjects
      : upcomingProjects.filter((project) => project.category === activeFilter);

  const ProjectCard = ({ project, index }) => {
    const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        whileHover={{ y: -8 }}
        className="group bg-white overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
      >
        {/* Image Container */}
        <div className="relative h-100 overflow-hidden">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {/* Status Badge */}
          <div
            className={`absolute top-6 right-6 px-4 py-2 ${getStatusColor(
              project.status
            )} font-semibold text-sm backdrop-blur-sm flex items-center gap-2`}
          >
            <span>{getStatusIcon(project.status)}</span>
            {project.status}
          </div>

          {/* Launch Info Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <div className="mb-2">
              <div className="text-sm text-white/80 uppercase tracking-wider mb-1">
                Launching
              </div>
              <div className="text-2xl font-bold">{project.launchDate}</div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-neutral-900 mb-2">
              {project.name}
            </h3>
            <p className="text-sm text-neutral-600 flex items-center gap-2">
              <span>📍</span> {project.location}
            </p>
          </div>

          <p className="text-neutral-600 text-sm leading-relaxed mb-6 line-clamp-2">
            {project.description}
          </p>

          {/* Project Specs */}
          <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-neutral-200">
            <div>
              <div className="text-xs text-neutral-500 uppercase tracking-wider mb-1">
                Price
              </div>
              <div className="text-lg font-bold text-amber-600">
                {project.price}
              </div>
            </div>
            <div>
              <div className="text-xs text-neutral-500 uppercase tracking-wider mb-1">
                Completion
              </div>
              <div className="text-sm font-semibold text-neutral-900">
                {project.completion}
              </div>
            </div>
            <div>
              <div className="text-xs text-neutral-500 uppercase tracking-wider mb-1">
                Type
              </div>
              <div className="text-sm font-semibold text-neutral-900">
                {project.type}
              </div>
            </div>
            <div>
              <div className="text-xs text-neutral-500 uppercase tracking-wider mb-1">
                Units
              </div>
              <div className="text-sm font-semibold text-neutral-900">
                {project.units}
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="mb-6">
            <div className="text-xs text-neutral-500 uppercase tracking-wider mb-3 font-semibold">
              Key Features
            </div>
            <div className="flex flex-wrap gap-2">
              {project.features.slice(0, 4).map((feature, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 bg-neutral-100 text-neutral-700 text-xs font-medium"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-3">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 bg-neutral-900 hover:bg-amber-500 text-white py-3 font-semibold transition-all duration-300 flex items-center justify-center gap-2"
            >
              Register Interest
              <span>→</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 border-2 border-neutral-900 hover:bg-neutral-900 hover:text-white text-neutral-900 font-semibold transition-all duration-300"
              title="Save to Wishlist"
            >
              ♡
            </motion.button>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-white py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <div className="flex items-center gap-3 border-l-4 border-amber-500 pl-4">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 bg-amber-500 rounded-full"
              />
              <span className="text-amber-500 text-sm font-semibold tracking-[0.3em] uppercase">
                Coming Soon
              </span>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-6">
            Upcoming Developments
          </h1>

          <p className="text-xl text-neutral-600 max-w-3xl mx-auto font-light leading-relaxed mb-8">
            Discover our pipeline of exceptional properties. Be the first to
            explore these innovative developments and secure your dream home.
          </p>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {filters.map((filter) => (
              <motion.button
                key={filter.key}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-8 py-3 font-semibold transition-all duration-300 ${
                  activeFilter === filter.key
                    ? "bg-neutral-900 text-white"
                    : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                }`}
              >
                {filter.label}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Timeline Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-neutral-900 p-12 mb-24"
        >
          <div className="max-w-4xl mx-auto text-center text-white mb-12">
            <h2 className="text-4xl font-bold mb-4">Launch Timeline</h2>
            <p className="text-white/70 text-lg font-light">
              Our upcoming project schedule for 2025-2028
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quarter: "Q2 2025",
                project: "Aasma Enclave 16",
                status: "Pre-Launch",
              },
              {
                quarter: "Q3 2025",
                project: "AAsma Heights Phase 2",
                status: "Coming Soon",
              },
              {
                quarter: "Q4 2025",
                project: "AAsma Business Hub",
                status: "Pre-Registration",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-neutral-800 p-6 border-l-4 border-amber-500 hover:bg-neutral-700 transition-all duration-300"
              >
                <div className="text-amber-400 text-3xl font-bold mb-2">
                  {item.quarter}
                </div>
                <div className="text-white text-lg font-semibold mb-2">
                  {item.project}
                </div>
                <div className="text-white/60 text-sm">{item.status}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">
              Early Bird Benefits
            </h2>
            <p className="text-xl text-neutral-600 font-light">
              Advantages of pre-booking with AAsma Constructions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "💰",
                title: "Best Pricing",
                desc: "Exclusive pre-launch rates",
              },
              {
                icon: "🎯",
                title: "Unit Selection",
                desc: "Priority floor & unit choice",
              },
              {
                icon: "📋",
                title: "Flexible Payment",
                desc: "Customized payment plans",
              },
              {
                icon: "🎁",
                title: "Special Offers",
                desc: "Additional discounts & perks",
              },
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-neutral-50 p-6 text-center hover:bg-amber-50 transition-all duration-300 border border-neutral-200"
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-neutral-600">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-amber-500 to-orange-500 p-16 text-center relative overflow-hidden"
        >
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,0,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.5) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />

          <div className="max-w-3xl mx-auto relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Be Among the First
            </h2>
            <p className="text-white/90 text-lg mb-10 font-light">
              Join our priority list to receive exclusive updates, early
              pricing, and VIP access to our upcoming projects.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-6">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 text-neutral-900 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-900"
              />
              <motion.button
                whileHover={{ y: -3, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="bg-neutral-900 hover:bg-black text-white px-8 py-4 font-bold whitespace-nowrap transition-all duration-300"
              >
                Join Priority List
              </motion.button>
            </div>

            <p className="text-white/70 text-sm">
              ✓ Early access to projects • ✓ Exclusive pricing • ✓ No spam,
              unsubscribe anytime
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default UpcomingProjects;
