import { Navigate } from "react-router-dom";
import livingRoom from "assets/flat_greenplants.png";

const { Component } = require("react");

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = { pictures: null, loading: true };
  }

  componentDidMount() {}

  render() {
    return (
      <div className="heroImage">
        <img src={livingRoom} alt="living room" />
      </div>
    );
  }
}

export default Carousel;
