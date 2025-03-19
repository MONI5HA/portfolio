import React, { useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';
import { realtimeDB } from '../firebaseConfig'; // Assuming you have initialized your Firebase instance

const Project = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Reference to the 'projects' field in Firebase
    const projectsRef = ref(realtimeDB, '/Project');

    // Listen for changes in Firebase database
    onValue(projectsRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const projectArray = [];
        for (let id in data) {
          projectArray.push({
            id,
            ...data[id],
          });
        }
        setProjects(projectArray); // Update state with fetched project data
      } else {
        console.log('No data available');
      }
    }, (error) => {
      console.error('Error fetching data:', error);
    });

    // Cleanup Firebase listener on component unmount
    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <div className='border-b border-neutral-900 pb-8'>
      <h1 className="my-20 text-center text-6xl font-bold text-purple-600">Projects</h1>

      <div className='flex flex-wrap justify-center gap-12'>
        {projects.map((project) => (
          <div
            key={project.id}
            className='group mb-12 flex flex-col items-center p-6 bg-neutral-800 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:opacity-90'
          >
            <div className='w-full max-w-xs mb-6'>
              {/* Check if image or video is available */}
              {project.Image ? (
                <img
                  src={project.Image}
                  alt={project.title}
                  className='object-cover transition-all duration-300 group-hover:scale-105'
                />
              ): (
                <div className='bg-gray-300 w-full h-48 rounded-lg flex items-center justify-center'>
                  <span className='text-gray-700 text-lg'>No Image/Video Available</span>
                </div>
              )}
            </div>

            <h6 className='text-xl mb-2 font-semibold text-gray-800 group-hover:text-purple-600'>
              {project.Title}
            </h6>
            <p className='text-lg mb-4 text-neutral-500'>{project.Description}</p>

            {/* Link to the project */}
            <div className='mt-4'>
              <a
                href={project.Link}
                target='_blank'
                rel='noopener noreferrer'
                className='px-6 py-2 bg-purple-600 text-white font-semibold rounded-lg shadow-md transform hover:scale-105 transition-all duration-300'
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
