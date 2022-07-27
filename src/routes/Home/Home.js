import React from "react";
import Banner from "../../components/Ui/banner/banner";
import "./Home.css";
import backgroundHome from "../../assets/baie.png";
import ApiProvider from "../../data/ApiProvider";
import data from "../../data/logements.json";

const Home = () => {
  const appartList = data;

  return (
    <div>
      <Banner src={backgroundHome} alt="brouillard" />
      <ApiProvider />
      <section className="gallery">
        {appartList.map((appt, index) => (
          <a href="./Flat">
            <figure>
              <img src={appt.cover} alt="{appt.title}" />
              <figcaption key={`${appt.id}-${index}`}>
                <h2>{appt.title}</h2>
              </figcaption>
            </figure>
          </a>
        ))}
      </section>
    </div>
  );
};

export default Home;
