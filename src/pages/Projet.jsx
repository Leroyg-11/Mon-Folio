import React, { useEffect, useState } from "react";
import useWindowSize from "../CustomHook";
import CardFlipped from "../components/card/CardFlipped";
import CarouselFlipp from "../components/card/CarouselFlipp";
import "./SCSS/Projet.scss";
import axios from "axios";

const Projet = () => {
  const windowSize = useWindowSize();

  const [repos, setRepos] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.github.com/users/Leroyg-11/repos")
      .then((res) => {
        setRepos(res.data);
      })
      .catch((error) => console.error(error));
  }, []);

  const reposWithOneStar = repos.filter((repo) => repo.stargazers_count === 1);

  return (
    <main
      className={` nes-container is-dark with-title ${
        windowSize <= 768 ? "mobile" : ""
      }`}
    >
      <h1 className="title">Mes réalisations</h1>

      <section className="carousel-flipp">
        <h2>Projets réalisés durant la formation </h2>
        <div>
          <CarouselFlipp />
        </div>
      </section>

      <section className="projet-container">
        {reposWithOneStar.map((repo) => {
          const logoUrl = `https://raw.githubusercontent.com/Leroyg-11/${repo.name}/main/Logo.png`;

          return (
            <CardFlipped
              key={repo.id}
              name={repo.name}
              description={repo.description}
              html_url={repo.html_url}
              topics={repo.topics}
              logoUrl={logoUrl}
            />
          );
        })}
      </section>
    </main>
  );
};

export default Projet;
