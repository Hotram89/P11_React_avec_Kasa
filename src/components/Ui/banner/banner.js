import { Component } from "react";
import React from "react";
import "./Banner.css";

export default class Banner extends Component {
  constructor(props) {
    super();
    this.src = props.src.img;
    this.alt = props.src.altText;
    this.bannerText = props.src.bannerText;
  }

  render() {
    return (
      <div className="heroImg">
        <img src={this.src} alt={this.alt} />
        <h1 className="textOption">{this.bannerText}</h1>
      </div>
    );
  }
}
