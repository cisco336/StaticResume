import { createContext, useState } from 'react';
import './App.css';
import DropDown from './components/shared/dropdown/DropDown';
import Sheet from './components/sheet/Sheet';
import html2PDF from 'jspdf-html2canvas';

export const langContext = createContext();

function App() {
    const languages = ['Español', 'English'];
    const [language, setLanguage] = useState('en');
    const savePDF = (e) => {
        e.preventDefault();
        let sheet = document.getElementsByClassName('sheet');
        html2PDF(sheet, {
            jsPDF: {
                format: 'letter',
                output: `Resume_Francisco_Arleo_${language}.pdf`
            },
            output: `Resume_Francisco_Arleo_${language}.pdf`
        });
    };
    return (
        <>
            <div className="buttons">
                <DropDown
                    icon="fa-solid fa-caret-down"
                    text="Languages"
                    items={languages}
                    callback={(e, value) => {
                        setLanguage(value === 'Español' ? 'es' : 'en');
                    }}
                />
                <button onClick={(e) => savePDF(e)}>
                    <i className="fa-solid fa-file-pdf"></i>
                </button>
                <a
                    type="button"
                    href={'https://www.linkedin.com/in/francisco-arleo/'}
                    target="_blank"
                >
                    <i className="fa-brands fa-linkedin"></i>
                </a>
                <a
                    type="button"
                    href={'mailto:franciscoarleo336@gmail.com'}
                    target="_blank"
                >
                    <i className="fa-solid fa-envelope"></i>
                </a>
                <a
                    type="button"
                    href={'https://github.com/cisco336'}
                    target="_blank"
                >
                    <i className="fa-brands fa-github"></i>
                </a>
            </div>
            <langContext.Provider value={language}>
                <Sheet />
            </langContext.Provider>
        </>
    );
}

export default App;
