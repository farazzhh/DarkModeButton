import React from "react";
import { Link } from "react-router-dom";
import { ImGithub } from "react-icons/im";

const Footer = ({ darkMode }) => {
  return (
    <footer
      className={`w-screen py-8 bg-blue-400 dark:bg-blue-900 dark:text-white text-shite`}
    >
      <div className="container mx-auto">
        <div className=" flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className=" text-2xl">FRZH</span>
          </Link>
          <span className="text-xs md:text-base">Company {new Date().getFullYear()} All Rights reserved.</span>
          <a href="https://github.com/farazzhh">
            <ImGithub className="text-black dark:text-white text-4xl" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
