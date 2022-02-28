import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <nav>
        <ul>
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? "navActive" : "")}
          >
            <li>Accueil</li>
          </NavLink>
          <NavLink
            to="/competenses"
            className={(nav) => (nav.isActive ? "navActive" : "")}
          >
            <li>Compétenses</li>
          </NavLink>
          <NavLink
            to="/portfolio"
            className={(nav) => (nav.isActive ? "navActive" : "")}
          >
            <li>portfolio</li>
          </NavLink>
          <NavLink
            to="/contact"
            className={(nav) => (nav.isActive ? "navActive" : "")}
          >
            <li>Contact</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
