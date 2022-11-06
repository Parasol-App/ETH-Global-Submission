import { useState } from "react";
import { Textarea } from "baseui/textarea";
import { Button } from "baseui/button";

import { uploadFile } from "../utilities/web3storageApi";

export default function CommitForm({ text }) {
  const [commitName, setCommitName] = useState("");

  const handleChange = (event) => {
    setCommitName(event.target.value);
  };

  const runUploads = async () => {
    await uploadFile(text, commitName);
  };

  const handleSubmit = (event) => {
    // prevents the submit button from refreshing the page
    event.preventDefault();
    // upload
    runUploads();
    setCommitName("");
  };

  return (
    <div>
      <Textarea
        style={{ width: "50%" }}
        placeholder={"Type your commit here!"}
        value={commitName}
        onChange={handleChange}
        resize="both"
        clearOnEscape
      />
      <Button onClick={handleSubmit}>Commit</Button>
    </div>
  );
}
