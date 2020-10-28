import React from "react";
import { Header, ContentSection, ContactForm, Footer } from "./components";
import { aboutData, projectData, skillsData } from "./site-content";

import "./styles/index.scss";

const App: React.FC = () => {
  const sections = [projectData, skillsData, aboutData];

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
