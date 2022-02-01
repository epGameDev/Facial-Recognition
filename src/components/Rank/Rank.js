import React from "react";
import "./Rank.css";

const Rank = () => {

    return (
        <div className="user-container">
            <div className="user-intro">
                <h3>{`Eric your current rank is...`}</h3>
            </div>
            <div>
                <h3 className="user-rank">#5</h3>
            </div>
        </div>
    )


}

export default Rank;