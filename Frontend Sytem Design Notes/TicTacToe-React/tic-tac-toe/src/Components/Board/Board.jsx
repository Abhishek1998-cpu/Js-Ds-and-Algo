import React, { useState, useEffect } from "react";
import Square from "../Square/Square";
import "./BoardStyles.css";

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(false);
  const [isWinner, setIsWinner] = useState(false);
  const [whoWin, setWhoWin] = useState("");
  const handleOnClick = function (index) {
    console.log(index);
    const copyState = [...state]; // This is very important || Never directly copy an object state as setState will not change it
    copyState[index] = isXTurn ? "X" : "0";
    setState(copyState);
    setIsXTurn(!isXTurn);
  };

  const isWinnerValidation = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winnerLogic?.length; i++) {
      const [a, b, c] = winnerLogic?.[i];
      if (state[a] !== null && state[a] === state[b] && state[b] === state[c]) {
        return state[a];
      }
    }
    return false;
  };

  useEffect(() => {
    const checkForWinner = isWinnerValidation();
    if (checkForWinner) {
      setIsWinner(true);
      setWhoWin(checkForWinner);
    } else {
      setIsWinner(false);
      setWhoWin("");
    }
  }, [state]);
  return isWinner ? (
    `Winner is ${whoWin}`
  ) : (
    <div className="board-container">
      <div className="board-row">
        <Square
          value={state?.[0]}
          onClick={() => handleOnClick(0)}
        />
        <Square
          value={state?.[1]}
          onClick={() => handleOnClick(1)}
        />
        <Square
          value={state?.[2]}
          onClick={() => handleOnClick(2)}
        />
      </div>
      <div className="board-row">
        <Square
          value={state?.[3]}
          onClick={() => handleOnClick(3)}
        />
        <Square
          value={state?.[4]}
          onClick={() => handleOnClick(4)}
        />
        <Square
          value={state?.[5]}
          onClick={() => handleOnClick(5)}
        />
      </div>
      <div className="board-row">
        <Square
          value={state?.[6]}
          onClick={() => handleOnClick(6)}
        />
        <Square
          value={state?.[7]}
          onClick={() => handleOnClick(7)}
        />
        <Square
          value={state?.[8]}
          onClick={() => handleOnClick(8)}
        />
      </div>
    </div>
  );
};

export default Board;
