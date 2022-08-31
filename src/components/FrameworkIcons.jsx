import React from "react";

import express from "../assets/svg/skills/express.svg";
import react from "../assets/svg/skills/react.svg";
import redux from "../assets/svg/skills/redux.svg";

const SkillShare = [
  { icon: react, name: "React.js" },
  { icon: redux, name: "redux" },
  { icon: express, name: "express" },
];

const FrameworkIcons = () => {
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

export default FrameworkIcons;
