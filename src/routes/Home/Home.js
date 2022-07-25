import React from "react";
import Banner from "../../components/Ui/banner/banner";
import "./Home.css";
import backgroundHome from "../../assets/baie.png";

const Home = () => {
  return (
    <div>
      <Banner src={backgroundHome} alt="brouillard" />
      <section className="gallery">
        <a href="./Flat">
          <figure>
            <figcaption>Titre de la location</figcaption>
          </figure>
        </a>
      </section>
    </div>
  );
};

export default Home;
