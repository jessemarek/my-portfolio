import React, { useRef, useEffect } from "react";
import { NavBar } from "./NavBar";
import { SectionContent } from "./ContentSection/ContentSection";

interface Props {
  links: SectionContent[];
}

export const Header: React.FC<Props> = ({ links }) => {
  const h1Ref = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    h1Ref.current && h1Ref.current.classList.remove("preload");
  }, []);

  return (
    <header id="top">
      <h1 ref={h1Ref} className="header-title preload">
        Jesse Marek
      </h1>
      <NavBar links={links} />
    </header>
  );
};
