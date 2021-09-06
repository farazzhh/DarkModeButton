import React, { useState } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import Sections from "../Components/Sections";

const Home = () => {
  
  return (
    <div>
     
      <Header />
      <Sections  side={false} src="./assets/section1.jpg" />
      <Sections  side={true} src="./assets/section2.jpg" />
     
    </div>
  );
};

export default Home;
