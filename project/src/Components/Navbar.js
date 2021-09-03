import React from "react";
import { Link } from "react-router-dom";
import DarkModeButton from "./DarkModeButton";

const Navbar = ({ darkMode, darkModeHanlder }) => {
  return (
    <nav className={`w-screen py-8 bg-blue-400 dark:bg-blue-900`}>
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="flex items-center">
          <span className="dark:text-white text-2xl">FRZH</span>
        </Link>

        <DarkModeButton darkMode={darkMode} darkModeHanlder={darkModeHanlder}/>
      </div>
    </nav>
  );
};

export default Navbar;
