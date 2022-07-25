import React from "react";
import companyLogoBlanc from "../assets/LOGO.png";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <header className="flatHeader">
        <img src={companyLogoBlanc} alt="logo Kasa" />
        <ul className="menu">
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li className="menuItem">Accueil</li>
          </NavLink>
          <NavLink
            to="/about"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li className="menuItem">A propos</li>
          </NavLink>
        </ul>
      </header>
    </div>
  );
};

export default Navigation;
