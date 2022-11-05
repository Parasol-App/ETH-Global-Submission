import React, { useState } from "react";
import CodeEditor from "@uiw/react-textarea-code-editor";
import { Select } from "baseui/select";

const HighlightedTextArea = () => {
  const [code, setCode] = useState(`console.log("hello world")`);
  const [value, setValue] = React.useState([{ label: "Javascript", id: "js" }]);

  return (
    <div>
      <Select
        options={[
          { label: "Javascript", id: "js" },
          { label: "React", id: "jsx" },
          { label: "HTML", id: "html" },
          { label: "CSS", id: "css" },
          { label: "Go", id: "go" },
          { label: "Json", id: "json" },
          { label: "Python", id: "py" },
          { label: "Markdown", id: "md" },
        ]}
        value={value}
        placeholder="Select Language"
        onChange={(params) => setValue(params.value)}
        clearable={false}
      />

      <CodeEditor
        value={code}
        language={value[0].id || "js"}
        placeholder="Enter Code"
        onChange={(evn) => setCode(evn.target.value)}
        padding={15}
        style={{
          fontSize: 12,
          backgroundColor: "#f5f5f5",
          fontFamily:
            "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
        }}
      />
    </div>
  );
};

export default HighlightedTextArea;
