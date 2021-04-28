/* eslint-disable indent, linebreak-style, comma-dangle */
import React, { useState } from "react";
import HighScoreTable from "./HighScoreTable";
import allCountryScores from "./scores.js";
import SortButton from "./SortButton";

const App = () => {
  // sorts countries in alphabetical order
  const allScores = allCountryScores.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  // toggles true/false when button is clicked
  const [sortOrder, setSortOrder] = useState(false);
  const handleClick = () => {
    setSortOrder(!sortOrder);
  };

  return (
    <main>
      <h1>High Scores per Country</h1>
      <SortButton clickHandler={handleClick} />

      {allScores.map((country, index) => {
        // if state is true - sort from low to high
        // if state is false - sort from high to low
        if (sortOrder) {
          country.scores.sort((a, b) => a.s - b.s);
        } else {
          country.scores.sort((a, b) => b.s - a.s);
        }

        return <HighScoreTable country={country} key={index} />;
      })}
    </main>
  );
};

export default App;
