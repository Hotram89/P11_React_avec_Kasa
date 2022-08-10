import React from "react";
import backgroundAbout from "assets/gustavo-alves-YOXSC4zRcxw-unsplash 1.png";
import Banner from "components/Ui/Banner/Banner";
import Dropdown from "components/Ui/Dropdown/Dropdown";
import "./About.css";
import ApiProvider from "data/ApiProvider";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = { rent: null, loading: true };
  }

  infoDropdown() {
    const about = {
      fiabilité:
        "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
      respect:
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
      service:
        "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
      sécurité:
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    };

    return about;
  }

  render() {
    const bannerInfos = {
      altText: "sommets enneigés",
      bannerText: "",
      img: backgroundAbout,
    };

    const infos = this.infoDropdown();

    return (
      <div className="about">
        <Banner src={bannerInfos} />
        <Dropdown title="Fiabilité" rent={infos.fiabilité} />
        <Dropdown title="Respect" rent={infos.respect} />
        <Dropdown title="Service" rent={infos.service} />
        <Dropdown title="Responsabiité" rent={infos.sécurité} />
      </div>
    );
  }
}

export default About;
