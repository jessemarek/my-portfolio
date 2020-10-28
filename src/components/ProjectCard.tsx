import React from "react";
import { Project } from "../interfaces/Project";

interface Props {
  project: Project;
}

export const ProjectCard: React.FC<Props> = (props) => {
  const { name, img_src, site_url, gitHub_url, description } = props.project;

  return (
    <div className="project-card">
      <pre className="project-name">{name}</pre>
      {img_src && (
        <div className="img-container">
          <img src={img_src} alt="project thumbnail" />
        </div>
      )}
      <span className="exit-icon" role="img" aria-label="exit icon">
        X
      </span>
      <span className="info-icon" role="img" aria-label="info icon">
        💬
      </span>
      <p>{description}</p>
      <div className="link-btns">
        <a href={site_url} target="_blank" rel="noreferrer">
          Visit Site
        </a>
        <a href={gitHub_url} target="_blank" rel="noreferrer">
          GitHub Repo
        </a>
      </div>
    </div>
  );
};
