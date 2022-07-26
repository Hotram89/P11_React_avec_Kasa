import React from "react";
import { Navigate } from "react-router-dom";
import ApiProvider from "data/ApiProvider";
import Carousel from "components/Carousel/Carousel";
import Presentation from "components/Presentation/Presentation";
import Dropdown from "components/Ui/Dropdown/Dropdown";
import "./Rents.css";

class Rent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { rent: null, loading: true, error: false };
  }

  componentDidMount() {
    ApiProvider.getLogementById(window.location.pathname.split("/").pop())
      .then((data) => {
        this.setState({ rent: data });
      })
      .catch((error) => {
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
        <Carousel pictures={this.state.rent.pictures} />
        <Presentation rent={this.state.rent} />
        <div className="flat-infos-content">
          <Dropdown title={"Description"} rent={this.state.rent.description} />
          <Dropdown
            title={"Equipements"}
            rent={this.state.rent.equipments.join("\n")}
          />
        </div>

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

                *******************
                class Accordion extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = { open: false };
    }

    handleClick() {
        this.setState((prevState) => ({
            open: !prevState.open
        }));
    }
    render() {
        const arrowPath = this.state.open ? arrowUp : arrowDown;

        return (
            <div className="accordionBody">
                <div className="accordionTitle" onClick={this.handleClick}>
                    <div>{this.props.title}</div>
                    <img src={arrowPath} />
                </div>
                <div
                    className="accordionContent"
                    style={{ display: this.state.open ? 'block' : 'none' }}>
                    {this.props.content}
                </div>
            </div>
        );
    }
}

export default Accordion;
Votre message

****************
   <React.Fragment>
                <Carousel pictures={this.state.rent.pictures} />
                */}
      </>
    );
  }
}

export default Rent;
