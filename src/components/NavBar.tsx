import React from "react";
import { Link } from "react-scroll";
import { SectionContent } from "./ContentSection/ContentSection";

interface Props {
  links: SectionContent[];
}

export const NavBar: React.FC<Props> = ({ links }) => {
  return (
    <nav className="site-nav">
      <ul className="nav-links">
        {links.map((link, index) => (
          <li key={index}>
            <Link to={link.id} smooth={true} href={`#${link.id}`}>
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
