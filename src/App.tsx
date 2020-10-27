import React from "react";
import { NavBar, ContentSection, ContactForm } from "./components/common";
import {
  aboutData,
  projectData,
  skillsData,
  interestsData,
  contactData,
} from "./site-content";

const App: React.FC = () => {
  const sections = [
    aboutData,
    projectData,
    skillsData,
    interestsData,
    contactData,
  ];

  return (
    <>
      <header>
        <h1>Jesse Marek</h1>
        <NavBar />
      </header>

      {sections &&
        sections.map((section, idx) => (
          <ContentSection key={idx} data={section} />
        ))}

      <ContactForm />

      <footer>© 2020 Jesse Marek -- All Rights Reserved</footer>
    </>
  );
};

export default App;
