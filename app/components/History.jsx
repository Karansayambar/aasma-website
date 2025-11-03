"use client";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const History = () => {
  const highlights = [
    {
      number: "2005",
      label: "Founded Year",
      description:
        "Started our journey with a mission to build homes that inspire trust and comfort.",
    },
    {
      number: "30+",
      label: "Projects Completed",
      description:
        "Delivered exceptional quality through residential and commercial developments.",
    },
    {
      number: "500+",
      label: "Units Sold",
      description:
        "Earned the trust of hundreds of families who now call our properties their home.",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white py-24 px-6 overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.25),transparent_50%)]"></div>

      {/* Title */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto text-center relative z-10"
      >
        <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          Our Legacy of Excellence
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Since <span className="font-semibold text-blue-400">2005</span>, Aasma
          Constructions has been redefining the skyline — completing over{" "}
          <span className="font-semibold text-purple-400">30 projects</span>
          and selling more than{" "}
          <span className="font-semibold text-blue-300">500 homes</span>,
          shaping communities and enriching lives.
        </p>
      </motion.div>

      {/* Timeline / Stats Cards */}
      <div className="relative max-w-6xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 z-10">
        {highlights.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: index * 0.3 }}
            className="relative p-8 bg-gray-900/60 border border-gray-700 rounded-3xl shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:shadow-[0_0_35px_rgba(147,51,234,0.4)] transition-all duration-300"
          >
            <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
              {item.number}
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">
              {item.label}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Body Text */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, delay: 0.5 }}
        className="max-w-4xl mx-auto mt-24 text-center text-gray-300 text-lg leading-relaxed z-10 relative"
      >
        <p className="mb-6">
          What started as a single dream in 2005 has grown into a legacy of
          excellence. With each milestone, we’ve redefined what quality and
          trust mean in real estate — blending architecture, innovation, and
          passion.
        </p>
        <p>
          As we look to the future, we remain dedicated to crafting homes that
          reflect elegance, comfort, and lasting value for generations to come.
        </p>
      </motion.div>

      {/* Accent Divider */}
      <div className="mt-20 flex justify-center">
        <div className="w-40 h-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
      </div>
    </section>
  );
};

export default History;
