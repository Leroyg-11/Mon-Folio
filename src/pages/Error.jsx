import React from "react";
import useWindowSize from "../CustomHook";
import { Link } from "react-router-dom";

const Error = () => {
  const windowSize = useWindowSize();
  return (
    <main
      className={`error nes-container is-dark with-title ${
        windowSize <= 768 ? "mobile" : ""
      }`}
    >
      <h1 className="title"> Erreur ! </h1>
      <section>
        <Link className="error-link" to="/Mon-Folio/">
          <button type="button" className="nes-btn is-error">
            Retour a la page d'accueil
          </button>
        </Link>
      </section>
    </main>
  );
};

export default Error;
