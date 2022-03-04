import React from "react";
import { NavLink } from "react-router-dom";
import { BiBook, BiHome } from "react-icons/bi";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
const Navigation = () => {
  return (
    <nav className="navigation">
      <NavLink to="/" className={(nav) => (nav.isActive ? "navActive" : "")}>
        <BiHome />
        <span>Accueil</span>
      </NavLink>
      <NavLink
        to="/competenses"
        className={(nav) => (nav.isActive ? "navActive" : "")}
      >
        <BiBook />
        <span>Compétences</span>
      </NavLink>
      <NavLink
        to="/portfolio"
        className={(nav) => (nav.isActive ? "navActive" : "")}
      >
        <AiOutlineFolderOpen />
        <span>Portfolio</span>
      </NavLink>
      <NavLink
        to="/contact"
        className={(nav) => (nav.isActive ? "navActive" : "")}
      >
        <FiMail />
        <span>Contact</span>
      </NavLink>
    </nav>
  );
};

export default Navigation;
