import React, { useContext } from 'react';
import './side.scss';
import About from '../about/About.jsx';
import Skills from '../skills/Skills.jsx';
import EducationWrapper from '../education/EducationWrapper.jsx';
import Languages from '../languages/Languages.jsx';
import { langContext } from '../../App';

function Side() {
    const context = useContext(langContext);
    return (
        <div className="side">
            <About lang={context} />
            <Skills lang={context} />
            <EducationWrapper lang={context} />
            <Languages lang={context} />
        </div>
    );
}

export default Side;
