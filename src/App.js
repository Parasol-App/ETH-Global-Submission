import React, { useEffect } from "react";
import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, BaseProvider, styled } from "baseui";

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
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
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
