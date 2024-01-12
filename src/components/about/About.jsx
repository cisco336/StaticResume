import React from 'react'
import SectionTitle from '../sectionTitle/SectionTitle'
import './about.scss'

function About() {
  return (
    <div className='about'>
        <SectionTitle icon={"fa-solid fa-address-card"} text={"Resumen"}/>
        <p>
            Desarrollador Full-Stack con experiencia destacada en React.js, Angular y Node.js. Especializado en mejorar interfaces y contribuir al éxito de proyectos diversos. Habilidades sólidas en desarrollo front-end y back-end.
        </p>
    </div>
  )
}

export default About