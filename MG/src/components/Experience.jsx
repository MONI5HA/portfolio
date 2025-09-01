import React from "react";
import { experience } from "../constants";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const Experience = () => {
  return (
    <section id="experience-section" className="relative py-20 border-b border-neutral-900">
      {/* Heading */}
      <motion.h1
        className="text-center text-5xl md:text-6xl font-extrabold text-purple-500 mb-16"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Experience
      </motion.h1>

      <div className="relative max-w-5xl mx-auto">
        {/* Vertical timeline line */}
        <div className="absolute left-6 top-0 w-1 h-full bg-gradient-to-b from-pink-500 to-purple-500 rounded-full hidden md:block" />

        {experience.map((exp, index) => (
          <motion.div
            key={index}
            className="mb-12 flex flex-col md:flex-row items-start md:items-center"
            initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            {/* Timeline Dot */}
            <div className="hidden md:flex items-center justify-center w-12 h-12 bg-pink-600 rounded-full shadow-lg relative z-10">
              <FaBriefcase className="text-white text-xl" />
            </div>

            {/* Year */}
            <div className="md:w-1/4 pl-4 md:pl-8 mb-4 md:mb-0">
              <p className="text-lg font-bold text-neutral-400">{exp.year}</p>
            </div>

            {/* Card */}
            <div className="md:w-3/4 w-full">
              <div className="p-6 bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 text-white rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
                <h6 className="text-xl font-semibold mb-2">
                  {exp.role} <span className="text-purple-200">- {exp.company}</span>
                </h6>
                <p className="text-neutral-200 mb-4">{exp.description}</p>

                {/* Skills */}
                <div className="flex flex-wrap">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="mr-2 mt-2 rounded-full bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 px-4 py-1.5 text-sm font-medium text-white shadow-md hover:opacity-90 transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
