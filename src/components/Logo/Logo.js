import React from "react";
import Tilt from "react-vanilla-tilt";
import logoPNG from "./robot.svg";
import "./Logo.css";

const Logo = () => {
    return (
        
        <Tilt className="tilt-elem" options={{ scale: 2, max: 60, glare: true,}}>
            <div className="logo-container">
                    <img src={logoPNG} alt="logo of a cool robot" />
            </div>
        </Tilt>
    )
}

export default Logo;