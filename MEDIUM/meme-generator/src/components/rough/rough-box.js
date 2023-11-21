import boxData from "./boxData";
import Box from "./box";
import "./main.css";
import React from "react";

export default function BoxApp() {
  let [squares, setSquares] = React.useState(boxData);

  function toggle(id) {
    setSquares((prevSquares) => {
      return prevSquares.map((square) => {
        return square.id === id ? { ...square, on: !square.on } : square;
      });
    });
  }

  let boxSquares = squares.map((square) => {
    return (
      <Box key={square.id} on={square.on} toggle={() => toggle(square.id)} />
    );
  });
  return <div>{boxSquares}</div>;
}
