import React from "react";
import Contact from "../contact";

const messages = {
  title: "Contact",
  form: {
    name: {
      label: "Name"
    },
    company: {
      label: "Company"
    },
    email: {
      label: "Email"
    },
    phone: {
      label: "Telephone"
    },
    description: {
      label: "Description"
    },
    submit: {
      label: "Submit",
      loading: "Sending...",
      sent: "Message sent! We will return to you soon."
    },
    errors: {
      invalidMail: "Please use a valid email address"
    }
  }
};

export default props => <Contact messages={messages} />;
