import React from "react";
import { Content } from "../../interfaces/Content";

interface Props {
  data: Content;
}

export const ContentSection: React.FC<Props> = (props) => {
  const { id, title, description } = props.data;
  return (
    <section id={id}>
      <h2 className="section-title">{title}</h2>
      <p>{description}</p>
    </section>
  );
};
