import React, { useEffect, useState } from "react";
import "./Show.css";
import Card from "../Card/Card";

const Shows = () => {
  // set useState for set localData
  const [data, setData] = useState([]);

  // useEffect hooks for load all Data
  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => res.json())
      .then((d) => setData(d));
  }, []);

  return (
    <div className="container">
      <h1>All Shows Are Here</h1>
      <div className="card-container">
        {/* use map  */}
        {data.map((element) => (
          <Card element={element.show} key={element.show.id} />
        ))}
      </div>
    </div>
  );
};

export default Shows;
