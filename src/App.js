import "./styles.css";
import React, { useState } from "react";

const Animes = {
  Action: [
    {
      name: "Tokyo Ghoul",
      rating: 7.08,
      Img: "https://cdn.myanimelist.net/images/anime/5/64449.jpg",
      desc:
        "Based on the best-selling supernatural horror manga by Sui Ishida, Tokyo Ghoul follows Ken Kaneki, a shy, bookish college student, who is instantly drawn to Rize Kamishiro, an avid reader like himself. However, Rize is not exactly who she seems, and this unfortunate meeting pushes Kaneki into the dark depths of the ghouls' inhuman world."
    },
    {
      name: "Akame Ga Kill",
      rating: 8.5,
      Img: "https://cdn.myanimelist.net/images/anime/1429/95946.jpg",
      desc:
        "kame ga Kill! follows Tatsumi as he fights the Empire and comes face-to-face with powerful weapons, enemy assassins, challenges to his own morals and values, and ultimately, what it truly means to be an assassin with a cause."
    },
    {
      name: "Fate/Zero",
      rating: 8.34,
      Img: "https://cdn.myanimelist.net/images/anime/2/73249.jpg",
      desc:
        "With the promise of granting any wish, the omnipotent Holy Grail triggered three wars in the past, each too cruel and fierce to leave a victor.Based on the light novel written by Gen Urobuchi, Fate/Zero depicts the events of the Fourth Holy Grail War. Witness a battle royale in which no one is guaranteed to survive."
    },
    {
      name: "Parasyte -The Maxim-",
      rating: 8.37,
      Img: "https://cdn.myanimelist.net/images/anime/3/73178.jpg",
      desc:
        "All of a sudden, they arrived: parasitic aliens that descended upon Earth and quickly infiltrated humanity by burrowing into the brains of vulnerable targets. These insatiable beings acquire full control of their host and are able to morph into a variety of forms in order to feed on unsuspecting prey."
    }
  ],
  Comedy: [
    {
      name: "Gintama",
      rating: 8.95,
      Img: "https://cdn.myanimelist.net/images/anime/10/73274.jpg",
      desc:
        "The Amanto, aliens from outer space, have invaded Earth and taken over feudal Japan. As a result, a prohibition on swords has been established, and the samurai of Japan are treated with disregard as a consequence.However one man, Gintoki Sakata, still possesses the heart of the samurai, although from his love of sweets and work as a yorozuya, one might not expect it. Accompanying him in his jack-of-all-trades line of work are Shinpachi Shimura, a boy with glasses and a strong heart, Kagura with her umbrella and seemingly bottomless stomach, as well as Sadaharu, their oversized pet dog. Of course, these odd jobs are not always simple, as they frequently have run-ins with the police, ragtag rebels, and assassins, oftentimes leading to humorous but unfortunate consequences. Who said life as an errand boy was easy?"
    },
    {
      name: "Grand blue",
      rating: 8.42,
      Img: "https://cdn.myanimelist.net/images/anime/1302/94882.jpg",
      desc:
        "Based on Kenji Inoue and Kimitake Yoshioka's popular comedy manga, Grand Blue follows Iori's misadventures with his eccentric new friends as he strives to realize his ideal college dream, while also learning how to scuba dive."
    },
    {
      name: "Daily lives of high school boys",
      rating: 8.26,
      Img: "",
      desc: ""
    },
    {
      name: "One punch man",
      rating: 8.72,
      Img: "",
      desc: ""
    }
  ],
  Fantasy: [
    {
      name: "FullMetal Alchemist",
      rating: 9.16,
      Img: "",
      desc: ""
    },
    {
      name: "Hunter x Hunter",
      rating: 9.06,
      Img: "",
      desc: ""
    },
    {
      name: "JoJO's Bizarre Adventure",
      rating: 8.5,
      Img: "",
      desc: ""
    },
    {
      name: "Assassination Classroom",
      rating: 8.52,
      Img: "",
      desc: ""
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
            className="ListButton pads"
            key={tag}
            onClick={() => ClickEventHandler(tag)}
          >
            {tag}
          </button>
        ))}
      </nav>

      <div>
        {Object.values(Animes[anime]).map((item) => {
          var title = item.name;
          var rating = item.rating;
          var desc = item.desc;
          var img = item.Img;
          return (
            <li key={item}>
              <div className="container">
                <span className="listItems BorderMe">
                  Name:{title}
                  <br />
                  MAL rating: {rating}
                </span>
                <div>
                  <img src={img} alt={title} className="book-img" />
                  <p className="BorderMe Synopsis"> {desc}</p>
                </div>
              </div>
            </li>
          );
        })}
      </div>
    </div>
  );
}
