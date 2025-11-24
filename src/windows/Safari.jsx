import { WindowControls } from "#components";
import WindowWrapper from "#hoc/windowWrapper";
import { ChevronLeft, ChevronRight, PanelLeft } from "lucide-react";
import React from "react";

const Safari = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="safari" />
        <PanelLeft className="ml-10 icon" />

        <div className="flex items-center gap-1 ml-5">
          <ChevronLeft className="icon" />
          <ChevronRight className="icon" />
        </div>
      </div>
    </>
  );
};

const SafariWindow = WindowWrapper(Safari, "safari");

export default SafariWindow;
