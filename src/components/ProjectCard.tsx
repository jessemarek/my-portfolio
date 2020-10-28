import React from "react";
import { Project } from "../interfaces/Project";

interface Props {
  project: Project;
}

export const ProjectCard: React.FC<Props> = (props) => {
  const {
    name,
    img_src,
    site_url,
    gitHub_url,
    description,
    build_week,
  } = props.project;

  return (
    <div className="project-card">
      <h4 className="project-name">{name}</h4>
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
      <div className="description-overlay">
        {build_week && (
          <p className="build-week-title">-- Build Week Project --</p>
        )}
        <p>{description}</p>
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
