import "./styles.css";
import React, { useState } from "react";

const Animes = {
  Action: [
    {
      name: "Tokyo Ghoul",
      rating: 7.08
    },
    {
      name: "Akame Ga Kill",
      rating: 8.5
    },
    {
      name: "Fate/Zero",
      rating: 8.34
    },
    {
      name: "Parasyte Maxim",
      rating: 8.37
    }
  ],
  Comedy: [
    {
      name: "Gintama",
      rating: 8.95
    },
    {
      name: "Grand blue",
      rating: 8.42
    },
    {
      name: "Daily lives of high school boys",
      rating: 8.26
    },
    {
      name: "One punch man",
      rating: 8.72
    }
  ],
  Fantasy: [
    {
      name: "FullMetal Alchemist",
      rating: 9.16
    },
    {
      name: "Hunter x Hunter",
      rating: 9.06
    },
    {
      name: "JoJO's Bizarre Adventure",
      rating: 8.5
    },
    {
      name: "Assassination Classroom",
      rating: 8.52
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
      <nav>
        <h1 className="Heading"> Anime Recommendations! </h1>

        {Object.keys(Animes).map((tag) => (
          <button
            class="ListButton"
            key={tag}
            className="pads navigate"
            onClick={() => ClickEventHandler(tag)}
          >
            {tag}
          </button>
        ))}
      </nav>

      <div>
        {Animes[anime].map((item) => (
          <li key={item}>
            <div className="container">
              <span className="listItems BorderMe">
                Name:{item.name}
                <br />
                MAL rating: {item.rating}
              </span>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
}
