import React from 'react';
import './languages.scss';
import SectionTitle from '../sectionTitle/SectionTitle';
import data from '../../data';

function Languages({ lang }) {
    const { languages } = data.side;
    return (
        <div className="languages">
            <SectionTitle icon={'fa-solid fa-language'} text={'Idiomas'} />
            {languages.map((l, i) => (
                <div key={i} className="languages__item">
                    <span>{l.lang[lang]}</span>
                    <span>{l.level[lang]}</span>
                </div>
            ))}
        </div>
    );
}

export default Languages;
