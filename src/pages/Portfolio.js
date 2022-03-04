import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProjectList from "../components/ProjectList";

const Portfolio = () => {
  return (
    <div className="container">
      <Header />
      <main>
        <div className="portfolioContainer">
          <ProjectList />
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Portfolio;
