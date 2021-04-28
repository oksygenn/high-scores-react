/* eslint-disable indent, linebreak-style, comma-dangle */
import React from "react";
import HighScoreTable from "./HighScoreTable.js";
import allCountryScores from "./scores.js";

const App = () => {
  const allScores = allCountryScores.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <main>
      <h1>High Scores per Country</h1>
      {allScores.map((country, index) => {
        return <HighScoreTable country={country} key={index} />;
      })}
    </main>
  );
};

export default App;
