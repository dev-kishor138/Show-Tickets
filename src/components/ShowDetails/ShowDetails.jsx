import React, { useState } from "react";
import "./ShowDetail.css";
import { useLoaderData } from "react-router-dom";

const ShowDetails = () => {
  // using useState for set a Modal
  const [modal, setModal] = useState(0);

  const toggleModal = (index) => {
    setModal(index);
  };

  // setData to LocalStorage
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    const userData = { name, email, message };

    // set data to localStorage using JSON.Stringify
    localStorage.setItem("user-Data", JSON.stringify(userData));
    form.reset();
  };

  // useLoaderData hook use for load data from api
  const data = useLoaderData();
  const { image, name, language, genres, rating, runtime, summary, schedule } =
    data;

  return (
    <div className="full-width">
      <div className="container movie-container">
        <div className="movie-banner">
          <img src={image?.original} alt="" />
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

          <button className="purchase-button" onClick={() => toggleModal(1)}>
            Purchase Ticket
          </button>
        </div>

        {/* modals */}
        <div className={modal === 1 ? "show-modal active-modal" : "show-modal"}>
          <div className="show-modal-content">
            <i
              onClick={() => toggleModal(0)}
              className="uil uil-times show-modal-close"
            ></i>
            <div className="modal-description">
              <div className="modal-show-details">
                <div className="modal-img">
                  <img src={image.medium} alt="" />
                </div>
                <h2 className="modal-title">{name}</h2>
                <p>Price: $20</p>
              </div>
              <div className="modal-form">
                <form onSubmit={handleSubmit}>
                  <div className="input-box">
                    <label htmlFor="">Name</label>
                    <input type="text" name="name" required />
                  </div>
                  <div className="input-box">
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" required />
                  </div>
                  <div className="input-box">
                    <label htmlFor="">Message</label>
                    <textarea name="message" id=""></textarea>
                  </div>
                  <button className="submit-button">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowDetails;
