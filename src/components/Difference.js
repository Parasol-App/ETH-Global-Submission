import React from "react";
import { calculateDiff, RED, GREEN, GRAY } from "../utilities/comparison";
import { AddedText, RemovedText, UnchangedText } from "./ColorizedPart";
import { styled } from "baseui";

const DiffContainer = styled("div", ({ $theme }) => ({
  width: "50%",
  padding: $theme.sizing.scale100,
}));

const oldText = `hello world bitch es`;
const newText = `hello world wtf bitches
 ok but is this the right approach to the problem?
`;

const Difference = ({ text }) => {
  const diff = calculateDiff(oldText, newText);
  return (
    <DiffContainer>
      {diff.colorized.map((parts, idx) => {
        if (parts.color === GREEN) {
          return <AddedText key={idx} text={parts.value} />;
        }
        if (parts.color === RED) {
          return <RemovedText key={idx} text={parts.value} />;
        }
        if (parts.color === GRAY) {
          return <UnchangedText key={idx} text={parts.value} />;
        }

        return null;
      })}
    </DiffContainer>
  );
};

export default Difference;
