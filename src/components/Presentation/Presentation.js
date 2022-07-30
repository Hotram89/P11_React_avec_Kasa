import { Component } from "react";
import star from "assets/starRate.svg";
import "./Presentation.css";

export default class Presentation extends Component {
  constructor(props) {
    super();
    console.log(props);
    this.title = props.rent.title;
    this.city = props.rent.location;
    this.tagList = props.rent.tags;
  }

  render() {
    return (
      <section className="flatInfos">
        <h1>{this.title}</h1>
        <h2>{this.city}</h2>
        <div className="flatInfos_bar">
          <div className="taglist">
            {this.tagList.map((tag, index) => (
              <li className="tag" key={index}>
                {tag}
              </li>
            ))}
          </div>
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
