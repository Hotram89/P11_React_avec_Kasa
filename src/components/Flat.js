import { Component } from "react";
import livingRoom from "../assets/flat_greenplants.png";
import Navigation from "./Navigation";
import "./Flat.css";

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
          <main>
            <Navigation />
            <div className="heroImage">
              <img src={livingRoom} alt="living room" />
            </div>

            <section className="flatInfos">
              <h1>Appartement: {this.state.name}</h1>
              <h2>{this.state.city}</h2>
              <div className="flatInfos_bar">
                <div className="taglist">
                  <li className="tag">Cozy</li>
                  <li className="tag">Canal</li>
                </div>
                <span className="rate">
                  <img src="./starRate.svg" alt="etoile" />
                  <img src="./starRate.svg" alt="etoile" />
                  <img src="./starRate.svg" alt="etoile" />
                  <img src="./starRate.svg" alt="etoile" />
                  <img src="./starRate.svg" alt="etoile" />
                </span>
              </div>
              <div className="flatInfos_Content">
                <div className="dropdown-open">
                  <h3>Description</h3>
                  {this.state.describe}
                </div>
                <div className="dropdown-open">
                  <h3>Equipements</h3>
                  {this.state.describe}
                </div>
              </div>
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
