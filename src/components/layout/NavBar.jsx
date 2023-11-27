import React from "react";
import "./NavBar.scss";
import { Link } from "react-router-dom";
import useWindowSize from "../../CustomHook";

const NavBar = () => {
  const windowSize = useWindowSize();

  return (
    <nav className={`nav ${windowSize <= 768 ? "mobile" : ""}`}>
      <ul>
        <li>
          <Link className="nav-link-item" to="/Guillaume-Leroy-Folio/">
            <button type="button" className="nes-btn is-warning">
              Guillaume Leroy
            </button>
          </Link>
        </li>
      </ul>
      <ul className="item-nav">
        <li>
          <Link className="nav-link-item" to="/Guillaume-Leroy-Folio/">
            <button type="button" className="nes-btn is-primary">
              Home
            </button>
          </Link>
        </li>

        <li>
          <Link className="nav-link-item" to="/Guillaume-Leroy-Folio/about">
            <button type="button" className="nes-btn is-primary">
              About
            </button>
          </Link>
        </li>
        <li>
          <Link className="nav-link-item" to="/Guillaume-Leroy-Folio/projet">
            <button type="button" className="nes-btn is-primary">
              Projets
            </button>
          </Link>
        </li>
        <li>
          <Link className="nav-link-item" to="/Guillaume-Leroy-Folio/contact">
            <button type="button" className="nes-btn is-primary">
              Contact
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
