import React, { useEffect, useState } from "react";
import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import { BaseProvider, styled, DarkTheme } from "baseui";

import Navbar from "./components/Navbar";
import HighlightedTextArea from "./components/Input";
import Difference from "./components/Difference";


const engine = new Styletron();

const Column = styled("div", ({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
}));

function App() {
  const [account, setAccount] = useState();
  const [text, setText] = useState("");

  useEffect(() => {
    const localAccount = localStorage.getItem("ETH_ACCOUNT");
    if (localAccount) {
      setAccount(localAccount);
    }
  }, []);

  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={DarkTheme}>
        <div className="App">
          <Navbar account={account} setAccount={setAccount} />
          <Column>
            <HighlightedTextArea text={text} setText={setText} />
            <Difference newText={text} />
          </Column>
        </div>
      </BaseProvider>
    </StyletronProvider>
  );
}

export default App;
