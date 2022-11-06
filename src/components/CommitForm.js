import { useState } from "react";
import { uploadFile } from "../utilities/web3storageApi";

export default function CommitForm({ text }) {

    const [commitInfo, setCommitInfo] = useState({
        name: "",
        code: text,
    });
    const handleChange = (event) => {
        setCommitInfo({ ...commitInfo, [event.target.name]: event.target.value });
    };
    const runUploads = async () => {
        const uploads = await uploadFile(commitInfo.code, commitInfo.name);
    };
    const handleSubmit = (event) => {
        // prevents the submit button from refreshing the page
        event.preventDefault();
        console.log(commitInfo);
        // upload 
        runUploads()
        setCommitInfo({ name: "Commit Message" });
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} onChange={handleChange}>
                <div>
                    <input
                        type="text"
                        name="name"
                        placeholder="Commit Message"
                        value={commitInfo.name}
                    />
                </div>

                <div>
                    <button style={{ color: 'black', backgroundColor: 'red' }}>Commit</button>
                </div>
            </form>
        </div>
    );
}
