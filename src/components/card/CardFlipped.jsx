import React, { useEffect, useState } from "react";
import {
  FlippingCard,
  FlippingCardBack,
  FlippingCardFront,
} from "react-ui-cards";
import "./CardFlipped.scss";
import CradPopUp from "./CradPopUp";

const CardFlipped = (repos) => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const logoUrl = repos.logoUrl;

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <article className={`  ${windowSize <= 768 ? "mobile" : ""}`}>
      <FlippingCard>
        <FlippingCardFront>
          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundSize: "contain",
              backgroundPosition: "center",
            }}
          >
            <div className="front-content">
              <img className="logo" src={logoUrl} alt="" width="80%" />
              <p className="description ">{repos.description}</p>
              <ul className="skills  is-circle">
                {repos.topics.map((topic, index) => {
                  return (
                    <li key={index} className="skill">
                      {topic.charAt(0).toUpperCase() + topic.slice(1)}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </FlippingCardFront>
        <FlippingCardBack>
          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundSize: "contain",
              backgroundPosition: "center",
            }}
          >
            <div className="back-content">
              <p className="title">{repos.name}</p>
              <div className="btn-container-back">
                <a className="nes-btn is-warning" href={repos.html_url}>
                  Lien GitHub
                </a>

                <CradPopUp props={repos} />
              </div>
            </div>
          </div>
        </FlippingCardBack>
      </FlippingCard>
    </article>
  );
};

export default CardFlipped;
