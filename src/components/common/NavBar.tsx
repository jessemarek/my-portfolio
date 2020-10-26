import React from "react";

const NavBar: React.FC = () => {
  return (
    <nav className="site-nav">
      <ul className="nav-links">
        <li>
          <a href="/#">Home</a>
        </li>
        <li>
          <a href="/#about">About</a>
        </li>
        <li>
          <a href="/#projects">Projects</a>
        </li>
        <li>
          <a href="/#skills">Skills</a>
        </li>
        <li>
          <a href="/#interests">Interests</a>
        </li>
        <li>
          <a href="/#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
