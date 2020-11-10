import React, { useRef, useEffect } from "react";
import { Header, ContentSection, Footer, BackToTop } from "./components";
import { SubTitle } from "./components/SubTitle";
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
    // interestsContent,
    contactContent,
  ];

  const mainRef = useRef<HTMLHtmlElement | null>(null);

  useEffect(() => {
    setTimeout(() => {
      mainRef.current?.classList.remove("preload");
    }, 100);
  }, []);

  return (
    <>
      <Header links={sections} />
      <SubTitle />
      {/* <main> wraps site content for a preload animation */}
      <main ref={mainRef} className="preload">
        {sections &&
          sections.map((section, index) => (
            <ContentSection key={index} content={section} />
          ))}
      </main>
      <Footer />
      <BackToTop />
    </>
  );
};

export default App;
