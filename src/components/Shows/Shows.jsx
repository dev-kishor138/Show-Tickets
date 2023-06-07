import React, { useEffect, useState } from "react";
import "./Show.css";
import Card from "../Card/Card";

const Shows = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => res.json())
      .then((d) => setData(d));
  }, []);
  return (
    <div className="container">
      <div className="card-container">
        {data.map((element) => (
          <Card element={element.show} key={element.show.id} />
        ))}
      </div>
    </div>
  );
};

export default Shows;
