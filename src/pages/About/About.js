import React from "react";
import backgroundAbout from "assets/gustavo-alves-YOXSC4zRcxw-unsplash 1.png";
import Banner from "components/Ui/Banner/Banner";
import Dropdown from "components/Ui/Dropdown/Dropdown";
import "./About.css";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = { rent: null, loading: true };
  }

  render() {
    const bannerInfos = {
      altText: "sommets enneigés",
      bannerText: "",
      img: backgroundAbout,
    };
    return (
      <div className="about">
        <Banner src={bannerInfos} />
        <Dropdown title="Fiabilité" />
        <Dropdown title="Respect" />
        <Dropdown title="Service" />
        <Dropdown title="Responsabiité" />
      </div>
    );
  }
}

export default About;
