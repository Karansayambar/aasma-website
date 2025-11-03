"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const projects = [
  {
    id: 1,
    name: "Aasma Enclave 1",
    location: "Pending (location details to be added)",
    type: "Pending (property type to be added)",
    price: "Pending (pricing details to be added)",
    status: "Pending (current project status to be added)",
    completion: "Pending (completion date to be confirmed)",
    image: "../01.jpg",
    features: ["Pending (features list to be updated)"],
    units: "Pending (unit count to be added)",
    description: "Pending (project description to be added).",
  },
  {
    id: 2,
    name: "Aasma Enclave 2",
    location: "Pending (location details to be added)",
    type: "Pending (property type to be added)",
    price: "Pending (pricing details to be added)",
    status: "Pending (current project status to be added)",
    completion: "Pending (completion date to be confirmed)",
    image: "../02.png",
    features: ["Pending (features list to be updated)"],
    units: "Pending (unit count to be added)",
    description: "Pending (project description to be added).",
  },
  {
    id: 3,
    name: "Aasma Enclave 3",
    location: "Pending (location details to be added)",
    type: "Pending (property type to be added)",
    price: "Pending (pricing details to be added)",
    status: "Pending (current project status to be added)",
    completion: "Pending (completion date to be confirmed)",
    image: "../03.jpeg",
    features: ["Pending (features list to be updated)"],
    units: "Pending (unit count to be added)",
    description: "Pending (project description to be added).",
  },
  {
    id: 4,
    name: "Aasma Enclave 4",
    location: "Pending (location details to be added)",
    type: "Pending (property type to be added)",
    price: "Pending (pricing details to be added)",
    status: "Pending (current project status to be added)",
    completion: "Pending (completion date to be confirmed)",
    image: "../04.jpeg",
    features: ["Pending (features list to be updated)"],
    units: "Pending (unit count to be added)",
    description: "Pending (project description to be added).",
  },
  {
    id: 5,
    name: "Aasma Enclave 5",
    location: "Pending (location details to be added)",
    type: "Pending (property type to be added)",
    price: "Pending (pricing details to be added)",
    status: "Pending (current project status to be added)",
    completion: "Pending (completion date to be confirmed)",
    image: "../05.jpeg",
    features: ["Pending (features list to be updated)"],
    units: "Pending (unit count to be added)",
    description: "Pending (project description to be added).",
  },
  {
    id: 6,
    name: "Aasma Enclave 6",
    location: "Pending (location details to be added)",
    type: "Pending (property type to be added)",
    price: "Pending (pricing details to be added)",
    status: "Pending (current project status to be added)",
    completion: "Pending (completion date to be confirmed)",
    image: "../06.jpg",
    features: ["Pending (features list to be updated)"],
    units: "Pending (unit count to be added)",
    description: "Pending (project description to be added).",
  },
  {
    id: 7,
    name: "Aasma Enclave 7",
    location: "Pending (location details to be added)",
    type: "Pending (property type to be added)",
    price: "Pending (pricing details to be added)",
    status: "Pending (current project status to be added)",
    completion: "Pending (completion date to be confirmed)",
    image: "../07.jpg",
    features: ["Pending (features list to be updated)"],
    units: "Pending (unit count to be added)",
    description: "Pending (project description to be added).",
  },
  {
    id: 8,
    name: "Aasma Enclave 8",
    location: "Pending (location details to be added)",
    type: "Pending (property type to be added)",
    price: "Pending (pricing details to be added)",
    status: "Pending (current project status to be added)",
    completion: "Pending (completion date to be confirmed)",
    image: "../08.jpg",
    features: ["Pending (features list to be updated)"],
    units: "Pending (unit count to be added)",
    description: "Pending (project description to be added).",
  },
  {
    id: 9,
    name: "Aasma Enclave 9",
    location: "Pending (location details to be added)",
    type: "Pending (property type to be added)",
    price: "Pending (pricing details to be added)",
    status: "Pending (current project status to be added)",
    completion: "Pending (completion date to be confirmed)",
    image: "../09.jpg",
    features: ["Pending (features list to be updated)"],
    units: "Pending (unit count to be added)",
    description: "Pending (project description to be added).",
  },
  {
    id: 10,
    name: "Aasma Enclave 10",
    location: "Pending (location details to be added)",
    type: "Pending (property type to be added)",
    price: "Pending (pricing details to be added)",
    status: "Pending (current project status to be added)",
    completion: "Pending (completion date to be confirmed)",
    image: "../10.jpg",
    features: ["Pending (features list to be updated)"],
    units: "Pending (unit count to be added)",
    description: "Pending (project description to be added).",
  },
  {
    id: 11,
    name: "Aasma Enclave 11",
    location: "Pending (location details to be added)",
    type: "Pending (property type to be added)",
    price: "Pending (pricing details to be added)",
    status: "Pending (current project status to be added)",
    completion: "Pending (completion date to be confirmed)",
    image: "../11.jpg",
    features: ["Pending (features list to be updated)"],
    units: "Pending (unit count to be added)",
    description: "Pending (project description to be added).",
  },
  {
    id: 12,
    name: "Aasma Enclave 12",
    location: "Pending (location details to be added)",
    type: "Pending (property type to be added)",
    price: "Pending (pricing details to be added)",
    status: "Pending (current project status to be added)",
    completion: "Pending (completion date to be confirmed)",
    image: "../12.jpg",
    features: ["Pending (features list to be updated)"],
    units: "Pending (unit count to be added)",
    description: "Pending (project description to be added).",
  },
  {
    id: 13,
    name: "Aasma Enclave 13",
    location: "Pending (location details to be added)",
    type: "Pending (property type to be added)",
    price: "Pending (pricing details to be added)",
    status: "Pending (current project status to be added)",
    completion: "Pending (completion date to be confirmed)",
    image: "../13.jpg",
    features: ["Pending (features list to be updated)"],
    units: "Pending (unit count to be added)",
    description: "Pending (project description to be added).",
  },
  {
    id: 14,
    name: "Aasma Enclave 14",
    location: "Pending (location details to be added)",
    type: "Pending (property type to be added)",
    price: "Pending (pricing details to be added)",
    status: "Pending (current project status to be added)",
    completion: "Pending (completion date to be confirmed)",
    image: "../14.jpg",
    features: ["Pending (features list to be updated)"],
    units: "Pending (unit count to be added)",
    description: "Pending (project description to be added).",
  },
  {
    id: 15,
    name: "Aasma Enclave 15",
    location: "Pending (location details to be added)",
    type: "Pending (property type to be added)",
    price: "Pending (pricing details to be added)",
    status: "Pending (current project status to be added)",
    completion: "Pending (completion date to be confirmed)",
    image: "../15.jpg",
    features: ["Pending (features list to be updated)"],
    units: "Pending (unit count to be added)",
    description: "Pending (project description to be added).",
  },

  // 🏢 Zainab Palace projects
  {
    id: 16,
    name: "Zainab Palace 1",
    location: "Pending (location details to be added)",
    type: "Pending (property type to be added)",
    price: "Pending (pricing details to be added)",
    status: "Pending (current project status to be added)",
    completion: "Pending (completion date to be confirmed)",
    image: "../zainab1.jpg",
    features: ["Pending (features list to be updated)"],
    units: "Pending (unit count to be added)",
    description: "Pending (project description to be added).",
  },
  {
    id: 17,
    name: "Zainab Palace 2",
    location: "Pending (location details to be added)",
    type: "Pending (property type to be added)",
    price: "Pending (pricing details to be added)",
    status: "Pending (current project status to be added)",
    completion: "Pending (completion date to be confirmed)",
    image: "../zainab2.jpg",
    features: ["Pending (features list to be updated)"],
    units: "Pending (unit count to be added)",
    description: "Pending (project description to be added).",
  },
];

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const getStatusColor = (status) => {
    switch (status) {
      case "Ready to Move":
        return "bg-emerald-500/90 text-white";
      case "Under Construction":
        return "bg-amber-500/90 text-white";
      case "Pre-Launch":
        return "bg-blue-500/90 text-white";
      default:
        return "bg-neutral-500/90 text-white";
    }
  };

  const filters = ["All", "Residential", "Commercial"];
  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.type === filter);

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
            )} font-semibold text-sm backdrop-blur-sm`}
          >
            {project.status}
          </div>

          {/* Type Badge */}
          <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 text-neutral-900 font-semibold text-sm backdrop-blur-sm">
            {project.type}
          </div>

          {/* Bottom Info Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 className="text-2xl font-bold mb-1">{project.name}</h3>
            <p className="text-sm text-white/90 flex items-center gap-2">
              <span>📍</span> {project.location}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-neutral-600 text-sm leading-relaxed mb-6 line-clamp-2">
            {project.description}
          </p>

          {/* Price & Area */}
          <div className="flex items-center justify-between mb-6 pb-6 border-b border-neutral-200">
            <div>
              <div className="text-xs text-neutral-500 uppercase tracking-wider mb-1">
                Starting Price
              </div>
              <div className="text-xl font-bold text-amber-600">
                {project.price}
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs text-neutral-500 uppercase tracking-wider mb-1">
                Area
              </div>
              <div className="text-sm font-semibold text-neutral-900">
                {project.area}
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.features.map((feature, i) => (
              <span
                key={i}
                className="px-3 py-1.5 bg-neutral-100 text-neutral-700 text-xs font-medium"
              >
                {feature}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-3">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 bg-neutral-900 hover:bg-amber-500 text-white py-3 font-semibold transition-all duration-300 flex items-center justify-center gap-2"
            >
              View Details
              <span>→</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 border-2 border-neutral-900 hover:bg-neutral-900 hover:text-white text-neutral-900 font-semibold transition-all duration-300"
            >
              📞
            </motion.button>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section className="min-h-screen bg-white py-24 px-6 lg:px-12">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-block mb-4">
            <span className="text-amber-500 text-sm font-semibold tracking-[0.3em] uppercase border-l-4 border-amber-500 pl-4">
              Our Portfolio
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-6">
            Signature Projects
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto font-light leading-relaxed">
            Experience a new definition of urban luxury with our handpicked
            developments designed for comfort, elegance, and lifestyle
            excellence.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center gap-4 flex-wrap"
        >
          {filters.map((f) => (
            <motion.button
              key={f}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setFilter(f)}
              className={`px-8 py-3 font-semibold transition-all duration-300 ${
                filter === f
                  ? "bg-neutral-900 text-white"
                  : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
              }`}
            >
              {f}
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Project Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto bg-neutral-900 p-12 mb-24"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { num: "30+", label: "Projects Delivered" },
            { num: "500+", label: "Happy Families" },
            { num: "2M+", label: "Sq.Ft Built" },
            { num: "20+", label: "Years Experience" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-white"
            >
              <div className="text-4xl font-bold text-amber-400 mb-2">
                {stat.num}
              </div>
              <div className="text-sm text-white/70 font-light uppercase tracking-wider">
                {stat.label}
              </div>
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
        className="max-w-6xl mx-auto bg-gradient-to-r from-amber-500 to-orange-500 p-16 text-center relative overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.5) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Find Your Perfect Property
          </h2>
          <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto font-light">
            Book a personalized consultation with our real estate experts and
            explore the best options tailored to your lifestyle and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ y: -3, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="bg-neutral-900 hover:bg-black text-white px-10 py-4 font-bold text-lg transition-all duration-300"
            >
              Schedule a Visit
            </motion.button>
            <motion.button
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white hover:bg-neutral-100 text-neutral-900 px-10 py-4 font-bold text-lg border-2 border-white transition-all duration-300"
            >
              Download Brochure
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
