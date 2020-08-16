import React, { useState } from 'react'
import ProgressBar from './ProgressBar';

function UploadForm() {

    const [selectedFile, setSelectedFile] = useState(null);
    const [error, setError] = useState(null);

    const fileSupportedTypes = ['image/png', 'image/jpeg'];

    const fileUploadHandler = (eventObj) => {
        eventObj.persist();
        let selected = eventObj.target.files[0];
        if (selected && fileSupportedTypes.includes(selected.type)) {
            setSelectedFile(eventObj.target.files[0]);
            setError('');
        } else {
            setSelectedFile(null);
            setError('File format not supported. Try using png or jpeg');
        }
    };

    return (
        <form style={{textAlign: "center"}}>
            <label htmlFor="upload">
                <span className="upload-plus">+</span>
                <input type="file" id="upload" style={{display: "none"}} onChange={(event) => fileUploadHandler(event)}/>
            </label>
            <div className="output">
                { error && <div className="error">{ error }</div> }
                { selectedFile && <div> { selectedFile.name } </div> }
                { selectedFile && <ProgressBar file={selectedFile} setFile={setSelectedFile}></ProgressBar> }
            </div>
        </form>
    )
}

export default UploadForm
