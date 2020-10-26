import React from "react";
import { Content } from "../../interfaces/Content";

export const ContentSection: React.FC<Content> = ({
  id,
  title,
  description,
}) => {
  return (
    <section id={id}>
      <h2 className="section-title">{title}</h2>
      <p>{description}</p>
    </section>
  );
};
