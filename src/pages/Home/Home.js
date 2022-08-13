import React from "react";
import Banner from "components/Ui/Banner/Banner";
import "./Home.css";
import backgroundHome from "assets/baie.png";
import Card from "components/Card/Card";
import ApiProvider from "data/ApiProvider";

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = { logements: null, loading: true, error: false };
  }

  componentDidMount() {
    ApiProvider.getLogements()
      .then((data) => {
        this.setState({ logements: data });
      })
      .catch((err) => {
        this.setState({ error: true });
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  }
  render() {
    const bannerInfos = {
      altText: "brouillard",
      bannerText: "Chez vous,\n partout et ailleurs",
      img: backgroundHome,
    };

    return this.state.loading ? (
      <>Loading</>
    ) : !this.state.logements ? (
      <div>erreur: Pas de logements trouvés</div>
    ) : (
      <div>
        <Banner src={bannerInfos} />
        <section className="gallery">
          {this.state.logements.map((appt, index) => (
            <Card key={appt.id} appt={appt} />
          ))}
        </section>
      </div>
    );
  }
}
