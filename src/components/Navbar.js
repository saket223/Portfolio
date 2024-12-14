import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full text-white p-4 z-50">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <h2 className="text-3xl font-bold">Saket Arora</h2>
        <nav className="hidden sm:block">
          <ul className="flex space-x-8">
            <li>
              <a
                href="#hero"
                className="text-lg hover:text-blue-400 transition-all duration-300"
              >
                Hero
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-lg hover:text-blue-400 transition-all duration-300"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#footer"
                className="text-lg hover:text-blue-400 transition-all duration-300"
              >
                Footer
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
