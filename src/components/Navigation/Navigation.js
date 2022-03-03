import React from "react";
import "./navigation.css";

const Navigation = ({onRouteChange}) => {
    return (
        <nav className="primary-nav">
            <button onClick={() => onRouteChange("signin")} type="submit"> Sign Out </button>
        </nav>
    );
}

export default Navigation;