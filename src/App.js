import { useEffect } from "react";
import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, BaseProvider } from "baseui";

import { calculateDiff, RED, GREEN, GRAY } from "./utilities/comparison";
import {
  AddedText,
  RemovedText,
  UnchangedText,
} from "./components/ColorizedPart";
import HighlightedTextArea from "./components/Input";

const oldText = `hello world bitch es`;
const newText = `hello world wtf bitches
 ok but is this the right approach to the problem?
`;

const engine = new Styletron();

function App() {
  const diff = calculateDiff(oldText, newText);

  useEffect(() => {}, []);

  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <div className="App">
          <HighlightedTextArea />
          <p>original</p>
          <p>{oldText}</p>

          <p>Diff</p>
          {diff.colorized.map((parts, idx) => {
            if (parts.color === GREEN) {
              return <AddedText key={idx} text={parts.value} />;
            }
            if (parts.color === RED) {
              return <RemovedText key={idx} text={parts.value} />;
            }
            if (parts.color === GRAY) {
              return <UnchangedText key={idx} text={parts.value} />;
            }

            return null;
          })}
        </div>
      </BaseProvider>
    </StyletronProvider>
  );
}

export default App;
