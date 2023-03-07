import React, { useState } from "react";
import Square from "./components/Square";
import "./App.css";


const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const handleGamePlay = (index) => {
    let updatedSquares = [...squares]
    updatedSquares[index]= "Ⓧ"
    setSquares(updatedSquares)


  }

  return (
    <>
      <h1 className="header">Shmik Shmack Shmo</h1>
      <div className="gameboard">
        {squares.map((value, index) => {
          return <Square 
          value={value}
          key={index}
          index={index}
          handleGamePlay={handleGamePlay}
          
          />;
          
        })}
      </div>
    </>
  );
};

export default App;
