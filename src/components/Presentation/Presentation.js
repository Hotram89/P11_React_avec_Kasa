import { Component } from "react";
import "./Presentation.css";
import Rating from "components/Rating/Rating";

export default class Presentation extends Component {
  constructor(props) {
    super();
    this.title = props.rent.title;
    this.city = props.rent.location;
    this.tagList = props.rent.tags;
    this.profilPicture = props.rent.host.picture;
    this.profilName = props.rent.host.name;
    this.stars = props.rent.rating;
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

          <Rating stars={this.stars} />
        </div>
      </section>
    );
  }
}
