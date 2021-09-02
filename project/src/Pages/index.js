import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

    const darkModeHanlder = () => {
        setDarkMode(!darkMode)
        console.log("clicked");
  }
  return (
    <div className={`${darkMode ? `dark` : null}`}>
      <Navbar darkMode={darkMode} darkModeHanlder={darkModeHanlder} />
    </div>
  );
};

export default Home;
