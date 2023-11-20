import boxData from "./boxData";
import Box from "./box";
import "./main.css";
import React from "react";

export default function BoxApp() {
  let [squares, setSquares] = React.useState(boxData);

  let boxSquares = squares.map((square) => {
    return <Box key={square.id} on={squares.on} />;
  });
  return <div>{boxSquares}</div>;
}
