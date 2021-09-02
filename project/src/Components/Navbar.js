import React from "react";
import { Link } from "react-router-dom";
import { ImSun } from "react-icons/im";
import { FaMoon } from "react-icons/fa";

const Navbar = ({ darkMode, darkModeHanlder }) => {
  return (
    <nav className={`w-screen py-2 bg-blue-400 dark:bg-blue-900`}>
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="flex items-center">
          <img src="./assets/logo.png" alt="logo" className="w-16" />
          <span className="font-bold dark:text-white">FRZH</span>
        </Link>
        <div className="flex items-center dark:text-white">
          <ImSun className="text-black dark:text-white" />
          <label className="cursor-pointer" onClick={darkModeHanlder}>
            <div className="relative flex items-center mx-2">
              <div className="w-16 h-8 bg-gray-300 rounded-full"></div>
              <div
                className={` ease-in-out w-8 h-8 bg-blue-600 absolute rounded-full ring-1 right-0 transform ${
                  darkMode && "-translate-x-8"
                }`}
              ></div>
            </div>
          </label>
          <FaMoon className="text-black dark:text-white" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
