import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../logoS.png";
import { FaLinkedin, FaDownload, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full text-white py-4 px-6 z-50 bg">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Logo, vertical line, and name */}
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Logo" className="w-20 h-auto" />
          <div className="h-6 w-[1px] bg-white"></div>
          <a
            href="mailto:arora.saket20@gmail.com"
            className="flex items-center text-lg font-bold text-white hover:text-blue-400 transition-all duration-300"
          >
            <FaEnvelope className="mr-2" />
            Saket Arora
          </a>
        </div>

        <div className="hidden md:flex space-x-8 items-center">
          <div className="flex space-x-8">
            <Link
              to="/about"
              className="text-lg hover:text-blue-400 transition-all duration-300"
            >
              About
            </Link>
            <Link
              to="/experience"
              className="text-lg hover:text-blue-400 transition-all duration-300"
            >
              Experience
            </Link>
            <Link
              to="/projects"
              className="text-lg hover:text-blue-400 transition-all duration-300"
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className="text-lg hover:text-blue-400 transition-all duration-300"
            >
              Contact
            </Link>
          </div>

          <div className="h-6 w-[1px] bg-white"></div>

          <div className="flex space-x-8 items-center">
            <div className="flex space-x-8 items-center">
              <a
                href="/Resume.pdf"
                download="Saket_Arora_Resume.pdf"
                className="flex items-center text-lg hover:text-blue-400 transition-all duration-300"
              >
                <FaDownload className="mr-2" />
                Resume
              </a>
            </div>
            <div className="flex space-x-8 items-center">
              <a
                href="https://www.linkedin.com/in/saket-arora-20748b217/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg flex items-center text-blue-500 text-xl hover:text-blue-600 transition-all duration-300"
              >
                <FaLinkedin className="mr-2" /> LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="md:hidden relative z-60">
          <button
            onClick={toggleMenu}
            className="text-3xl bg-transparent text-white border-none cursor-pointer"
            style={{ zIndex: 100 }}
          >
            {isOpen ? "X" : "☰"}
          </button>
        </div>
      </div>
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center bg-black bg-opacity-95 z-50">
          {/* Close Button inside the menu */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-8 right-6 text-3xl text-white"
            style={{ zIndex: 200 }} // Ensure it's above the menu content
          >
            X
          </button>

          <ul className="flex flex-col items-center justify-center gap-8 h-full">
            <li>
              <Link
                to="/about"
                className="text-xl hover:text-blue-400 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/experience"
                className="text-xl hover:text-blue-400 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="text-xl hover:text-blue-400 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-xl hover:text-blue-400 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li>
              <a
                href="/Resume.pdf"
                download="Saket_Arora_Resume.pdf"
                className="flex items-center text-xl hover:text-blue-400 transition-all duration-300"
              >
                <FaDownload className="mr-2" />
                Resume
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/saket-arora-20748b217/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-500 text-xl transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                <FaLinkedin className="mr-2" /> LinkedIn
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
