import { Component } from "react";
import star from "assets/starRate.svg";
import "./Presentation.css";

export default class Presentation extends Component {
  constructor(props) {
    super();
    this.title = props.rent.title;
    this.city = props.rent.location;
    this.tagList = props.rent.tags;
    this.profilPicture = props.rent.host.picture;
    this.profilName = props.rent.host.name;
  }

  render() {
    return (
      <section className="flatInfos">
        <div className="flatInfos_bar">
          <div className="titles">
            <h1>{this.title}</h1>
            <h2>{this.city}</h2>
          </div>
          <div className="taglist">
            {this.tagList.map((tag, index) => (
              <li className="tag" key={index}>
                {tag}
              </li>
            ))}
          </div>
        </div>

        <div className="host">
          <figure className="host-identity">
            <figcaption>{this.profilName}</figcaption>
            <img src={this.profilPicture} alt={" photo of" + this.profilName} />
          </figure>

          <span className="rate">
            <img src={star} alt="etoile" />
            <img src={star} alt="etoile" />
            <img src={star} alt="etoile" />
            <img src={star} alt="etoile" />
            <img src={star} alt="etoile" />
          </span>
        </div>
      </section>
    );
  }
}
