import React from "react";
import "./Card.css";

const Card = props => {
  return (
    <div
      className={props.card.animation}
      onClick={() => props.onClickCard(props.card)}
    >
      <img src="juice.jpg" alt="juice" className="card-image" />
      <div className="container">
        <h3>
          Vitamin juice <span className="price">102$</span>
        </h3>
        <p>
          Need a jum on you vitamin while driking? tried popping pills? driking
          our Vitamin enhanced juice, available in serval flavours
        </p>
      </div>
    </div>
  );
};

export default Card;
