import React from "react";
import { NavLink } from "react-router-dom";
import { BiBook, BiHome } from "react-icons/bi";
import { AiOutlineMinus, AiOutlineFolderOpen } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
const Navigation = () => {
  return (
    // <nav className="navigation">
    //   <NavLink to="/" className={(nav) => (nav.isActive ? "navActive" : "")}>
    //     <BiHome />
    //     <span>Accueil</span>
    //   </NavLink>
    //   <NavLink
    //     to="/competenses"
    //     className={(nav) => (nav.isActive ? "navActive" : "")}
    //   >
    //     <BiBook />
    //     <span>Compétences</span>
    //   </NavLink>
    //   <NavLink
    //     to="/portfolio"
    //     className={(nav) => (nav.isActive ? "navActive" : "")}
    //   >
    //     <AiOutlineFolderOpen />
    //     <span>Portfolio</span>
    //   </NavLink>
    //   <NavLink
    //     to="/contact"
    //     className={(nav) => (nav.isActive ? "navActive" : "")}
    //   >
    //     <FiMail />
    //     <span>Contact</span>
    //   </NavLink>
    // </nav>
    <nav className="navigation">
      <NavLink to="/" className={(nav) => (nav.isActive ? "navActive" : "")}>
        <span>Accueil</span>
        <AiOutlineMinus />
      </NavLink>
      <NavLink
        to="/competenses"
        className={(nav) => (nav.isActive ? "navActive" : "")}
      >
        <span>Compétences</span>
        <AiOutlineMinus />
      </NavLink>
      <NavLink
        to="/portfolio"
        className={(nav) => (nav.isActive ? "navActive" : "")}
      >
        <span>Portfolio</span>
        <AiOutlineMinus />
      </NavLink>
      <NavLink
        to="/contact"
        className={(nav) => (nav.isActive ? "navActive" : "")}
      >
        <span>Contact</span>
        <AiOutlineMinus />
      </NavLink>
    </nav>
  );
};

export default Navigation;
