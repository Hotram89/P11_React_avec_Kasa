import { Component } from "react";
import arrowUp from "assets/arrow.svg";
import arrowDown from "assets/arrowDown.svg";
import React from "react";
import "./Dropdown.css";

export default class Dropdown extends Component {
  constructor(props) {
    super();
    this.title = props.title;
    this.text = props.rent;
    this.state = { open: false };
  }

  handleClick() {
    this.setState((prevState) => ({
      open: !prevState.open,
    }));
  }

  render() {
    const arrow = this.state.open ? arrowUp : arrowDown;

    return (
      <div className="dropdown-large">
        <div className="dropdown-title" onClick={() => this.handleClick()}>
          <h2>{this.title}</h2>
          <img src={arrow} alt="arrow" />
        </div>
        <p
          className="dropdown-text"
          style={{ display: this.state.open ? "block" : "none" }}
        >
          {this.text}
        </p>
      </div>
    );
  }
}
