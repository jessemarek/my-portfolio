import React from "react";
import {
  Header,
  ContentSection,
  ContactForm,
  Footer,
} from "./components/common";
import {
  aboutData,
  projectData,
  buildWeekData,
  skillsData,
  contactData,
} from "./site-content";

import "./styles/index.scss";

const App: React.FC = () => {
  const sections = [
    aboutData,
    projectData,
    buildWeekData,
    skillsData,
    contactData,
  ];

  return (
    <>
      <Header />
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
