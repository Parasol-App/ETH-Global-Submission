import React, { useEffect, useState } from "react";
import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import { BaseProvider, styled, DarkTheme } from "baseui";

import Navbar from "./components/Navbar";
import HighlightedTextArea from "./components/Input";
import Difference from "./components/Difference";

import { createFile, createIpfsObj } from "./utilities/ipfs";
import { uploadFile, getCarFileByCID, getFileContent, getUploads} from "./utilities/web3storageApi";

const engine = new Styletron();

const Column = styled("div", ({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
}));

function App() {
  const [account, setAccount] = useState();

  useEffect(() => {
    const localAccount = localStorage.getItem("ETH_ACCOUNT");
    if (localAccount) {
      setAccount(localAccount);
    }
    const textData = "This is a dummy file, IPFS sucks ass";
    const fileName = "dummy.text";
    const cid = "bafkreicgb2vxguzy2ktil6f5eubi62xtdfbutr7c6rovmquppzhl37akqu";
    const runUploads = async () => {
      const uploads = await getUploads();
      console.log(uploads.data);
    };
    runUploads();
  }, []);
  const old_text = "console.log(\"hello world\")";
  const [oldTextCID, setOldTextCID] = useState("bafkreihwlw55xvztcaow7hox6lovwgtxsguclxicylbo4nh3t544lnyr3i");
  const [newtext, setnewText] = useState('hello world');
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={DarkTheme}>
        <div className="App">
          <Navbar account={account} setAccount={setAccount} />
          <Column>
            <HighlightedTextArea text={newtext} setText={setnewText}/>
            <Difference oldTextCID={oldTextCID} setOldTextCID={setOldTextCID} newText={newtext}/>
          </Column>
        </div>
      </BaseProvider>
    </StyletronProvider>
  );
}

export default App;
