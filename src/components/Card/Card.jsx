import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = ({ element }) => {
  // console.log(element);
  // Destructuring
  const { name, image, genres, rating, runtime, id } = element;

  return (
    <div className="card">
      <div className="show-img">
        <img src={image.original} alt="" />
      </div>
      <div className="show-details">
        <h3 className="show-name">{name}</h3>
        <div className="genres">
          <span>{genres[0]}</span>
          {genres[1] ? <span>{genres[1]}</span> : ""}
        </div>
        {rating?.average ? (
          <p className="rating">IMDb Rating: {rating.average}</p>
        ) : (
          <p className="rating">IMDb Rating: 6.5</p>
        )}

        {runtime ? (
          <p className="runtime">Runtime: {runtime}</p>
        ) : (
          <p className="runtime">Runtime: 50</p>
        )}

        {/* show uniqe data using Link  */}
        <Link to={`/show-details/${id}`}>
          <button>More Info</button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
