import React, { useEffect } from "react";
import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, BaseProvider, styled, DarkTheme } from "baseui";

import Navbar from "./components/Navbar";
import HighlightedTextArea from "./components/Input";
import Difference from "./components/Difference";

import { createFile, createIpfsObj } from "./utilities/ipfs";
import { uploadFile, getCarFileByCID, getFileContent} from "./utilities/web3storageApi";

const engine = new Styletron();

const Column = styled("div", ({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
}));

function App() {
  useEffect(() => {
    const textData = "This is a dummy file, IPFS sucks ass";
    const fileName = "dummy.text";
    const cid = "bafkreicgb2vxguzy2ktil6f5eubi62xtdfbutr7c6rovmquppzhl37akqu";
    const runUploads = async () => {
      const uploads = await getFileContent(cid);
      console.log(uploads.data);
    };
    runUploads();
  }, []);
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={DarkTheme}>
        <div className="App">
          <Navbar />
          <Column>
            <HighlightedTextArea />
            <Difference />
          </Column>
        </div>
      </BaseProvider>
    </StyletronProvider>
  );
}

export default App;
