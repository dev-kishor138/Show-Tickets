import React from "react";
import "./ShowDetail.css";
import { useLoaderData } from "react-router-dom";

const ShowDetails = () => {
  const data = useLoaderData();
  const {
    image,
    name,
    language,
    genres,
    rating,
    runtime,
    summary,
    schedule,
    network,
  } = data;
  console.log(data);
  return (
    <div className="container movie-container">
      <div className="movie-banner">
        <img src={image.original} alt="" />
      </div>
      <div className="movie-details">
        <h2>{name}</h2>
        <h4>Language : {language}</h4>
        <h5>
          Genres : {genres[0]}, {genres[1]}
        </h5>
        <h4>Ratings : imdb {rating.average} </h4>
        <p>
          <small>Runtime : {runtime} min</small>
        </p>
        <p>
          Show Time: {schedule.days}, {schedule.time}
        </p>
        <p>About This Movie: {summary}</p>

        <button>Purchase Ticket</button>
      </div>
    </div>
  );
};

export default ShowDetails;
