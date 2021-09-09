import "./styles.css";
import React, { useState } from "react";

// Database of animes
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
      Img: "https://cdn.myanimelist.net/images/anime/3/33257.jpg",
      desc:
        "Roaming the halls of the all-boys Sanada North High School are three close comrades: the eccentric ringleader with a hyperactive imagination Hidenori, the passionate Yoshitake, and the rational and prudent Tadakuni."
    },
    {
      name: "One punch man",
      rating: 8.72,
      Img: "https://cdn.myanimelist.net/images/anime/12/76049.jpg",
      desc:
        "The seemingly ordinary and unimpressive Saitama has a rather unique hobby: being a hero. In order to pursue his childhood dream, he trained relentlessly for three years—and lost all of his hair in the process. Now, Saitama is incredibly powerful, so much so that no enemy is able to defeat him in battle."
    }
  ],
  Fantasy: [
    {
      name: "FullMetal Alchemist",
      rating: 9.16,
      Img: "https://cdn.myanimelist.net/images/anime/10/75815.jpg",
      desc:
        "Edward Elric, a young, brilliant alchemist, has lost much in his twelve-year life: when he and his brother Alphonse try to resurrect their dead mother through the forbidden act of human transmutation, Edward loses his brother as well as two of his limbs. With his supreme alchemy skills, Edward binds Alphonse's soul to a large suit of armor."
    },
    {
      name: "Hunter x Hunter",
      rating: 9.06,
      Img: "https://cdn.myanimelist.net/images/anime/11/33657.jpg",
      desc:
        "Hunter x Hunter is set in a world where Hunters exist to perform all manner of dangerous tasks like capturing criminals and bravely searching for lost treasures in uncharted territories. Twelve-year-old Gon Freecss is determined to become the best Hunter possible in hopes of finding his father, who was a Hunter himself and had long ago abandoned his young son. However, Gon soon realizes the path to achieving his goals is far more challenging than he could have ever imagined."
    },
    {
      name: "JoJO's Bizarre Adventure",
      rating: 8.5,
      Img: "https://cdn.myanimelist.net/images/anime/3/40409.jpg",
      desc:
        "Adapted from the first two arcs of Hirohiko Araki's outlandish manga series, JoJo's Bizarre Adventure follows the many thrilling expeditions of JoJo and his descendants. Whether it's facing off with the evil Dio, or combatting the sinister Pillar Men, there's always plenty of bizarre adventures in store."
    },
    {
      name: "Assassination Classroom",
      rating: 8.52,
      Img: "https://cdn.myanimelist.net/images/anime/5/75639.jpg",
      desc:
        "When a mysterious creature chops the moon down to a permanent crescent, the students of class 3-E of Kunugigaoka Middle School find themselves confronted with an enormous task: assassinate the creature responsible for the disaster before Earth suffers a similar fate. However, the monster, dubbed Koro-sensei (the indestructible teacher), is able to fly at speeds of up to Mach 20, which he demonstrates freely, leaving any attempt to subdue him in his extraterrestrial dust. Furthermore, the misfits of 3-E soon find that the strange, tentacled beast is more than just indomitable—he is the best teacher they have ever had!"
    }
  ]
};

export default function App() {
  const [anime, setAnime] = useState("Action");

  //function to change databse object according to
  // category selected
  function ClickEventHandler(tag) {
    setAnime(tag);
  }
  return (
    <div className="App">
      <nav>
        {/* Navigation bar  */}
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
          // assigning local variable for simplification
          var title = item.name;
          var rating = item.rating;
          var desc = item.desc;
          var img = item.Img;
          return (
            <li key={item}>
              {/* this div signifies a single recommendation pf the item */}
              <div className="container BorderMe ">
                <span className="listItems BorderMe">
                  Name:{title}
                  <br />
                  MAL rating: {rating}
                </span>
                <div>
                  <img src={img} alt={title} className="animg" />
                  <p className="Synopsis"> {desc}</p>
                </div>
              </div>
            </li>
          );
        })}
      </div>
    </div>
  );
}
// The end
