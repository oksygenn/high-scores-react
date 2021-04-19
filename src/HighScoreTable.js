/* eslint-disable indent, linebreak-style */
import React from "react";
import PlayerScore from "./PlayerScore.js";

const HighScoreTable = (props) => {
  return (
    <div>
      <h3>High scores: {props.country.name}</h3>
      {props.country.scores.map((score, index) => {
        return <PlayerScore player={score} key={index} />;
      })}
    </div>
  );
};

export default HighScoreTable;
