import React from "react";
import { Project } from "../../interfaces/Project";

interface Props {
  project: Project;
}

export const ProjectCard: React.FC<Props> = (props) => {
  const { name, site_url, gitHub_url } = props.project;

  return (
    <div className="project-card">
      <pre className="project-name">{name}</pre>
      <a href={site_url} target="_blank" rel="noreferrer">
        Visit Site
      </a>
      <a href={gitHub_url} target="_blank" rel="noreferrer">
        GitHub Repo
      </a>
    </div>
  );
};
