import React from "react";
import { CONTACT } from "../constants";
import { FaEnvelope, FaLocationArrow } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600 text-white">
      {/* Heading */}
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold text-center tracking-wider mb-12 drop-shadow-lg"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Get in Touch
      </motion.h1>

      <div className="max-w-3xl mx-auto text-center px-6">
        {/* Description */}
        <motion.p
          className="text-lg mb-12 opacity-90 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          I'm currently open to new opportunities, and my inbox is always open. 
          Whether you have a question, project idea, or just want to say hi, 
          I’d love to hear from you!
        </motion.p>

        {/* Contact Details */}
        <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-10 space-y-6 sm:space-y-0 mb-10">
          {/* Address */}
          <motion.div
            className="flex items-center space-x-3 bg-white/10 px-6 py-4 rounded-xl backdrop-blur-md shadow-lg hover:scale-105 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <FaLocationArrow className="text-2xl text-yellow-300" />
            <p className="text-lg">{CONTACT.address}</p>
          </motion.div>

          {/* Email */}
          <motion.div
            className="flex items-center space-x-3 bg-white/10 px-6 py-4 rounded-xl backdrop-blur-md shadow-lg hover:scale-105 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <FaEnvelope className="text-2xl text-yellow-300" />
            <a
              href={`mailto:${CONTACT.email}`}
              className="text-lg font-semibold hover:text-yellow-400 transition-colors duration-300"
            >
              {CONTACT.email}
            </a>
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.a
          href={`mailto:${CONTACT.email}`}
          className="inline-block px-10 py-4 bg-yellow-400 text-black font-bold rounded-full text-lg shadow-xl hover:bg-yellow-300 hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          whileHover={{ scale: 1.1 }}
        >
          Let’s Connect 🚀
        </motion.a>
      </div>
    </section>
  );
};

export default Contact;
