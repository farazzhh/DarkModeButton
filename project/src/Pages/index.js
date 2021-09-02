import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

    const darkModeHanlder = () => {
        setDarkMode(!darkMode)
        console.log("clicked");
  }
  return (
    <>
      <Navbar darkMode={darkMode} darkModeHanlder={darkModeHanlder} />
    </>
  );
};

export default Home;
