import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Sections from "../Components/Sections";

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

    const darkModeHanlder = () => {
        setDarkMode(!darkMode)
        console.log("clicked");
  }
  return (
    <div className={`${darkMode ? `dark` : null}`}>
      <Navbar darkMode={darkMode} darkModeHanlder={darkModeHanlder} />
          <Sections darkMode={darkMode} side={false}/>
          <Sections darkMode={darkMode} side={true}/>
    </div>
  );
};

export default Home;
