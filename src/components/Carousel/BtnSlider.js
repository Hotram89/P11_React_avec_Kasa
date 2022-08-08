import { Component } from "react";
import rightArrow from "assets/arrowRight.svg";
import leftArrow from "assets/arrowLeft.svg";
import "./Carousel.css";

class BtnSlider extends Component {
  render() {
    return (
      <button className="btn-slide">
        <img src={rightArrow} alt="right clic" />
      </button>
    );
  }
}

export default BtnSlider;
