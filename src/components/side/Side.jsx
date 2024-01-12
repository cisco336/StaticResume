import React from 'react'
import './side.scss'
import About from '../about/About'
import Skills from '../skills/Skills'
import EducationWrapper from '../education/EducationWrapper'
import Languages from '../languages/Languages'

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