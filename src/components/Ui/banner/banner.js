import { Component } from "react";
import React from "react";
import "./banner.css";

export default class Banner extends Component {
  constructor({ src, altText }) {
    super();
    this.src = src;
    this.alt = altText;
  }

  render() {
    return (
      <div className="heroImg">
        <img src={this.src} alt={this.alt} />
      </div>
    );
  }
}
