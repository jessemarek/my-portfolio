import React from "react";

interface Props {
  content: About;
}

export interface About {
  type: string;
  details: string;
}

export const AboutContent: React.FC<Props> = ({ content: { details } }) => {
  return <p>{details}</p>;
};
