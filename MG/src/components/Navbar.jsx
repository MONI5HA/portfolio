import React from 'react'
import {FaLinkedin, FaGithub ,FaInstagram} from 'react-icons/fa'
import logo from "../assets/MG.png"
const Navbar = () => {
  return (
    
    <nav className=" mb-20 flex justify-between items-center py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className='mx-2 w-20' src={logo} alt='logo'></img>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <FaLinkedin className="text-2xl text-blue-500 hover:text-blue-700" onClick={()=>window.open('https://www.linkedin.com/in/mon15ha/')}/> 
          <FaGithub className="text-2xl text-gray-500 hover:text-gray-700" onClick={()=>window.open('https://github.com/MONI5HA')}/>
          <FaInstagram className="text-2xl text-red-500 hover:text-red-700" onClick={()=>window.open('https://www.instagram.com/')}/> 
          </div>
    </nav>
  )
}

export default Navbar