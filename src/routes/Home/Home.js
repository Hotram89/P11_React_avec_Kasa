import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <h1>ACCUEIL</h1>
      <section className="heroImg"></section>
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
