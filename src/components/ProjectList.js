import React, { useState } from "react";
import Data from "../data/portfolioData";
import Project from "./Project";

const ProjectList = () => {
  return (
    <section className="projects">
      {Data.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </section>
  );
};

export default ProjectList;
