import React from "react";
import backgroundAbout from "../../assets/gustavo-alves-YOXSC4zRcxw-unsplash 1.png";
import Banner from "../../components/Ui/banner/banner";
import Dropdown from "../../components/Ui/dropdown/dropdown";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <Banner src={backgroundAbout} />
      <Dropdown title="Fiabilité" />
      <Dropdown title="Respect" />
      <Dropdown title="Service" />
      <Dropdown title="Responsabiité" />
    </div>
  );
};

export default About;
