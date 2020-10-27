import React from "react";
import {
  NavBar,
  ContentSection,
  ContactForm,
  Footer,
} from "./components/common";
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
      <Footer />
    </>
  );
};

export default App;
