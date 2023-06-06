import React from "react";
import "./Card.css";

const Card = ({ element }) => {
  const { name, image } = element;
  return (
    <div className="card">
      <img src={image.medium} alt="" />
      <h3>Name: {name} </h3>
      <button>Read Details</button>
    </div>
  );
};

export default Card;
