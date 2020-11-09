import React from "react";

interface Props {
  details: Project;
}

export interface Project {
  id: number;
  name: string;
  img_src: string;
  site_url: string;
  gitHub_url: string;
  description: ProjectDetails;
}

interface ProjectDetails {
  tech_stack: string;
  features: string[];
}

export const ProjectCard: React.FC<Props> = ({
  details: { name, img_src, site_url, gitHub_url, description },
}) => {
  return (
    <div className="project-card">
      <h4 className="project-name">{name}</h4>
      {img_src && (
        <div className="img-container">
          <img src={img_src} alt="project thumbnail" />
        </div>
      )}
      <i className="fas fa-bars info-icon"></i>
      <i className="fas fa-times exit-icon"></i>
      <div className="description-overlay">
        <p className="tech-stack">{description.tech_stack}</p>
        <ul className="feature-list">
          {description.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
      <div className="link-btns">
        {site_url === "none" ? null : (
          <a href={site_url} target="_blank" rel="noopener noreferrer">
            Visit Site
          </a>
        )}
        <a href={gitHub_url} target="_blank" rel="noopener noreferrer">
          GitHub Repo
        </a>
      </div>
    </div>
  );
};
