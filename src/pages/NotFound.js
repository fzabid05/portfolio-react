import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const NotFound = () => {
  return (
    <div className="container">
      <Header />
      <main className="notFound">
        <h1>
          Erreur <span>404</span>
        </h1>
        <p>Page non trouvée </p>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
