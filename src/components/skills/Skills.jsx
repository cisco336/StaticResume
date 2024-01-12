import React from "react";
import SectionTitle from "../sectionTitle/SectionTitle";
import "./skills.scss";

function Skills() {
    const skills = [
        "ReactJs, ",
        "NodeJs, ",
        "Angular, ",
        "C#, ",
        "Django, ",
        "Git, ",
        "Express, ",
        "Redux, ",
        "Cypress, ",
        "Playwright, ",
        "Sass, ",
        "Jest.",
    ];
    return (
        <div className="skills">
            <SectionTitle icon={"fa-solid fa-sliders"} text={"Habilidades"} />
            <p>
                {skills.map((skill) => (
                    <span>{skill}</span>
                ))}
            </p>
        </div>
    );
}

export default Skills;
