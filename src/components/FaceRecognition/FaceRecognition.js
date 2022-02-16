import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({imageURL}) => {

    return (
        <div className="img-facial--container">
            <img src={imageURL} alt={""} />
        </div>
    );
}

export default FaceRecognition;