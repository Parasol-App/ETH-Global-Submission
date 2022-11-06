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

// const oldCode = `
// const a = 10
// const b = 10
// const c = () => console.log('foo')
 
// if(a > 10) {
//   console.log('bar')
// }
 
// console.log('done')
// `;
// const newCode = `
// const a = 10
// const boo = 10
 
// if(a === 10) {
//   console.log('bar')
// }
// `;

const Difference = ({ oldTextCID, setOldTextCID, newText }) => {
  const [value, setValue] = useState([]);
  const [options, setOptions] = useState([]);
  const [oldText, setOldText] = useState("hello this is empty");

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

      let data = [];
      for (let i = 0; i < uploads.data.length; i++) {
        data.push({ label: uploads.data[i]["cid"], id: String(i) });
      };
      setOptions(data);
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
          onChange={(params) => {
            setValue(params.value);
            setOldTextCID(params.value);
            const generateOldText = async () =>{
              const tempText = await getFileContent(oldTextCID);
              console.log("this is what I am getting:", tempText);
              return String(tempText);
            }
            const oldTextfinal = generateOldText()
            setOldText(oldTextfinal)
            console.log("HIIIIIIIIIIII find me here:", oldTextCID, oldText)
          }
          }
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
        oldValue = {oldText}
        newValue={newText}
        splitView={false}
      />
    </DiffContainer>
  );
};

export default Difference;
