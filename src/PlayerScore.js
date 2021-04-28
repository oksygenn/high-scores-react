/* eslint-disable indent, linebreak-style */
import React from "react";
const PlayerScore = ({ player }) => {
  return (
    <ul className="player">
      <li>{player.n}</li>
      <li>{player.s}</li>
    </ul>
  );
};

export default PlayerScore;
