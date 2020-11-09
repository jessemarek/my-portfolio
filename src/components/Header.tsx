import React from "react";
import { NavBar } from "./NavBar";
import { SectionContent } from "./ContentSection/ContentSection";

interface Props {
  links: SectionContent[];
}

export const Header: React.FC<Props> = ({ links }) => {
  return (
    <header id="top">
      <h1 className="header-title">Jesse Marek</h1>
      <NavBar links={links} />
    </header>
  );
};
