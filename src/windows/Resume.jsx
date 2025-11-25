import { WindowControls } from "#components";
import WindowWrapper from "#hoc/windowWrapper";
import React from "react";

const Resume = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="resume" />
      </div>
    </>
  );
};

const ResumeWindow = WindowWrapper(Resume, "resume");

export default ResumeWindow;
