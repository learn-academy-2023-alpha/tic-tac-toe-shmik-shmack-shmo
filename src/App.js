import React, { useState } from "react";
import Square from "./components/Square";
import "./App.css";

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [playerOne, setPlayerOne] = useState(true);
  const [playable, setPlayable] = useState(true);
  const [currentPlayer, setCurrentPlayer] = useState("Player 𝚇's Turn");
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };
  const handleGamePlay = (index) => {
    let updatedSquares = [...squares];
    if (playerOne && updatedSquares[index] === null && playable) {
      updatedSquares[index] = "𝚇";
      setCurrentPlayer("Player 🅾️'s Turn");
    } else if (!playerOne && updatedSquares[index] === null && playable) {
      updatedSquares[index] = "🅾️";
      setCurrentPlayer("Player 𝚇️'s Turn");
    } else if (updatedSquares.every(true)) {
      setPlayable(false);
      setCurrentPlayer("The Game Ends In a Draw!");
    }
    setSquares(updatedSquares);
    setPlayerOne(!playerOne);
    let winner = calculateWinner(updatedSquares);
    if (winner) {
      setPlayable(false);
      setCurrentPlayer(`${winner} is the winner!`);
    }
  };

  return (
    <>
      <h1 className="header">Shmik Shmack Shmo</h1>
      <p className="currentplayer">{currentPlayer}</p>
      <div className="gameboard">
        {squares.map((value, index) => {
          return (
            <Square
              value={value}
              key={index}
              index={index}
              handleGamePlay={handleGamePlay}
              calculateWinner={calculateWinner}
            />
          );
        })}
      </div>
    </>
  );
};

export default App;
