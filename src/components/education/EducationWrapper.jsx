import React from "react";
import SectionTitle from "../sectionTitle/SectionTitle";
import "./education.scss";
import EducationItem from "./EducationItem";
import data from "../../data";

function EducationWrapper() {
  const {items} = data.side.education;

  return (
    <div className="education__wrapper">
      <SectionTitle icon={"fa-solid fa-graduation-cap"} text={"Educación"} />
      {items.map((item, i) => (
        <EducationItem key={i} {...item} />
      ))}
    </div>
  );
}

export default EducationWrapper;
