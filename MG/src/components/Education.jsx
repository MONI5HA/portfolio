import React, { useEffect, useState } from 'react';
import { education } from '../constants'; 

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const section = document.querySelector("#education-section");
      if (section) {
        const top = section.getBoundingClientRect().top;
        if (top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div id="education-section" className='border-b border-neutral-900 pb-8'>
      <h1 className='my-20 text-center text-6xl font-bold text-purple-600'>
        Education
      </h1>
      <div className={`transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
        {education.map((experience, index) => (
          <div key={index} className='mb-12 flex flex-wrap lg:justify-center'>
            <div className='w-full lg:w-1/4'>
              <p className='mb-2 text-lg text-neutral-400 font-bold'>{experience.year}</p>
            </div>
            <div className='w-full lg:w-1/2 lg:px-6'>
              <div className='p-6 bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500 text-white rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105'>
                <h6 className='mb-2 text-lg font-semibold'>
                  {experience.role} - <span className='text-lg text-purple-100'>{experience.company}</span>
                </h6>
                <p className='mb-4 text-neutral-200'>{experience.description}</p>
                <div className='flex flex-wrap'>
                  {experience.technologies.map((technology, index) => (
                    <span key={index} className='mr-2 mt-2 rounded-full bg-neutral-900 px-4 py-2 text-lg font-medium text-purple-800 hover:text-white hover:bg-purple-700 transition-all'>
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
