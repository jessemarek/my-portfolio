import React from "react";
import { Project } from "../../interfaces/Project";

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
          <img src={img_src} alt="project thumbnail image" />
        </div>
      )}
      <p>{description}</p>
      <a href={site_url} target="_blank" rel="noreferrer">
        Visit Site
      </a>
      <a href={gitHub_url} target="_blank" rel="noreferrer">
        GitHub Repo
      </a>
    </div>
  );
};
