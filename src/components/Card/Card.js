import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <a href={"./Rent/" + props.appt.id}>
      <figure className="card">
        <img src={props.appt.cover} alt={props.appt.title} />
        <figcaption className="card-title">
          <h2>{props.appt.title}</h2>
        </figcaption>
      </figure>
    </a>
  );
};

export default Card;
