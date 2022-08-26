import React from "react";

const SkillShare = [
  { iconName: "javascript" },
  { iconName: "npm" },
  { iconName: "react" },
];

const SkillIcons = () => {
  return (
    <>
      <ul className="social">
        {SkillShare.map((val, i) => (
          <li key={i}>
            <a target="_blank" rel="noreferrer">
              <img
                className="svg"
                id="skillIcon"
                src={`/assets/img/svg/skills/${val.iconName}.svg`}
                alt={val.iconName}
              ></img>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SkillIcons;
