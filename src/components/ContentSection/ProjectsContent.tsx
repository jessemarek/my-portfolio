import React from "react";
import { Project, ProjectCard } from "./ProjectCard";

interface Props {
  content: Projects;
}

export interface Projects {
  type: string;
  details: Project[];
}

export const ProjectsContent: React.FC<Props> = ({ content: { details } }) => {
  return (
    <>
      {details.map((project, index) => (
        <ProjectCard key={index} details={project} />
      ))}
    </>
  );
};
