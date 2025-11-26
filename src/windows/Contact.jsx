import { socials } from "#constants";
import WindowWrapper from "#hoc/windowWrapper";
import React from "react";

const Contact = () => {
  return (
    <>
      <div id="window-header">
        <h2>Contact me</h2>
      </div>

      <div className="p-5 space-y-5">
        <img
          src="/images/square-image.jpg"
          alt="david"
          className="w-60 rounded-full"
        />

        <h3>Let's Connect</h3>
        <p>
          I turn caffeine into code and complex problems into elegant solutions.
          My superpower? Finding that one missing semicolon at 3 AM.
        </p>

        <ul>
          {socials.map(({ id, text, icon, bg, link }) => (
            <li key={id} style={{ backgroundColor: bg }}>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                title={text}
              >
                <img src={icon} alt={text} className="size-5" />
                <p>{text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow;
