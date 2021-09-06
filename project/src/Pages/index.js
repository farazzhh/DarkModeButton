import React, { useState } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import Sections from "../Components/Sections";

const Home = () => {
  
  return (
    <>
      <Header title="FRZH"/>
      <Sections  side={false} src="./assets/section1.jpg" />
      <Sections  side={true} src="./assets/section2.jpg" />
    </>
  );
};

export default Home;
