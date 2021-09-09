import "./styles.css";
import React, { useState } from "react";

var list = ["Action", "Fantasy", "Comedy"];
var FantasyList = [
  "FullMetal Alchemist",
  "Hunter x Hunter",
  "Fate/Zero",
  "Irregular of the magic high school"
];
var ActionList = [
  "Parasyte Maxim",
  "Tokyo Ghoul",
  "Akame Ga Kill",
  "Fate/Zero"
];
var ComedyList = [
  "Gintama",
  "Grand Blue",
  "Daily lives of highschool boys",
  "One punch Man"
];

export default function App() {
  function clickEventHandler(Tag) {
    if (Tag === "Action") {
    }
    if (Tag === "Comedy") {
    }
    if (Tag === "Fantasy") {
    }
  }
  return (
    <div className="App">
      <h1> Recommendation </h1>
      <nav>
        {list.map(function (item) {
          return (
            <span className="pointer" onClick={() => clickEventHandler(item)}>
              {" "}
              {item}{" "}
            </span>
          );
        })}
      </nav>
    </div>
  );
}
