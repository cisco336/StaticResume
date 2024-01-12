import React from "react";
import SectionTitle from "../sectionTitle/SectionTitle";
import "./skills.scss";
import data from "../../data";

function Skills() {
    const {skills} = data.side;
    return (
      <div className="skills">
        <SectionTitle icon={skills.icon} text={skills.title.es} />
        <ul>
          {skills.skills.map((skill, i) => (
            <li key={i}>
              <a href={skill.link}>{skill.name}</a>
            </li>
          ))}
        </ul>
      </div>
    );
}

export default Skills;
