import BtnSlider from "./BtnSlider";
import "./Carousel.css";

const { Component } = require("react");

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = { pictures: props.pictures, loading: true };
    console.log(this.state);
  }

  componentDidMount() {}

  nextSlide() {}

  prevSlide() {}

  render() {
    return (
      <div className="container-slider">
        {this.state.pictures.map((picture, index) => {
          return (
            <div className="slide">
              <img key={index} src={picture} alt="living room" />
            </div>
          );
        })}
        <BtnSlider />
      </div>
    );
  }
}

export default Carousel;
