import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Sections from "../Components/Sections";

const Home = () => {
  const [darkMode, setDarkMode] = useState(true);

    const darkModeHanlder = () => {
        setDarkMode(!darkMode)
        console.log("clicked");
  }
  return (
    <div className={`${!darkMode && `dark`}`}>
      <Navbar darkMode={darkMode} darkModeHanlder={darkModeHanlder} />
          <Sections darkMode={darkMode} side={false} src="./assets/section1.jpg"/>
          <Sections darkMode={darkMode} side={true} src="./assets/section2.jpg"/>
    </div>
  );
};

export default Home;
