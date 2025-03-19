import React, { useEffect, useState } from "react";
import profilePic from "../assets/moni.jpg";
import { ref, onValue } from "firebase/database";
import { realtimeDB } from "../firebaseConfig";
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion"; // For animations

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
    <section className="border-b border-neutral-900 pb-12 lg:pb-24">
      <div className="container mx-auto flex flex-wrap items-center px-6 lg:px-16">
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-gray-200">
              Monisha Govindaraj
            </h1>
            <span className="bg-gradient-to-r from-pink-400 via-slate-500 to-purple-500 bg-clip-text text-2xl lg:text-3xl font-semibold text-transparent mt-4">
              Software Developer
            </span>
            <p className="mt-6 max-w-xl text-lg font-bold tracking-wide text-gray-400">
              { about|| HERO_CONTENT}
            </p>
          </div>
        </motion.div>

        {/* Right Content (Profile Image) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full lg:w-1/2 flex justify-center lg:p-8 mt-10 lg:mt-0"
        >
          <div className="w-9/12">
            <img
              src={profilePic}
              alt="Monisha Govindaraj"
              className=" rounded-xl border-4 border-neutral-800 shadow-lg transform hover:scale-105 transition duration-300"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
