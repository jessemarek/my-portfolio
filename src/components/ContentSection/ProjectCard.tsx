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
  description: string;
  build_week?: boolean;
}

export const ProjectCard: React.FC<Props> = ({
  details: { name, img_src, site_url, gitHub_url, description, build_week },
}) => {
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
