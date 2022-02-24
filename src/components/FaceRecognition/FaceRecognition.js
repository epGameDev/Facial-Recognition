import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({imageURL, box}) => {

    return (
        <div className="img-facial--container">
            <img id="input-image" src={imageURL} alt={""} />
            <div className="bounding-box" style={{top: box.topRow, right: box.rightCollumn, bottom: box.bottomRow, left: box.leftCollumn}}></div>
        </div>
    );
}

export default FaceRecognition;