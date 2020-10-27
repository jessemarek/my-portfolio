import React, { useState } from "react";

export const ContactForm: React.FC = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: any): void => {
    const { name, value } = e.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return (
    <form className="contact-form">
      <label>
        Name
        <input
          name="name"
          type="text"
          onChange={(e) => handleChange(e)}
          value={formValues.name}
        />
      </label>
      <label>
        Email
        <input
          name="email"
          type="text"
          onChange={(e) => handleChange(e)}
          value={formValues.email}
        />
      </label>
      <label>
        Phone Number
        <input
          name="phone"
          type="text"
          onChange={(e) => handleChange(e)}
          value={formValues.phone}
        />
      </label>
      <label>
        Message
        <textarea
          name="message"
          onChange={(e) => handleChange(e)}
          value={formValues.message}
        />
      </label>
      <button>Submit</button>
    </form>
  );
};
