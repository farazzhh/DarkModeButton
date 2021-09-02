import React from "react";
import { Link } from "react-router-dom";
const Navbar = ({ darkMode, darkModeHanlder }) => {
  const styles = {
    right: 0,
  };
  return (
    <nav className="w-screen py-2 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="flex items-center">
          <img src="./assets/logo.png" alt="logo" className="w-16" />
          <span>FRZH</span>
        </Link>
        <div className="flex items-center ">
          <span> day</span>
          <label htmlFor="darkMode cursor-pointer" onClick={darkModeHanlder}>
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
