/* eslint-disable indent, linebreak-style */
import React from "react";
import HighScoreTable from "./HighScoreTable.js";
import allCountryScores from "./scores.js";

const App = () => {
  return (
    <div>
      <h1>High scores per Country</h1>
      {allCountryScores.map((country, index) => (
        <HighScoreTable country={country} key={index} />
      ))}
    </div>
  );
};

export default App;
