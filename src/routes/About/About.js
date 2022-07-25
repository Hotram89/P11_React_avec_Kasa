import React from "react";
import Footer from "../../components/Footer/Footer";
import Dropdown from "../../components/Ui/dropdown/dropdown";

const About = () => {
  return (
    <div>
      <Dropdown title="Fiabilité" />
      <Dropdown title="Respect" />
      <Dropdown title="Service" />
      <Dropdown title="Responsabiité" />
    </div>
  );
};

export default About;
