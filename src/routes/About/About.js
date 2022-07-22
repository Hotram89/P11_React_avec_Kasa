import React from "react";
import Navigation from "../../components/Navigation";

const About = () => {
  return (
    <div>
      <Navigation />
      <h1>A propos</h1>
      <br />
      <li>Fiabilité</li>
      <p>
        {" "}
        Les annonces postées sur Kasa garantissent une fiabilité totale. Les
        photos sont conformes aux logements, et toutes les informations sont
        régulièrement vérifiées par nos équipes.
      </p>
      <li>Respect</li>
      <li>Service</li>
      <li>Sécurité</li>
      <p>lorem ipsum dolor sit</p>
    </div>
  );
};

export default About;
