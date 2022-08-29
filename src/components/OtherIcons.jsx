import React from "react";

import github from "../assets/svg/skills/github.svg";
import git from "../assets/svg/skills/git.svg";
import heroku from "../assets/svg/skills/heroku.svg";
import restapi from "../assets/svg/skills/restapi.svg";
import vscode from "../assets/svg/skills/vscode.svg";

const SkillShare = [
  { icon: git, name: "Git" },
  { icon: github, name: "GitHub" },
  { icon: heroku, name: "Heroku" },
  { icon: restapi, name: "REST API" },
  { icon: vscode, name: "VS Code" },
];

const OtherIcons = () => {
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

export default OtherIcons;
