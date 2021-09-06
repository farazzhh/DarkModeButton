import React from "react";
import { Link } from "react-router-dom";
import DarkModeButton from "./DarkModeButton";
import {ImGithub} from "react-icons/im";

const Navbar = ({ darkMode, darkModeHanlder }) => {
  return (
    <nav className={`w-screen py-8 bg-blue-500 dark:bg-blue-900`}>
      <div className="container mx-auto flex justify-between ">
        <Link to="/" className="flex items-center">
          <span className="dark:text-white text-2xl">FRZH</span>
        </Link>
        <DarkModeButton darkMode={darkMode} darkModeHanlder={darkModeHanlder} />
        <Link to="/" className="flex items-center">
          <span className="dark:text-white text-2xl">About</span>
        </Link>
        <Link to="/" className="flex items-center">
          <span className="dark:text-white text-2xl">See us</span>
        </Link>
        <a href="https://github.com/farazzhh">
          <ImGithub className="text-black dark:text-white text-4xl" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
