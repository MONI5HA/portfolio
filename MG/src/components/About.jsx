import React, { useEffect, useState } from "react";
import { onValue, ref } from "firebase/database";
import { realtimeDB } from "../firebaseConfig";
import aboutimg from "../assets/about.jpg";
import { motion } from "framer-motion";
import { FaUser } from "react-icons/fa";

const About = () => {
  const [aboutText, setAboutText] = useState("");

  useEffect(() => {
    const aboutRef = ref(realtimeDB, "/About");

    onValue(
      aboutRef,
      (snapshot) => {
        if (snapshot.exists()) {
          setAboutText(snapshot.val());
        } else {
          console.log("No data available");
        }
      },
      (error) => {
        console.error("Error fetching data:", error);
      }
    );
  }, []);

  return (
    <section className="relative border-b border-neutral-800 py-20">
      {/* Heading */}
      <motion.h1
        className="text-center text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <FaUser className="inline-block mr-3 text-purple-400" />
        About Me
      </motion.h1>

      <div className="mt-16 flex flex-wrap items-center justify-center lg:justify-between">
        {/* Profile Image */}
        <motion.div
          className="w-full lg:w-5/12 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            className="rounded-2xl shadow-lg shadow-purple-500/30 hover:scale-105 hover:rotate-2 transition-transform duration-500"
            src={aboutimg}
            alt="Monisha Govindaraj"
            width={350}
            height={250}
          />
        </motion.div>

        {/* About Text */}
        <motion.div
          className="w-full lg:w-6/12 mt-10 lg:mt-0"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="backdrop-blur-lg bg-white/5 p-6 rounded-xl shadow-lg">
            <p className="text-lg md:text-xl font-medium leading-relaxed text-neutral-200">
              {aboutText || "Loading..."}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
