import React from "react";
import IndexPage from "./index";

const messages = {
  tagline: {
    title: "I build",
    services: ["Websites", "Web Apps", "Beautiful UIs", "API's"]
    // button: `Let's talk `
  },
  about: {
    title: "About",
    description: (
      <div>
        <p className="lead">
          Full-Stack developer.
          {/* <a href="http://tripby.org">tripby.org</a> */}
        </p>
        <p>
          I love technology and how it drives human evolution. I'm excited to be
          part of this.
        </p>
        <p>I'm currently open to freelancing and team projects.</p>
      </div>
    ),
    tech: "Tech I like to work with"
  }
};

export default props => <IndexPage messages={messages} locale="en" />;
