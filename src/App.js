/* eslint-disable indent, linebreak-style */
import React from "react";
import HighScoreTable from "./HighScoreTable.js";
import allCountryScores from "./scores.js";

const App = () => {
  return (
    <div>
      <h1>High Scores per Country</h1>
      {allCountryScores.map((country, index) => {
        return <HighScoreTable country={country} key={index} />;
      })}
    </div>
  );
};

export default App;
