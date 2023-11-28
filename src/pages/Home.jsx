import React, { useEffect, useState } from "react";
import Avatar from "../assets/fotor.jpg";
import { TypeAnimation } from "react-type-animation";
import useWindowSize from "../CustomHook";
import { Link } from "react-router-dom";
import "./SCSS/Home.scss";

const Home = () => {
  const windowSize = useWindowSize();

  return (
    <main
      className={`nes-container is-dark with-title ${
        windowSize <= 768 ? "mobile" : ""
      }`}
    >
      <h1 className="title"> Bienvenueee ! </h1>

      <section className="home-section">
        <div className="home-left-side">
          <div className="mobile-top-container">
            <img src={Avatar} alt="" width="400px" />
            <TypeAnimation
              className="type-animation"
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Bonjour, je m'appelle ",
                1000,

                "Bonjour, je m'appelle Guillaume Leroy",
                1000,
                "Bonjour, je m'appelle Guillaume Leroy et je suis développeur web",
                1000,
                "Bonjour, je m'appelle Guillaume Leroy et je suis euh.. plutot : développeur web Junior",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{
                fontSize: "2em",
                display: "inline-block",
              }}
            />
          </div>
          <div className="btn-home-container">
            <Link className="home-btn" to="/Mon-Folio/about">
              <button type="button" className="nes-btn ">
                En savoir plus
              </button>
            </Link>
            <Link className="home-btn" to="/Mon-Folio/contact">
              <button type="button" className="nes-btn ">
                Me contacter{" "}
              </button>
            </Link>
          </div>

          <div className="home-social-network">
            <Link to="https://www.linkedin.com/in/guillaume-leroy-6b724b2a2/">
              <i class="nes-icon linkedin is-large"></i>
            </Link>
            <Link to="https://github.com/Leroyg-11">
              <i class="nes-icon github is-large"></i>
            </Link>
          </div>
        </div>

        <div className="home-right-side">
          <img src={Avatar} alt="" />
        </div>
      </section>
    </main>
  );
};

export default Home;
