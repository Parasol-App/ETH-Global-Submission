import React from "react";
import { RED, GREEN } from "../utilities/comparison";

export const RemovedText = ({ text }) => {
  return (
    <span style={{ color: RED, backgroundColor: "rgba(255,0,0,0.5)" }}>
      {text}
    </span>
  );
};

export const AddedText = ({ text }) => {
  return (
    <span style={{ color: GREEN, backgroundColor: "rgba(0,255,0,0.5)" }}>
      {text}
    </span>
  );
};

export const UnchangedText = ({ text }) => {
  return <span>{text}</span>;
};
