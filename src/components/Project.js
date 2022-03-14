import React from "react";

const Project = ({ project }) => {
  return (
    <article className="project">
      <div className="projectImage">
        <img src={project.picture} alt="" />
      </div>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <div className="projectUrl">
        {project.urlGithub ? (
          <a className="btn" hrf={project.urlGithub}>
            Github
          </a>
        ) : (
          ""
        )}
        {project.urlSite ? (
          <a className="btn" hrf={project.urlSite}>
            Site Web
          </a>
        ) : (
          ""
        )}
      </div>
    </article>
  );
};

export default Project;
