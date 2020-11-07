import React from "react";
import { Content } from "../interfaces/Content";
import { ProjectCard } from "./ProjectCard";

interface Props {
  data: Content;
}

export const ContentSection: React.FC<Props> = (props) => {
  const { id, title, description, projects, skill_list } = props.data;
  return (
    <section id={id}>
      <h2 className="section-title">{title}</h2>
      {description ? (
        <p className="section-description">{description}</p>
      ) : null}
      {projects
        ? projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))
        : null}
      {skill_list ? (
        <ul>
          {skill_list.map((skill, idx) => (
            <li key={idx}>
              <span>{skill}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
};
