import React from "react";

export const ContactSection: React.FC = () => {
  return (
    <section id="contact">
      <h2 className="section-title">Contact</h2>
      <ul>
        <li>
          <a
            href="https://github.com/jessemarek"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i> GitHub
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/jesse-a-marek"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
        </li>
        <li>
          <a href="mailto:jesse.a.marek@gmail.com?subject=Portfolio Contact">
            <i className="far fa-envelope"></i> jesse.a.marek@gmail
          </a>
        </li>
        <li>
          <a href="tel:9514905484">
            <i className="fas fa-mobile-alt"></i> (951) 490-5484
          </a>
        </li>
      </ul>
      {/* <ContactForm /> */}
    </section>
  );
};
