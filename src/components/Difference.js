import React, { useState, useEffect } from "react";
import ReactDiffViewer from "react-diff-viewer";
import { styled } from "baseui";
import { Select } from "baseui/select";
import { getUploads } from "../utilities/web3storageApi";

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
  const [value, setValue] = useState([]);
  const [options, setOptions] = useState([]);

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
    const getCIDs = async () => {
      const uploads = await getUploads();
      console.log(uploads.data);
      setOptions([
        { label: uploads.data[0]["cid"], id: "0" },
        { label: uploads.data[1]["cid"], id: "1" },
        { label: uploads.data[2]["cid"], id: "2" },
      ])
    };
    getCIDs();


  }, []);

  return (
    <DiffContainer>
      <HeaderContainer>
        <Title>Diff</Title>
        <Select
          options={options}
          value={value}
          placeholder="Select Hash"
          onChange={(params) => setValue(params.value)}
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
        oldValue={oldCode}
        newValue={newCode}
        splitView={false}
      />
    </DiffContainer>
  );
};

export default Difference;
