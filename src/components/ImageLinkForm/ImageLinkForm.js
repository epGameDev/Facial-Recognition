import React from "react";
import "./ImageLinkForm.css"


const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {

    return (
        <div className="input-container">
            <h1>{`This friendly Robot can detect faces in your pictures. Give it a try!`}</h1>
            <div>
                <input className="image-input" onChange={onInputChange} type="text" name="image-link" id="image-link" placeholder="Paste your url here"/>
                <button  onClick={onButtonSubmit} className="submit-btn" type="submit">Search</button>
            </div>
        </div>
    )
}

export default ImageLinkForm;