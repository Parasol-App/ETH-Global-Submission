import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, BaseProvider } from "baseui";

import { calculateDiff, RED, GREEN, GRAY } from "./utilities/comparison";
import {
  AddedText,
  RemovedText,
  UnchangedText,
} from "./components/ColorizedPart";

const oldText = `hello world bitch es`;
const newText = `hello world wtf bitches
 ok but is this the right approach to the problem?
`;

const engine = new Styletron();

function App() {
  const diff = calculateDiff(oldText, newText);

  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <div className="App">
          <p>original</p>
          <p>{oldText}</p>

          <p>Diff</p>
          {diff.colorized.map((parts) => {
            if (parts.color === GREEN) {
              return <AddedText text={parts.value} />;
            }
            if (parts.color === RED) {
              return <RemovedText text={parts.value} />;
            }
            if (parts.color === GRAY) {
              return <UnchangedText text={parts.value} />;
            }

            return null;
          })}
        </div>
      </BaseProvider>
    </StyletronProvider>
  );
}

export default App;
