import React from "react";

const SkillShare = [
  { iconName: "html" },
  { iconName: "css" },
  { iconName: "javascript" },
  { iconName: "npm" },
  { iconName: "python" },
  { iconName: "react" },
  { iconName: "redux" },
  { iconName: "postgres" },
  { iconName: "github" },
  { iconName: "git" },
  { iconName: "heroku" },
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
