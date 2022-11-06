import React from "react";
import ReactDiffViewer from "react-diff-viewer";
import { styled } from "baseui";

const DiffContainer = styled("div", ({ $theme }) => ({
  width: "50%",
  padding: $theme.sizing.scale100,
}));

const Title = styled("div", ({ $theme }) => ({
  ...$theme.typography.DisplaySmall,
}));

const oldCode = `
const a = 10
const b = 10
const c = () => console.log('foo')
 
if(a > 10) {
  console.log('bar')
}
 
console.log('done')
`;
const newCode = `
const a = 10
const boo = 10
 
if(a === 10) {
  console.log('bar')
}
`;

const Difference = ({ oldText, newText }) => {
  return (
    <DiffContainer>
      <Title>Diff</Title>
      <ReactDiffViewer
        oldValue={oldCode}
        newValue={newCode}
        splitView={false}
      />
    </DiffContainer>
  );
};

export default Difference;
