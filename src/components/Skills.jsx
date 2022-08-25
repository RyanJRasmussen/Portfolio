import React, { useState } from "react";
const SkillShare = [
  { iconName: "javascript" },
  { iconName: "npm" },
  { iconName: "react" },
];

const Skills = (props) => {
  return (
    <>
      <div className="tokyo_tm_about">
        <div className="title_flex">
          <div className="left">
            <h3>Skills</h3>
          </div>
        </div>
        <div className="about_image"></div>
        <ul className="social">
          {SkillShare.map((val, i) => (
            <li key={i}>
              <img
                className="svg"
                id="skillIcon"
                src={`/assets/img/svg/skills/${val.iconName}.svg`}
                alt={val.iconName}
              ></img>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Skills;
