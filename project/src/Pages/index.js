import React, { useState } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
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
      <Header />
      <Sections  side={false} src="./assets/section1.jpg" />
      <Sections  side={true} src="./assets/section2.jpg" />
      <Footer  />
    </div>
  );
};

export default Home;
