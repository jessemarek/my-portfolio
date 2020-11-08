import React from "react";
import { NavBar } from "./NavBar";

export const Header: React.FC = () => {
  return (
    <header id="top">
      <h1 className="header-title">Jesse Marek</h1>
      <NavBar />
    </header>
  );
};
