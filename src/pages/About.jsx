import React from "react";
import useWindowSize from "../CustomHook";

const About = () => {
  const windowSize = useWindowSize();
  return (
    <main
      className={`error nes-container is-dark with-title ${
        windowSize <= 768 ? "mobile" : ""
      }`}
    >
      About
    </main>
  );
};

export default About;
