import livingRoom from "assets/flat_greenplants.png";
import "./Carousel.css";

const { Component } = require("react");

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = { pictures: props.pictures, loading: true };
    console.log(this.state);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="heroImage">
        {this.state.pictures.map((picture, index) => (
          <img key={index} src={picture} alt="living room" />
        ))}
      </div>
    );
  }
}

export default Carousel;
