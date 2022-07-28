import { Component } from "react";
import data from "./logements.json";

class ApiProvider extends Component {
  componentDidMount() {
    console.log(data);
    return data;
  }
}

export default ApiProvider;
