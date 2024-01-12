import React from "react";
import "./work-exp.scss";

function WorkExp({logo, company, position, start, end, description}) {
    return (
        <div className="exp">
            <img src={logo} alt="" />
            <h3 className="exp__company">{company}</h3>
            <div className="exp__position">{position}</div>
            <div className="exp__date">{start} - {end}</div>
            <p className="exp__description">{description}</p>
        </div>
    );
}

export default WorkExp;
