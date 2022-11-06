import React, { useState } from "react";
import CodeEditor from "@uiw/react-textarea-code-editor";
import { styled, useStyletron } from "baseui";
import { Select } from "baseui/select";

const HighlightedTextInput = styled("div", ({ $theme }) => ({
  width: "50%",
  padding: $theme.sizing.scale100,
}));

const Title = styled("div", ({ $theme }) => ({
  ...$theme.typography.DisplaySmall,
}));

const HeaderContainer = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
});

const HighlightedTextArea = () => {
  const [_, theme] = useStyletron();
  const [code, setCode] = useState(`console.log("hello world")`);
  const [value, setValue] = useState([{ label: "Javascript", id: "js" }]);

  return (
    <HighlightedTextInput>
      <HeaderContainer>
        <Title>Code Editor</Title>
        <Select
          options={[
            { label: "Javascript", id: "js" },
            { label: "React", id: "jsx" },
            { label: "HTML", id: "html" },
            { label: "CSS", id: "css" },
            { label: "Go", id: "go" },
            { label: "Json", id: "json" },
            { label: "Python", id: "py" },
            { label: "Markdown", id: "md" },
          ]}
          value={value}
          placeholder="Select Language"
          onChange={(params) => setValue(params.value)}
          clearable={false}
          overrides={{
            Root: {
              style: ({ $theme }) => ({
                width: "20%",
              }),
            },
          }}
        />
      </HeaderContainer>

      <CodeEditor
        value={code}
        language={value[0].id || "js"}
        placeholder="Enter Code"
        onChange={(evn) => setCode(evn.target.value)}
        padding={15}
        style={{
          height: 600,
          fontSize: 12,
          backgroundColor: theme.colors.backgroundPrimary,
          fontFamily:
            "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
        }}
      />
    </HighlightedTextInput>
  );
};

export default HighlightedTextArea;
