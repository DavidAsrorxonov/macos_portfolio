import { WindowControls } from "#components";
import WindowWrapper from "#hoc/windowWrapper";
import { Download } from "lucide-react";
import React from "react";

const Resume = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="resume" />
        <h2>Resume.pdf</h2>

        <a
          href="files/Resume_Front-end_Dev.pdf"
          download
          className="cursor-pointer"
          title="Download Resume"
        >
          <Download className="icon" />
        </a>
      </div>
    </>
  );
};

const ResumeWindow = WindowWrapper(Resume, "resume");

export default ResumeWindow;
