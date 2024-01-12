import React from "react";
import "./languages.scss";
import SectionTitle from "../sectionTitle/SectionTitle";

function Languages() {
    const languages = [
        {
            lang: 'Español',
            level: 'Nativo'
        },
        {
            lang: 'Ingles',
            level: 'B2'
        }
    ]
    return (
        <div className="languages">
            <SectionTitle icon={"fa-solid fa-language"} text={"Idiomas"} />
            {
                languages.map(l => (
                    <div className="languages__item">
                        <span>
                            {l.lang}
                        </span>
                        <span>
                            {l.level}
                        </span>
                    </div>
                ))
            }
        </div>
    );
}

export default Languages;
