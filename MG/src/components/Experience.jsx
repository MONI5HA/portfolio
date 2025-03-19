import React, { useEffect, useState } from 'react';
import { experience } from '../constants';

const Experience = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector("#experience-section");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setVisible(true);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="experience-section"
      className={`transition-opacity duration-1000 ${visible ? "opacity-100" : "opacity-0"}`}
    >
      <div className="border-b border-neutral-900 pb-4">
        <h1 className="my-20 text-center text-6xl font-bold text-purple-600">Experience</h1>
        <div className="space-y-8">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="bg-neutral-800 p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-xl"
            >
              <div className="flex flex-col lg:flex-row lg:justify-between">
                <div>
                  <p className="text-lg m-10 font-bold text-neutral-400">{exp.year}</p>
                </div>
                <div>
                  <h6 className="text-2xl font-semibold text-purple-100 mb-2">
                    {exp.role} -{" "}
                    <span className="text-lg text-purple-300">{exp.company}</span>
                  </h6>
                  <p className="text-neutral-400 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-purple-900 text-purple-200 rounded-full px-3 py-1 text-sm font-medium transition-all duration-300 hover:bg-purple-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
