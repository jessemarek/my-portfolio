import React from "react";

interface Props {
  content: Skills;
}

export interface Skills {
  type: string;
  details: string[];
}

export const SkillsContent: React.FC<Props> = ({ content: { details } }) => {
  return (
    <ul>
      {details.map((skill, index) => (
        <li key={index}>
          <span>{skill}</span>
        </li>
      ))}
    </ul>
  );
};
