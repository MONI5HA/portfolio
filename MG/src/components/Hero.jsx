import React, { useEffect, useState } from "react";
import profilePic from "../assets/moni.jpg";
import { ref, onValue } from "firebase/database";
import { realtimeDB } from "../firebaseConfig";
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation"; // 👈 typing effect

const Hero = () => {
  const [about, setAbout] = useState("");

  useEffect(() => {
    const aboutRef = ref(realtimeDB, "/AboutME");
    onValue(
      aboutRef,
      (snapshot) => {
        if (snapshot.exists()) {
          setAbout(snapshot.val());
        } else {
          console.log("No Data available");
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  return (
    <section className="relative border-b border-neutral-900 pb-16 lg:pb-28">
      <div className="container mx-auto flex flex-wrap items-center px-6 lg:px-16">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-gray-100">
              Monisha Govindaraj
            </h1>

            {/* Typing effect for role */}
            <TypeAnimation
              sequence={[
                "Software Developer", 2000,
                "Frontend Engineer", 2000,
                "Fullstack Enthusiast", 2000,
              ]}
              wrapper="span"
              speed={50}
              className="bg-gradient-to-r from-pink-400 via-slate-400 to-purple-500 bg-clip-text text-2xl lg:text-3xl font-semibold text-transparent mt-4"
              repeat={Infinity}
            />

            <p className="mt-6 max-w-xl text-lg font-bold tracking-wide text-gray-400">
              {about || HERO_CONTENT}
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex space-x-6">
              <a
                href="#contact"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold shadow-lg hover:scale-105 transition transform"
              >
                Contact Me
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full border-2 border-pink-500 text-pink-400 font-bold hover:bg-pink-500 hover:text-white transition"
              >
                Download Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex space-x-6 text-2xl text-gray-400">
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-white">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-blue-400">
                <FaLinkedin />
              </a>
              <a href="mailto:youremail@example.com" className="hover:text-red-400">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Content (Profile Image with Glow) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full lg:w-1/2 flex justify-center lg:p-8 mt-10 lg:mt-0 relative"
        >
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-2xl blur-2xl opacity-30 animate-pulse"></div>
            <img
              src={profilePic}
              alt="Monisha Govindaraj"
              className="relative rounded-2xl border-4 border-neutral-800 shadow-xl transform hover:scale-105 transition duration-300"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
