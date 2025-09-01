import React, { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import logo from "../assets/MG.png";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "education", "experience", "project", "contact"];
      let current = "home";

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = id;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-lg shadow-lg border-b border-neutral-800">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 lg:px-12">
        {/* Logo */}
        <div
          className="flex items-center cursor-pointer hover:rotate-6 transition-transform duration-300"
          onClick={() => scrollToSection("hero")}
        >
          <img className="w-16" src={logo} alt="logo" />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8 text-lg font-semibold text-gray-300">
          {["about", "education", "experience", "project", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`capitalize transition-all duration-300 ${
                activeSection === item
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500"
                  : "hover:text-white"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex items-center space-x-5 text-2xl">
          <FaLinkedin
            className="cursor-pointer text-blue-400 hover:scale-110 hover:text-blue-500 transition-all duration-300"
            onClick={() => window.open("https://www.linkedin.com/in/mon15ha/")}
          />
          <FaGithub
            className="cursor-pointer text-gray-400 hover:scale-110 hover:text-white transition-all duration-300"
            onClick={() => window.open("https://github.com/MONI5HA")}
          />
          <FaInstagram
            className="cursor-pointer text-pink-400 hover:scale-110 hover:text-pink-500 transition-all duration-300"
            onClick={() => window.open("https://www.instagram.com/")}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
