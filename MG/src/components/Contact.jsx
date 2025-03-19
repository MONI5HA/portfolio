import React from 'react';
import { CONTACT } from '../constants';
import { FaEnvelope, FaLocationArrow } from 'react-icons/fa'; // For adding icons

const Contact = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-20">
      <h1 className="text-5xl font-extrabold text-center tracking-widest my-6 transform hover:scale-105 transition-all duration-300">
        Get in Touch
      </h1>
      
      <div className="max-w-2xl mx-auto text-center px-4">
        <p className="text-lg mb-8 opacity-80">
          I'm currently looking for new opportunities, and my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <div className="flex justify-center items-center mb-6 space-x-8">
          <div className="flex items-center space-x-3">
            <FaLocationArrow className="text-xl text-yellow-300" />
            <p className="text-lg">{CONTACT.address}</p>
          </div>

          <div className="flex items-center space-x-3">
            <FaEnvelope className="text-xl text-yellow-300" />
            <a
              href={`mailto:${CONTACT.email}`}
              className="text-lg font-semibold hover:text-yellow-500 transition-all duration-300"
            >
              {CONTACT.email}
            </a>
          </div>
        </div>

        {/* Button to encourage reaching out */}
        <a
          href={`mailto:${CONTACT.email}`}
          className="inline-block px-8 py-4 bg-yellow-500 text-black font-bold rounded-full text-lg transform hover:scale-105 transition-all duration-300 shadow-lg"
        >
          Let's Connect!
        </a>
      </div>
    </div>
  );
};

export default Contact;
