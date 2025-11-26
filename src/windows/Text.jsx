import { WindowControls } from "#components";
import WindowWrapper from "#hoc/windowWrapper";
import useWindowStore from "#store/window";
import React from "react";

const Text = () => {
  const { windows } = useWindowStore();
  const data = windows.txtfile?.data;

  if (!data) return null;

  const { name, image, subtitle, description } = data;

  return (
    <>
      <div id="window-header">
        <WindowControls target="txtfile" />
        <h2>{name}</h2>
      </div>

      <div className="p-8 bg-white max-h-[70vh] overflow-y-auto space-y-6">
        {image && (
          <img
            src={image}
            alt={name}
            className="w-full h-48 object-cover rounded-lg"
          />
        )}

        {subtitle && (
          <h3 className="text-lg font-semibold text-gray-800">{subtitle}</h3>
        )}

        <div className="space-y-4">
          {description?.map((paragraph, index) => (
            <p key={index} className="text-gray-700 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

const TextWindow = WindowWrapper(Text, "txtfile");

export default TextWindow;
