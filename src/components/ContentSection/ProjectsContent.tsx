import React from "react";
import { Project, ProjectCard } from "./ProjectCard/ProjectCard";

interface Props {
  content: Projects;
}

export interface Projects {
  type: string;
  details: Project[];
  description: string;
}

export const ProjectsContent: React.FC<Props> = ({
  content: { details, description },
}) => {
  return (
    <>
      {details.map((project, index) => (
        <ProjectCard key={index} details={project} />
      ))}
      <p className="section-description">{description}</p>
    </>
  );
};
