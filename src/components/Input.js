import React, { useEffect, useState } from "react";
import CodeEditor from "@uiw/react-textarea-code-editor";
import { styled, useStyletron } from "baseui";
import { Select } from "baseui/select";

import CommitForm from "./CommitForm";

import { getUploads, getFileContent } from "../utilities/web3storageApi";

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

const HighlightedTextArea = ({ text, setText }) => {
  const [_, theme] = useStyletron();
  const [value, setValue] = useState([{ label: "Javascript", id: "js" }]);
  const [cidValue, setCidValue] = useState([]);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    getCIDs();
  }, []);

  const getCIDs = async () => {
    const uploads = await getUploads();
    const data = uploads.data.map((upload, id) => ({
      label: upload["cid"],
      id,
    }));
    const latest = data[0];
    setOptions(data);
    setCidValue([latest]);
    getFile(latest.label);
  };

  const getFile = async (cid) => {
    const response = await getFileContent(cid);
    setText(response.data);
  };

  return (
    <HighlightedTextInput>
      <HeaderContainer>
        <Title>Code Editor</Title>
        <Select
          options={options}
          value={cidValue}
          placeholder="Select Hash"
          onChange={async (params) => {
            setCidValue(params.value);
            await getFile(params.value[0].label);
          }}
          clearable={false}
          overrides={{
            Root: {
              style: ({ $theme }) => ({
                width: "30%",
              }),
            },
          }}
        />
      </HeaderContainer>

      <CodeEditor
        value={text}
        language={value[0].id || "js"}
        placeholder="Enter Code"
        onChange={(evn) => setText(evn.target.value)}
        padding={15}
        style={{
          height: 600,
          fontSize: 12,
          backgroundColor: theme.colors.backgroundPrimary,
          fontFamily:
            "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
        }}
      />
      <HeaderContainer>
        <CommitForm text={text} />
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
    </HighlightedTextInput>
  );
};

export default HighlightedTextArea;
