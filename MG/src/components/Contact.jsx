import React from 'react'
import { CONTACT } from '../constants'

const Contact = () => {
  return (
    <div className='border-b border-netural-900 pb-20'>
    <h1 className='my-20 text-center text-4xl'>Get in Touch</h1>
    <div className='text-center tracking-lighter'>
        <p className='my-4'>I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
        <p className='my-4'>{CONTACT.address}</p>
        
      <a href={`mailto : ${CONTACT.email}`} className='my-4 text-purple-800 font-semibold'>{CONTACT.email}</a>  
      </div>


    </div>
  )
}

export default Contact
