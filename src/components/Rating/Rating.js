import React from "react";
import starFull from "assets/starFull.svg";
import starEmpty from "assets/starEmpty.svg";

export default class Rating extends React.Component {
  constructor(props) {
    super(props);
    this.rate = parseInt(props.stars);
  }
  render() {
    const rate = [];
    for (let i = 1; i <= 5; i++) {
      rate.push(i <= this.rate);
    }

    return (
      <ul className="rate">
        {rate.map((star, index) => (
          <li key={index}>
            <img src={star ? starFull : starEmpty} alt="etoile" />
          </li>
        ))}
      </ul>
    );
  }
}
