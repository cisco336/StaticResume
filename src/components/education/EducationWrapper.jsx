import React from 'react';
import SectionTitle from '../sectionTitle/SectionTitle';
import './education.scss';
import EducationItem from './EducationItem';
import data from '../../data';

function EducationWrapper({ lang }) {
    const { items } = data.side.education;

    return (
        <div className="education__wrapper">
            <SectionTitle
                icon={'fa-solid fa-graduation-cap'}
                text={data.side.education.title[lang]}
            />
            {items.map((item, i) => (
                <EducationItem key={i} {...item} lang={lang} />
            ))}
        </div>
    );
}

export default EducationWrapper;
