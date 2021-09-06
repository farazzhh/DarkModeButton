import React from "react";
import Sections from "../Components/Sections";
const About = () => {
  return (
    <div>
      <Sections side={false} src="./assets/section2.jpg" />
      <Sections side={true} src="./assets/section1.jpg" />
    </div>
  );
};

export default About;
