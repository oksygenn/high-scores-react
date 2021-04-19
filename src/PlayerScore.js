/* eslint-disable indent, linebreak-style */
import React from "react";
const PlayerScore = (props) => {
  return (
    <ul>
      <li>{props.player.n}</li>
      <li>{props.player.s}</li>
    </ul>
  );
};

export default PlayerScore;
