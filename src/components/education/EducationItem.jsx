import React from "react";
import "./education.scss";

function EducationItem({ institute, location, title, from, to }) {
    return (
        <div className="education__item">
            <span className="education__item--title">
                {`${institute} (${location})`}
            </span>
            <span className="education__item--grade">
                {title}
            </span>
            <span className="education__item--date">
                {`${from} - ${to}`}
            </span>
        </div>
    );
}

export default EducationItem;
