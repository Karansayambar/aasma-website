"use client";
import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Instagram, Facebook } from "lucide-react";

const Contact = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden text-white">
      {/* Floating gradient lights */}
      <motion.div
        className="absolute top-0 left-0 w-[400px] h-[400px] bg-yellow-400/10 blur-[120px] rounded-full"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
        <motion.h2
          className="text-4xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Get in Touch
        </motion.h2>

        <motion.p
          className="text-gray-300 text-lg md:text-xl mb-16 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          We’d love to hear from you — whether you’re planning a new project,
          have questions, or just want to connect.
        </motion.p>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Phone */}
          <motion.div
            className="p-6 bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2"
            whileHover={{ scale: 1.05 }}
          >
            <Phone className="w-10 h-10 mx-auto mb-4 text-yellow-400" />
            <h3 className="text-xl font-bold mb-2">Call Us</h3>
            <p className="text-gray-300">
              <a href="tel:9552366499" className="hover:text-yellow-400">
                9552366499
              </a>
              <br />
              <a href="tel:9850317869" className="hover:text-yellow-400">
                9850317869
              </a>
            </p>
          </motion.div>

          {/* Email */}
          <motion.div
            className="p-6 bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2"
            whileHover={{ scale: 1.05 }}
          >
            <Mail className="w-10 h-10 mx-auto mb-4 text-yellow-400" />
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <p className="text-gray-300">
              <a
                href="mailto:Aasmabuidcon@gmail.com"
                className="hover:text-yellow-400"
              >
                Aasmabuidcon@gmail.com
              </a>
            </p>
          </motion.div>

          {/* Instagram */}
          <motion.div
            className="p-6 bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2"
            whileHover={{ scale: 1.05 }}
          >
            <Instagram className="w-10 h-10 mx-auto mb-4 text-yellow-400" />
            <h3 className="text-xl font-bold mb-2">Instagram</h3>
            <p className="text-gray-300">
              <a
                href="https://www.instagram.com/AasmaBuildcon"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400"
              >
                @AasmaBuildcon
              </a>
            </p>
          </motion.div>

          {/* Facebook */}
          <motion.div
            className="p-6 bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2"
            whileHover={{ scale: 1.05 }}
          >
            <Facebook className="w-10 h-10 mx-auto mb-4 text-yellow-400" />
            <h3 className="text-xl font-bold mb-2">Facebook</h3>
            <p className="text-gray-300">
              <a
                href="https://www.facebook.com/AasmaBuildcon"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400"
              >
                Aasma Buildcon
              </a>
            </p>
          </motion.div>
        </div>

        {/* Decorative Divider */}
        <motion.div
          className="mt-20 h-[2px] w-48 mx-auto bg-gradient-to-r from-transparent via-yellow-400 to-transparent"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
      </div>
    </section>
  );
};

export default Contact;
