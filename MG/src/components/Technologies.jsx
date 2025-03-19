import React from 'react';
import { RiReactjsLine } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiTailwindcss } from 'react-icons/si';
import { SiFirebase } from 'react-icons/si';
import { FaBlender, FaGoogle, FaNodeJs, FaUnity } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';
import { FaAndroid } from 'react-icons/fa';
import { FaCloud } from 'react-icons/fa';
import { FaDocker } from 'react-icons/fa';
import { FaAws } from 'react-icons/fa';
import { FaMicrosoft } from 'react-icons/fa';
import { FaDatabase } from 'react-icons/fa';
import { FaAngular } from 'react-icons/fa';

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
              <h1 className="my-20 text-center text-6xl font-bold text-purple-600">Technologies</h1>

      
      <div className="flex flex-wrap justify-center gap-8 sm:gap-6 md:gap-8 lg:gap-10">
        <div className="group p-4 rounded-2xl border-4 border-neutral-800 hover:bg-purple-600 transition-all duration-300 hover:shadow-xl">
          <RiReactjsLine className="text-6xl text-cyan-500 group-hover:text-white" />
        </div>
        <div className="group p-4 rounded-2xl border-4 border-neutral-800 hover:bg-black transition-all duration-300 hover:shadow-xl">
          <TbBrandNextjs className="text-6xl text-white group-hover:text-green-500" />
        </div>
        <div className="group p-4 rounded-2xl border-4 border-neutral-800 hover:bg-green-600 transition-all duration-300 hover:shadow-xl">
          <FaAndroid className="text-6xl text-green-200 group-hover:text-white" />
        </div>
        <div className="group p-4 rounded-2xl border-4 border-neutral-800 hover:bg-purple-700 transition-all duration-300 hover:shadow-xl">
          <FaUnity className="text-6xl text-gray-400 group-hover:text-white" />
        </div>
        <div className="group p-4 rounded-2xl border-4 border-neutral-800 hover:bg-yellow-500 transition-all duration-300 hover:shadow-xl">
          <FaGoogle className="text-6xl text-orange-400 group-hover:text-white" />
        </div>
        <div className="group p-4 rounded-2xl border-4 border-neutral-800 hover:bg-green-500 transition-all duration-300 hover:shadow-xl">
          <SiFirebase className="text-6xl text-green-500 group-hover:text-white" />
        </div>
        <div className="group p-4 rounded-2xl border-4 border-neutral-800 hover:bg-green-700 transition-all duration-300 hover:shadow-xl">
          <FaNodeJs className="text-6xl text-green-600 group-hover:text-white" />
        </div>
        <div className="group p-4 rounded-2xl border-4 border-neutral-800 hover:bg-yellow-600 transition-all duration-300 hover:shadow-xl">
          <FaAws className="text-6xl text-orange-500 group-hover:text-white" />
        </div>
        <div className="group p-4 rounded-2xl border-4 border-neutral-800 hover:bg-blue-600 transition-all duration-300 hover:shadow-xl">
          <FaCloud className="text-6xl text-white group-hover:text-white" />
        </div>
        <div className="group p-4 rounded-2xl border-4 border-neutral-800 hover:bg-purple-800 transition-all duration-300 hover:shadow-xl">
          <FaDocker className="text-6xl text-blue-600 group-hover:text-white" />
        </div>
        <div className="group p-4 rounded-2xl border-4 border-neutral-800 hover:bg-blue-800 transition-all duration-300 hover:shadow-xl">
          <FaMicrosoft className="text-6xl text-blue-600 group-hover:text-white" />
        </div>
        <div className="group p-4 rounded-2xl border-4 border-neutral-800 hover:bg-indigo-600 transition-all duration-300 hover:shadow-xl">
          <FaDatabase className="text-6xl text-indigo-600 group-hover:text-white" />
        </div>
        <div className="group p-4 rounded-2xl border-4 border-neutral-800 hover:bg-red-600 transition-all duration-300 hover:shadow-xl">
          <FaAngular className="text-6xl text-red-600 group-hover:text-white" />
        </div>
        <div className="group p-4 rounded-2xl border-4 border-neutral-800 hover:bg-teal-500 transition-all duration-300 hover:shadow-xl">
          <SiTailwindcss className="text-6xl text-teal-500 group-hover:text-white" />
        </div>
        <div className="group p-4 rounded-2xl border-4 border-neutral-800 hover:bg-green-600 transition-all duration-300 hover:shadow-xl">
          <SiMongodb className="text-6xl text-green-500 group-hover:text-white" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
