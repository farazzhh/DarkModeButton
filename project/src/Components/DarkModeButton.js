import React from 'react'
import { ImSun } from "react-icons/im";
import { FaMoon } from "react-icons/fa";

const DarkModeButton = ({ darkMode, darkModeHanlder }) => {
  return (
    <div className="flex items-center dark:text-white">
      <ImSun className="text-black dark:text-white" />
      <label className="cursor-pointer" onClick={darkModeHanlder}>
        <div className="relative flex items-center mx-2">
          <div className="w-16 h-8 bg-gray-300 rounded-full dark:bg-gray-700 ring-2"></div>
          <div
            className={` ease-in-out w-8 h-8 bg-blue-900 absolute rounded-full ring-1 right-0 transform dark:bg-blue-500 ${
              darkMode && "-translate-x-8"
            }`}
          ></div>
        </div>
      </label>
      <FaMoon className="text-black dark:text-white" />
    </div>
  );
};

export default DarkModeButton
