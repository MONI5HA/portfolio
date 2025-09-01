import React from "react";
import { motion } from "framer-motion";
import { 
  RiReactjsLine, 
  TbBrandNextjs, 
  SiTailwindcss, 
  SiFirebase, 
  SiMongodb 
} from "react-icons/si";
import { 
  FaBlender, FaGoogle, FaNodeJs, FaUnity, FaAndroid,
  FaCloud, FaDocker, FaAws, FaMicrosoft, FaDatabase, FaAngular
} from "react-icons/fa";

const techStack = [
  { icon: <RiReactjsLine />, name: "React", color: "text-cyan-400", hover: "hover:shadow-cyan-500/50" },
  { icon: <TbBrandNextjs />, name: "Next.js", color: "text-white", hover: "hover:shadow-gray-300/50" },
  { icon: <FaAndroid />, name: "Android", color: "text-green-400", hover: "hover:shadow-green-500/50" },
  { icon: <FaUnity />, name: "Unity", color: "text-gray-300", hover: "hover:shadow-gray-400/50" },
  { icon: <FaGoogle />, name: "Google Cloud", color: "text-yellow-400", hover: "hover:shadow-yellow-500/50" },
  { icon: <SiFirebase />, name: "Firebase", color: "text-orange-400", hover: "hover:shadow-orange-500/50" },
  { icon: <FaNodeJs />, name: "Node.js", color: "text-green-500", hover: "hover:shadow-green-600/50" },
  { icon: <FaAws />, name: "AWS", color: "text-yellow-500", hover: "hover:shadow-yellow-600/50" },
  { icon: <FaCloud />, name: "Cloud", color: "text-blue-300", hover: "hover:shadow-blue-400/50" },
  { icon: <FaDocker />, name: "Docker", color: "text-blue-500", hover: "hover:shadow-blue-600/50" },
  { icon: <FaMicrosoft />, name: "Microsoft", color: "text-blue-600", hover: "hover:shadow-blue-700/50" },
  { icon: <FaDatabase />, name: "Databases", color: "text-indigo-400", hover: "hover:shadow-indigo-500/50" },
  { icon: <FaAngular />, name: "Angular", color: "text-red-500", hover: "hover:shadow-red-600/50" },
  { icon: <SiTailwindcss />, name: "TailwindCSS", color: "text-teal-400", hover: "hover:shadow-teal-500/50" },
  { icon: <SiMongodb />, name: "MongoDB", color: "text-green-500", hover: "hover:shadow-green-600/50" },
  { icon: <FaBlender />, name: "Blender", color: "text-orange-500", hover: "hover:shadow-orange-600/50" },
];

const Technologies = () => {
  return (
    <section className="border-b border-neutral-800 pb-24">
      <motion.h1
        className="my-20 text-center text-5xl md:text-6xl font-extrabold text-purple-500"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Technologies
      </motion.h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 px-6 md:px-20">
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.15, rotate: 3 }}
            transition={{ duration: 0.4 }}
            className={`group flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 border border-neutral-700 shadow-md backdrop-blur-md hover:shadow-2xl ${tech.hover} transition-all`}
          >
            <div className={`text-6xl ${tech.color} group-hover:animate-bounce`}>
              {tech.icon}
            </div>
            <p className="mt-3 text-sm font-semibold text-gray-300 group-hover:text-white">
              {tech.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
