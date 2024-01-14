import React from 'react';
import SectionTitle from '../sectionTitle/SectionTitle.jsx';
import './about.scss';
import '../../data.js';
import data from '../../data.js';

function About({ lang }) {
    return (
        <div className="about">
            <SectionTitle
                icon={'fa-solid fa-address-card'}
                text={data.side.about.title[lang]}
            />
            <p>{data.side.about.text[lang]}</p>
        </div>
    );
}

export default About;
