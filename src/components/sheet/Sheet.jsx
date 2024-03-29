import React from 'react';
import './sheet.scss';
import Header from '../header/Header';
import Side from '../side/Side';
import MainConten from '../mainContent/MainContent';

function Sheet() {
    return (
        <>
            <div className="sheet" id="sheet">
                <Header />
                <Side />
                <MainConten />
            </div>
        </>
    );
}

export default Sheet;
