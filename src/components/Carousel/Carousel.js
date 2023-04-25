import BtnSlider from "./BtnSlider";
import "./Carousel.css";
import ApiProvider from "data/ApiProvider";

const { Component } = require("react");

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: props.pictures,
      currentSlideIndex: 0,
      loading: true,
    };
  }

  nextSlide() {
    if (this.state.currentSlideIndex !== this.state.pictures.length - 1) {
      this.setState({
        currentSlideIndex: this.state.currentSlideIndex + 1,
      });
    } else if (
      this.state.currentSlideIndex ===
      this.state.pictures.length - 1
    ) {
      this.setState({
        currentSlideIndex: 0,
      });
    }
  }

  prevSlide() {
    if (this.state.currentSlideIndex !== 0) {
      this.setState({
        currentSlideIndex: this.state.currentSlideIndex - 1,
      });
    } else if (this.state.currentSlideIndex === 0) {
      this.setState({
        currentSlideIndex: this.state.pictures.length - 1,
      });
    }
  }

  render() {
    return !this.state.pictures ? (
      <div>Aucune image</div>
    ) : (
      <div className="container-slider">
        {this.state.pictures.length > 1 ? (
          <BtnSlider
            onclick={() => {
              this.prevSlide();
            }}
            direction="prev"
          />
        ) : (
          ""
        )}

        <div className="slide">
          <img
            src={this.state.pictures[this.state.currentSlideIndex]}
            alt="living room"
          />
        </div>
        {this.state.pictures.length > 1 ? (
          <BtnSlider
            onclick={() => {
              this.nextSlide();
            }}
            direction="next"
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Carousel;
