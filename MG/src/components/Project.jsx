import React, { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { realtimeDB } from "../firebaseConfig";
import { motion } from "framer-motion";

const Project = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const projectsRef = ref(realtimeDB, "/Project");

    onValue(projectsRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const projectArray = Object.keys(data).map((id) => ({
          id,
          ...data[id],
        }));
        setProjects(projectArray);
      } else {
        console.log("No data available");
      }
    });
  }, []);

  return (
    <section id="project" className="border-b border-neutral-900 py-20">
      <motion.h1
        className="my-12 text-center text-5xl md:text-6xl font-extrabold text-purple-500"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Projects
      </motion.h1>

      {/* Masonry Layout */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 px-6 space-y-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="break-inside-avoid rounded-xl overflow-hidden bg-white/10 backdrop-blur-lg border border-purple-500/30 shadow-md hover:shadow-purple-500/40 transition-transform hover:-translate-y-1"
          >
            {/* Media */}
            {project.Image && (
              <img
                src={project.Image}
                alt={project.Title}
                className="w-full object-cover"
              />
            )}
            {project.Video && (
              <video src={project.Video} controls className="w-full" />
            )}

            {/* Content */}
            <div className="p-4">
              <h2 className="text-xl font-semibold text-white mb-2">
                {project.Title}
              </h2>
              <p className="text-sm text-neutral-300 mb-3">
                {project.Description}
              </p>

              {/* Tech stack */}
              {project.Tech && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.Tech.split(",").map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-xs text-white"
                    >
                      {tech.trim()}
                    </span>
                  ))}
                </div>
              )}

              {project.Link && (
                <a
                  href={project.Link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-md text-sm font-semibold"
                >
                  View Project 🚀
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Project;
