/* eslint-disable indent, linebreak-style, comma-dangle */
import React, { useState } from "react";
import HighScoreTable from "./HighScoreTable";
import { allCountryScores as rawScores } from "./scores.js";
import SortButton from "./SortButton";

// sorts countries in alphabetical order by name
const allCountryScores = rawScores.sort((a, b) =>
  a.name.localeCompare(b.name)
);

const App = () => {
  // toggles true/false when button is clicked (for sorting scores)
  const [sortOrder, setSortOrder] = useState(false);
  const handleClick = () => {
    setSortOrder(!sortOrder);
  };

  // returns an object of all scores combined, regardless of country
  const combinedScores = () => {
    let scores = [];
    for (const country of allCountryScores) {
      scores = scores.concat(country.scores);
    }

    // toggles sorting from low to high / high to low
    if (sortOrder) {
      scores.sort((a, b) => a.s - b.s);
    } else {
      scores.sort((a, b) => b.s - a.s);
    }

    return {
      name: "All countries",
      scores: scores,
    };
  };

  return (
    <main>
      <SortButton clickHandler={handleClick} />
      <h1>All scores</h1>
      <HighScoreTable country={combinedScores()} />
      <h1>High Scores per Country</h1>
      {allCountryScores.map((country, index) => {
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
