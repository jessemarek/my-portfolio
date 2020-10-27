import React from "react";
import { Project } from "../../interfaces/Project";

interface Props {
  project: Project;
}

export const ProjectCard: React.FC<Props> = (props) => {
  const { name, site_url } = props.project;

  return (
    <div>
      <pre>{name}</pre>
      <a href={site_url} target="_blank">
        Visit Site
      </a>
    </div>
  );
};
