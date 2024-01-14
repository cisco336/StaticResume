import React from 'react';
import './education.scss';

function EducationItem({ institute, location, title, from, to, lang }) {
    return (
        <div className="education__item">
            <span className="education__item--title">
                {`${institute} (${location})`}
            </span>
            <span className="education__item--grade">{title[lang]}</span>
            <span className="education__item--date">{`${from[lang]} - ${to[lang]}`}</span>
        </div>
    );
}

export default EducationItem;
