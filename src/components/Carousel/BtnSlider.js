import { Component } from "react";
import rightArrow from "assets/arrowRight.svg";
import leftArrow from "assets/arrowLeft.svg";
import "./Carousel.css";

class BtnSlider extends Component {
  constructor(props) {
    super(props);
    this.direction = props.direction;
    this.moveSlide = props.onclick;
  }
  render() {
    return (
      <button
        onClick={this.moveSlide}
        className={
          this.direction === "next" ? "btn-slide next" : "btn-slide prev"
        }
      >
        <img
          src={this.direction === "next" ? rightArrow : leftArrow}
          alt="right clic"
        />
      </button>
    );
  }
}

export default BtnSlider;
