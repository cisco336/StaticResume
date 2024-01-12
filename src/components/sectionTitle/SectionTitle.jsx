import React from 'react'
import './section-title.scss'

function SectionTitle({icon, text}) {
  return (
    <div className='section-title'>
        <i className={icon}></i>
        <h4>{text}</h4>
    </div>
  )
}

export default SectionTitle