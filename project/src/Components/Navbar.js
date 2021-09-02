import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = ({ darkMode, darkModeHanlder }) => {
  
  return (
    <nav
      className={`w-screen py-2 bg-gray-100 dark:bg-gray-700 dark:text-white `}
    >
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="flex items-center">
          <img src="./assets/logo.png" alt="logo" className="w-16" />
          <span>FRZH</span>
        </Link>
        <div className="flex items-center ">
          <i class="fas fa-sun"></i>
          <label
            htmlFor="darkMode cursor-pointer ring-1"
            onClick={darkModeHanlder}
          >
            <div className="relative flex items-center mx-2">
              <input type="checkbox" className="hidden" id="darkMode" />
              <div className="w-16 h-8 bg-gray-300 rounded-full"></div>

              <div
                className={`${
                  darkMode
                    ? "transition duration-300 ease-in-out w-8 h-8 bg-blue-600 absolute rounded-full right-0"
                    : "transition duration-300 ease-in-out w-8 h-8 bg-blue-600 absolute rounded-full translate-x-3"
                }`}
              ></div>
            </div>
          </label>
          <span>night</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
