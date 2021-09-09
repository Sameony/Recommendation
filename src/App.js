import "./styles.css";
import React, { useState } from "react";

const Animes = {
  Action: [
    {
      name: "Tokyo Ghoul",
      rating: 6.4
    },
    {
      name: "Akame Ga Kill",
      rating: 7.4
    },
    {
      name: "Fate/Zero",
      rating: 5.7
    },
    {
      name: "Parasyte Maxim",
      rating: 8.8
    }
  ],
  Comedy: [
    {
      name: "Gintama",
      rating: 8.5
    },
    {
      name: "Grand blue",
      rating: 8.7
    },
    {
      name: "Daily lives of high school boys",
      rating: 7.5
    },
    {
      name: "One punch man",
      rating: 7.5
    }
  ],
  Fantasy: [
    {
      name: "FullMetal Alchemist",
      rating: 7.9
    },
    {
      name: "Hunter x Hunter",
      rating: 4.2
    },
    {
      name: "Fate/Zero",
      rating: 5.8
    },
    {
      name: "Irregular of the magic high school",
      rating: 8.8
    }
  ]
};

export default function App() {
  const [anime, setAnime] = useState("Action");

  function ClickEventHandler(tag) {
    setAnime(tag);
  }
  return (
    <div className="App">
      <h1> Recommendation </h1>
      <nav>
        <ul>
          {Object.keys(Animes).map((tag) => (
            <li
              key={tag}
              className="pads navigate"
              onClick={() => ClickEventHandler(tag)}
            >
              {tag}
            </li>
          ))}
        </ul>
      </nav>

      <div>
        {Animes[anime].map((item) => (
          <li key={item}>
            <div>
              {item.name} {item.rating}
            </div>
          </li>
        ))}
      </div>
    </div>
  );
}
