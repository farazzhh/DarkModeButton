import React from "react";
import Header from "../Components/Header";
import Sections from "../Components/Sections";
const About = () => {
  return (
      <div>
          <Header title="About" isImage={true}/>
      <Sections side={false} src="./assets/section2.jpg" />
      <Sections side={true} src="./assets/section1.jpg" />
    </div>
  );
};

export default About;
