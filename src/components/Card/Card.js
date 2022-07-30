import React from "react";

const Card = (props) => {
  return (
    <a href={"./Rent/" + props.appt.id}>
      <figure>
        <img src={props.appt.cover} alt={props.appt.title} />
        <figcaption>
          <h2>{props.appt.title}</h2>
        </figcaption>
      </figure>
    </a>
  );
};

export default Card;
