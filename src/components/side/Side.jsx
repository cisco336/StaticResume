import React from 'react'
import './side.scss'
import About from '../about/About.jsx'
import Skills from '../skills/Skills.jsx'
import EducationWrapper from '../education/EducationWrapper.jsx'
import Languages from '../languages/Languages.jsx'

function Side() {
  return (
    <div className='side'>
        <About />
        <Skills />
        <EducationWrapper />
        <Languages />
    </div>
  )
}

export default Side