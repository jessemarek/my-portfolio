import React from "react";
import { NavBar } from "./NavBar";

export const Header: React.FC = () => {
  return (
    <header>
      <h1 className="header-title">Jesse Marek</h1>
      <h3 className="header-subtitle">
        <span role="img" aria-label="laptop emoji">
          💻
        </span>{" "}
        Let's Code Something Cool Together!{" "}
        <span role="img" aria-label="rocket emoji">
          🚀
        </span>
      </h3>
      <NavBar />
    </header>
  );
};
