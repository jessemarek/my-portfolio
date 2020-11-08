import React from "react";
// Components and Type Interfaces
import { Projects, ProjectsContent } from "./ProjectsContent";
import { Skills, SkillsContent } from "./SkillsContent";
import { About, AboutContent } from "./AboutContent";
import { Interests, InterestsContent } from "./InterestsContent";
import { Contact, ContactContent } from "./ContactContent";

interface Props {
  content: SectionContent;
}

export interface SectionContent {
  id: string;
  title: string;
  content: any;
}

interface ComponentList {
  [key: string]: JSX.Element;
}

export const ContentSection: React.FC<Props> = ({
  content: { id, title, content },
}) => {
  // Dictionary of React components to dynamically
  // load in based off value of content.type
  const sectionTypes: ComponentList = {
    PROJECTS: <ProjectsContent content={content} />,
    SKILLS: <SkillsContent content={content} />,
    ABOUT: <AboutContent content={content} />,
    INTERESTS: <InterestsContent content={content} />,
    CONTACT: <ContactContent content={content} />,
  };

  return (
    <section id={id}>
      <h2 className="section-title">{title}</h2>
      {sectionTypes[content.type]}
    </section>
  );
};

/*

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

*/
