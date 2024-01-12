import React from 'react'
import './sheet.scss'
import Header from '../header/Header.jsx'
import Side from '../side/Side.jsx'
import MainConten from '../mainContent/MainConten.jsx'

function Sheet() {
  return (
    <div className='sheet'>
        <Header />
        <Side />
        <MainConten />
    </div>
  )
}

export default Sheet