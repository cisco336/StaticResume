import React from 'react'
import SectionTitle from '../sectionTitle/SectionTitle.jsx'
import './education.scss'
import EducationItem from './EducationItem';

function EducationWrapper() {
    const educationItems = [
        {
            institute: "IUTA",
            location: "Los Teques, Venezuela",
            title: 'T.S.U. en informática',
            from: "Abr. 2003",
            to: "Oct. 2006"
        },
        {
            institute: "Universidad Bicentenaria de Aragua",
            location: "Carrizal, Venezuela",
            title: 'Abogado',
            from: "Jun. 2004",
            to: "Nov. 2009"
        },
        {
            institute: "Universidad Simón Bolívar",
            location: "Baruta, Venezuela",
            title: 'Esp. en Gerencia de la Tecnología y la Información',
            from: "Ago. 2011",
            to: "Nov. 2015"
        },
    ];
  return (
    <div className='education__wrapper'>
        <SectionTitle icon={'fa-solid fa-graduation-cap'} text={'Educación'}/>
        {
            educationItems.map(item => <EducationItem {...item}/>)
        }
    </div>
  )
}

export default EducationWrapper