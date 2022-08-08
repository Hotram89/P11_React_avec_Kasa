import React from "react";
import companyLogoBlanc from "../../../assets/LOGO.png";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

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
          {/* <NavLink
            to="/rent/c67ab8a7"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li className="menuItem">Rent c67ab8a7</li>
          </NavLink> */}
          {/* <NavLink
            to="/rent/nofound"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li className="menuItem">Rent nofound</li>
          </NavLink> */}
        </ul>
      </header>
    </div>
  );
};

export default Navigation;
