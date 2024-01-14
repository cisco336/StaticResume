import React, { useContext } from 'react';
import './work-exp.scss';
import { langContext } from '../../App';

function WorkExp({ logo, company, position, start, end, description }) {
    const context = useContext(langContext);

    return (
        <div className="exp">
            <img src={logo} alt="" />
            <h3 className="exp__company">{company}</h3>
            <div className="exp__position">{position}</div>
            <div className="exp__date">
                {start[context]} - {end[context]}
            </div>
            <p className="exp__description">{description[context]}</p>
        </div>
    );
}

export default WorkExp;
