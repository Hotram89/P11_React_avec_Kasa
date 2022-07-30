import React from "react";
import Banner from "components/Ui/Banner/Banner";
import "./Home.css";
import backgroundHome from "assets/baie.png";
import data from "data/logements.json";
import Card from "components/Card/Card";

const Home = () => {
  const appartList = data;

  const bannerInfos = {
    altText: "brouillard",
    bannerText: "Chez vous, partout et ailleurs",
    img: backgroundHome,
  };

  return (
    <div>
      <Banner src={bannerInfos} />
      <section className="gallery">
        {appartList.map((appt, index) => (
          <Card key={appt.id} appt={appt} />
        ))}
      </section>
    </div>
  );
};

export default Home;
