import React from "react";
import { Header, ContentSection, Footer, BackToTop } from "./components";
import {
  projectContent,
  skillsContent,
  aboutContent,
  interestsContent,
} from "./site-content";

import "./styles/index.scss";

const App: React.FC = () => {
  const contactContent = {
    id: "contact",
    title: "Contact",
    content: { type: "CONTACT" },
  };
  const sections = [
    projectContent,
    skillsContent,
    aboutContent,
    contactContent,
  ];

  return (
    <>
      <Header />
      {sections &&
        sections.map((section, index) => (
          <ContentSection key={index} content={section} />
        ))}
      <Footer />
      <BackToTop />
    </>
  );
};

export default App;
