import React, { useEffect,useState } from 'react'
import { onValue, ref, set } from "firebase/database";
import { realtimeDB } from "../firebaseConfig";
import aboutimg from '../assets/about.jpg'
import { ABOUT_TEXT } from '../constants'
const About = () => {
    const [aboutText, setAboutText] = useState("");
    useEffect(() => {
        // Reference to the AboutMe field in Firebase
        const aboutRef = ref(realtimeDB, '/About');
    
        // Listen for changes in Firebase database
        onValue(aboutRef, (snapshot) => {
          if (snapshot.exists()) {
            setAboutText(snapshot.val()); // Update state with fetched data
          } else {
            console.log("No data available");
          }
        }, (error) => {
          console.error("Error fetching data:", error);
        });
      }, []);
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <h1 className="my-20 text-center text-6xl font-bold text-purple-600">About Me</h1>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex items-center justify-center'>
                    <img className='rounded-2xl' src={aboutimg} alt="Monisha Govindaraj" width={300} height={200}/> 
                    </div>
                </div>
                    <div className='w-full lg:w-1/2'>
                    <div className='flex justify-center lg:justify-start'>
                        <p className='my-2 max-w-xl py-6 font-bold text-lg'> {aboutText}</p>
                    </div>

                </div>
         </div>   
        </div>
      
  )
}

export default About;