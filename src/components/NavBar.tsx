import React from "react";
import { Link } from "react-scroll";

export const NavBar: React.FC = () => {
  return (
    <nav className="site-nav">
      <ul className="nav-links">
        <li>
          <Link to="projects" smooth={true} href="#projects">
            Projects
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} href="#skills">
            Skills
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} href="#about">
            About
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} href="#contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};
