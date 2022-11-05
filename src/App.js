import "./App.css";

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

function App() {
  const diff = calculateDiff(oldText, newText);

  return (
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
  );
}

export default App;
