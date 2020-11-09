import React from "react";

interface Props {
  content: Interests;
}

export interface Interests {
  type: string;
  details: string;
}

export const InterestsContent: React.FC<Props> = ({ content: { details } }) => {
  return <h3>{details}</h3>;
};
