import React, { useState, useEffect } from "react";
import ReactDiffViewer from "react-diff-viewer";
import { styled } from "baseui";
import { Select } from "baseui/select";
import { getUploads, getFileContent } from "../utilities/web3storageApi";

const DiffContainer = styled("div", ({ $theme }) => ({
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

const Difference = ({ newText }) => {
  const [value, setValue] = useState([]);
  const [options, setOptions] = useState([]);
  const [renderedText, setRenderedText] = useState("");

  useEffect(() => {
    /**
     * fetch CIDs from the API, then input it with formats
     *  {
     *     label: <String>,
     *     id: <String>
     *  }
     *
     *  fetch -> setOptions(<Options>)
     */
    getCIDs();
  }, []);

  const getCIDs = async () => {
    const uploads = await getUploads();
    const data = uploads.data.map((upload, id) => ({
      label: upload["cid"],
      id,
    }));
    setOptions(data);
  };

  const getFile = async (cid) => {
    const response = await getFileContent(cid);
    setRenderedText(response.data);
  };

  return (
    <DiffContainer>
      <HeaderContainer>
        <Title>Diff</Title>
        <Select
          options={options}
          value={value}
          placeholder="Select Hash"
          onChange={async (params) => {
            setValue(params.value);
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
      <ReactDiffViewer
        oldValue={renderedText}
        newValue={newText}
        splitView={false}
      />
    </DiffContainer>
  );
};

export default Difference;
