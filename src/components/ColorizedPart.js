import React from "react";
import { RED, GREEN } from "../utilities/comparison";
import { styled } from "baseui";

const Text = styled("span", ({ $theme }) => {
  console.log($theme.typography.font200);
  return {
    ...$theme.typography.font400,
  };
});

export const RemovedText = ({ text }) => {
  return (
    <Text style={{ color: RED, backgroundColor: "rgba(255,0,0,0.5)" }}>
      {text}
    </Text>
  );
};

export const AddedText = ({ text }) => {
  return (
    <Text style={{ color: GREEN, backgroundColor: "rgba(0,255,0,0.5)" }}>
      {text}
    </Text>
  );
};

export const UnchangedText = ({ text }) => {
  return <Text>{text}</Text>;
};
