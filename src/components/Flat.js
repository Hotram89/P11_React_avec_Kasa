import { Component } from "react";
import companyLogo from "../assets/LOGO.png";
import livingRoom from "../assets/flat_greenplants.png";

class Flat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      describe: "coucou je mets tous le descriptif de la villa ici ou la",
      isToggleOn: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState((state) => {
        return { name: "villa", city: "Paris" };
      });
    }, 2000);
    console.log("c ou");
    fetch("./data/logements.json")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  }

  handleClick() {
    console.log("ça passe ");
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
    }));
  }

  render() {
    return null === this.state.name ? (
      <div>Chargement...</div>
    ) : (
      <>
        <div>
          <header className="flatHeader">
            <img src={companyLogo} alt="logo Kasa" />
            <nav className="menu">
              <a className="menuItem" href="www.google.com">
                Accueil
              </a>
              <a className="menuItem" href="www.wikipedia.org">
                A Propos
              </a>{" "}
            </nav>
          </header>

          <main>
            <div className="heroImage">
              <img src={livingRoom} alt="living room" />
            </div>

            <section className="flatInfos">
              <h1>Appartement: {this.state.name}</h1>
              <h2>{this.state.city}</h2>

              {this.state.describe}
            </section>
          </main>
        </div>
        <button onClick={() => this.handleClick}>
          {this.state.isToggleOn ? "ON" : "OFF"}
        </button>
      </>
    );
  }
}

export default Flat;
