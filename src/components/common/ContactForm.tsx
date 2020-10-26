import React from "react";

export const ContactForm: React.FC = () => {
  return (
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
  );
};
