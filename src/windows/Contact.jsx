import { WindowControls } from "#components";
import { socials, contactInfo, stats } from "#constants";
import WindowWrapper from "#hoc/windowWrapper";
import React from "react";

const Contact = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="contact" />
        <h2>Contact</h2>
      </div>

      <div className="p-8 space-y-8">
        <div className="flex flex-col items-center space-y-3">
          <img
            src="/images/square-image.jpg"
            alt={contactInfo.name}
            className="w-32 h-32 rounded-full object-cover"
          />
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-800">
              {contactInfo.name}
            </h3>
            <p className="text-sm text-gray-600">{contactInfo.title}</p>
            <p className="text-xs text-gray-500 mt-1">
              {contactInfo.location} • {contactInfo.timezone}
            </p>
          </div>
        </div>

        <p className="text-center text-sm text-gray-700 leading-relaxed">
          {contactInfo.bio}
        </p>

        <div className="grid grid-cols-2 gap-3">
          {stats.map(({ label, value }) => (
            <div key={label} className="text-center p-3 bg-gray-50 rounded-lg">
              <p className="text-lg font-bold text-gray-800">{value}</p>
              <p className="text-xs text-gray-600">{label}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-lg text-sm">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          {contactInfo.availability}
        </div>

        <div className="space-y-2">
          <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
            Connect
          </h4>
          <ul>
            {socials.map(({ id, text, icon, bg, link }) => (
              <li key={id} className={`${bg}`}>
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
      </div>
    </>
  );
};

const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow;
