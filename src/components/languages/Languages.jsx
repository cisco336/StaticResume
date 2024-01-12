import React from "react";
import "./languages.scss";
import SectionTitle from "../sectionTitle/SectionTitle";
import data from "../../data";

function Languages() {
    const {languages} = data.side
    return (
        <div className="languages">
            <SectionTitle icon={"fa-solid fa-language"} text={"Idiomas"} />
            {
                languages.map((l,i) => (
                    <div key={i} className="languages__item">
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
