import React from "react";
import WorkExp from "../workExp/WorkExp";
import "./main-content.scss";
import data from "../../data"; 

function MainContent() {
    const {exp} = data;

    return (
        <div className="main-content">
            {exp.map((x, i) => (
                <WorkExp key={i} {...x} />
            ))}
        </div>
    );
}

export default MainContent;
