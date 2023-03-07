import React from "react";

const Square = ({ value, index, handleGamePlay, calculateWinner }) => {
  const handleClick = () => {
    handleGamePlay(index);
  };
  return (
    <div className="square" onClick={handleClick}>
      {value}
    </div>
  );
};
export default Square;
