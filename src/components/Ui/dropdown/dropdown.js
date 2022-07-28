import { Component } from "react";
import React from "react";
import "./dropdown.css";

export default class Dropdown extends Component {
  constructor({ title, autre }) {
    super();
    this.title = title;
  }

  render() {
    return (
      <div className="dropdown-large">
        <h2 className="dropdown-title">{this.title} </h2>
        <p className="dropdown-text">
          Texte à remplacer Texte à remplacer Texte à remplacer Texte à
          remplacer Texte à remplacer Texte à remplacer Texte à rempla Texte à
          remplacer cer Texte à remplacer
        </p>
      </div>
    );
  }
}
