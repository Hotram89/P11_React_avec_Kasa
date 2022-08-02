import { Component } from "react";
import React from "react";
import "./Dropdown.css";

export default class Dropdown extends Component {
  constructor(props) {
    super();
    this.title = props.title;
    this.text = props.rent;
  }

  render() {
    return (
      <div className="dropdown-large">
        <h2 className="dropdown-title">{this.title} </h2>
        <p className="dropdown-text">{this.text}</p>
      </div>
    );
  }
}
