import React from 'react'
import './header.scss'

function Header() {
  return (
    <div className='header'>
        <img src='/profile.jpeg'/>
        <div className='name'>
            <h2>
                <span>
                    Francisco
                </span> 
                <span className='orange'>
                    Arleo
                </span>
            </h2>
            <h3>
                <span>Fullstack</span>
                <span className='orange'>Developer</span>
            </h3>
        </div>
        <div className="info">
            <div className="row">
                <i className='fa fa-phone'></i>
                +57 304 549 58 04
            </div>
            <div className="row">
                <i className='fa fa-envelope'></i>
                franciscoarleo336@gmail.com
            </div>
            <div className="row">
                <i className='fa fa-map-location'></i>
                Carrera 74a, #168a-50
            </div>
        </div>
    </div>
  )
}

export default Header