import React from "react";
import { Navigate } from "react-router-dom";
import ApiProvider from "../../data/ApiProvider";
import { useLocation } from "react-router";

class Rent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { rent: null, loading: true };
  }

  componentDidMount() {
    console.log();
    ApiProvider.getLogementById(window.location.pathname.split("/").pop())
      .then((data) => {
        this.setState({ rent: data });
      })
      .catch((error) => {
        console.dir(error);
        this.setState({ error: true });
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  }

  render() {
    return this.state.loading ? (
      <>Loading</>
    ) : this.state.error ? (
      <Navigate to="/error" />
    ) : (
      <>
        <h1>{this.state.rent.title}</h1>
        {this.state.rent.description}

        {/* Avoir du code comme ceci
                <Carousel pictures={this.state.rent.pictures} />
                <Presentation rent={this.state.rent} />
                <article className="accordionRent">
                    <section className="accordionElement">
                        <Accordion title={'Description'} content={this.state.rent.description} />
                    </section>
                    <section className="accordionElement">
                        <Accordion
                            title={'Equipements'}
                            content={this.state.rent.equipments.join('\n')}
                        />
                    </section>
                </article>
                */}
      </>
    );
  }
}

export default Rent;
