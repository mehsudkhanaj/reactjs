import React, { useState } from 'react';

export const LearnState = () => {
  const handleNum = () => {
    setNum("Shanza Jimi");
  };

  const handleXY = () => {
    setPosition({ x: 2, y: 3 });
  };

  const [position, setPosition] = useState({ x: 1, y: 2 });
  const [num, setNum] = useState("Jimi");

  return (
    <>
      <h1>Name {num}</h1>
      <h1>X and Y {position.x} {position.y}</h1>

      <button onClick={handleNum}>Change Number</button>
      <button onClick={handleXY}>X and Y</button>
    </>
  );
};
