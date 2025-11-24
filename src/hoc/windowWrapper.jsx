import useWindowStore from "#store/window";
import React from "react";

const WindowWrapper = (Component, windowKey) => {
  const Wrapped = (props) => {
    const { focusWindow, windows } = useWindowStore();
  };
  return <div>windowWrapper</div>;
};

export default WindowWrapper;
