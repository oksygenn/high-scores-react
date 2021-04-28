/* eslint-disable indent, linebreak-style */
import React from "react";
import PlayerScore from "./PlayerScore.js";

const HighScoreTable = ({ country }) => {
  return (
    <div className="scoreTable">
      <h3>High scores: {country.name}</h3>
      {country.scores.map((player, index) => {
        return <PlayerScore player={player} key={index} />;
      })}
    </div>
  );
};

export default HighScoreTable;
