import React from "react";
import "./SquareStyles.css";

const Square = ({ value, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="square"
    >
      {value}
    </div>
  );
};

export default Square;
