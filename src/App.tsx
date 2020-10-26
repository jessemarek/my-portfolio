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
        <div>
          <img src="/img.png" alt="" />
          <img src="/img.png" alt="" />
        </div>
        <NavBar />
      </header>
      <ContentSection data={aboutData} />
      <ContentSection data={projectData} />
      <ContentSection data={skillsData} />
      <ContentSection data={interestsData} />
      <ContentSection data={contactData} />

      <ContactForm />
    </>
  );
};

export default App;
