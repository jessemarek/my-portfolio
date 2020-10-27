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
  return (
    <>
      <header>
        <h1>Jesse Marek</h1>
        <NavBar />
      </header>
      <ContentSection key={1} data={aboutData} />
      <ContentSection key={2} data={projectData} />
      <ContentSection key={3} data={skillsData} />
      <ContentSection key={4} data={interestsData} />
      <ContentSection key={5} data={contactData} />

      <ContactForm />
    </>
  );
};

export default App;
