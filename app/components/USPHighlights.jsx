"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Ruler, Building2, Sparkles } from "lucide-react";

const USPHighlights = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: i * 0.25, ease: "easeOut" },
    }),
  };

  const uspData = [
    {
      icon: <Ruler className="w-12 h-12 text-blue-600" />,
      title: "Spacious Flats",
      text: "Designed to perfection, our homes offer over 1000+ sqft of luxurious living space that blends comfort and functionality.",
      bg: "from-blue-100/40 to-transparent",
    },
    {
      icon: <ShieldCheck className="w-12 h-12 text-purple-600" />,
      title: "Class 1 Construction",
      text: "Built with superior-grade materials and tested engineering standards for durability that stands the test of time.",
      bg: "from-purple-100/40 to-transparent",
    },
    {
      icon: <Building2 className="w-12 h-12 text-green-600" />,
      title: "5-Year Company Guarantee",
      text: "Every UPS Infra project is backed by our 5-year guarantee — a testament to our quality, integrity, and trust.",
      bg: "from-green-100/40 to-transparent",
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
      {/* Animated background shapes */}
      <motion.div
        className="absolute -top-20 -left-20 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-30"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-30"
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />

      {/* Section Header */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        custom={0}
        className="relative z-10 max-w-5xl mx-auto text-center mb-20"
      >
        <h2 className="text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
          USP & Highlights
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Setting new benchmarks in quality and comfort, UPS Infra redefines
          modern living with unmatched construction excellence.
        </p>
      </motion.div>

      {/* USP Cards */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
        {uspData.map((usp, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i + 1}
            className={`rounded-3xl p-10 shadow-xl bg-gradient-to-br ${usp.bg} backdrop-blur-md border border-white/60 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02]`}
          >
            <div className="flex justify-center mb-6">{usp.icon}</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">
              {usp.title}
            </h3>
            <p className="text-gray-600 text-sm text-center leading-relaxed">
              {usp.text}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Bottom Highlight Line */}
      <motion.div
        className="mt-20 flex justify-center items-center gap-3 text-blue-700"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <Sparkles className="w-6 h-6 text-yellow-500 animate-pulse" />
        <span className="font-medium tracking-wide">
          UPS Infra — Building Trust, One Home at a Time
        </span>
      </motion.div>
    </section>
  );
};

export default USPHighlights;
