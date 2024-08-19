import React from 'react'
import { education } from '../constants'    

const Education = () => {
  return (
    
        <div className='border-b border-neutral-900 pb-4'>
            <h1 className='my-20 text-center text-4xl'>Education</h1>
            <div>
                {education.map((experience, index) => (
                  <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                    <div className='w-full lg:w-1/4'>
                    <p className='mb-2 text-lg text-neutral-400'>{experience.year}</p>
                    </div> 
                    <div className='w-full lg:w-1/4'>
                    <h6 className='mb-2 text-lg font-semibold'>{experience.role} -{" "}
                    <span className='text-lg  text-purple-100'>{experience.company}</span>
                    </h6>
                    <p className='mb-4 text-neutral-400'>{experience.description}</p>
                    {experience.technologies.map((technology, index) => (
                        <span key={index} className='mr-2 mt-4 rounded bg-neutral-900  px-2 py-1 text-lg font-medium text-purple-800'>{technology}</span>
    
                    ))}
                    
                    </div>
    
                    </div>  
    
                ))}
            </div>
          
        </div>
      
  )
}

export default Education
