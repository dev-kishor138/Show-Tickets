import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./Card/Card";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((d) => setData(d));
  }, []);
  return (
    <div>
      <h3>hello form the other side</h3>
      {data.length}
      <div className="card-container">
        {data.map((element) => (
          <Card element={element.show} key={element.score} />
        ))}
      </div>
    </div>
  );
}

export default App;
