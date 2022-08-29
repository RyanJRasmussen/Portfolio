import React from "react";
import html from "../assets/svg/skills/html.svg";
import css from "../assets/svg/skills/css.svg";
import javascript from "../assets/svg/skills/javascript.svg";
import npm from "../assets/svg/skills/npm.svg";
import python from "../assets/svg/skills/python.svg";

const SkillShare = [
  { icon: html, name: "html" },
  { icon: css, name: "css" },
  { icon: javascript, name: "javascript" },
  { icon: npm, name: "npm" },
  { icon: python, name: "python" },
  //typescript?
];

const LanguageIcons = () => {
  return (
    <>
      <ul className="social">
        {SkillShare.map((val, i) => (
          <li key={i}>
            <a target="_blank" rel="noreferrer">
              <img
                className="svg"
                id="skillIcon"
                src={`${val.icon}`}
                alt={val.name}
              ></img>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default LanguageIcons;
