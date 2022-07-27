import { Component } from "react";
import data from "./logements.json";

class ApiProvider extends Component {
  componentDidMount() {
    console.log(data);
  }

  render() {
    return (
      <div>
        <p>C'est de la data</p>
      </div>
    );
  }
}

export default ApiProvider;
