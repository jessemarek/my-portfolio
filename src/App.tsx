import React from "react";
import { NavBar } from "./components/common/NavBar";
import { ContentSection } from "./components/common/ContentSection";
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
        <NavBar />
      </header>
      <ContentSection data={aboutData} />
      <ContentSection data={projectData} />
      <ContentSection data={skillsData} />
      <ContentSection data={interestsData} />
      <ContentSection data={contactData} />

      <form className="contact-form">
        <label>
          Name
          <input />
        </label>
        <label>
          Email
          <input />
        </label>
        <label>
          Phone Number
          <input />
        </label>
        <label>
          Message
          <textarea />
        </label>
        <button>Submit</button>
      </form>
    </>
  );
};

export default App;
