import React, { useState } from "react";
import Square from "./components/Square";
import "./App.css";

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));

  return (
    <>
      <h1 className="header">Shmik Shmack Shmo</h1>
      <div className="gameboard">
        {squares.map((value, index) => {
          return <Square />;
        })}
      </div>
    </>
  );
};

export default App;
