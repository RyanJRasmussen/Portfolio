import React from "react";

import postgres from "../assets/svg/skills/postgres.svg";
import mongodb from "../assets/svg/skills/mongodb.svg";

const SkillShare = [
  { icon: postgres, name: "PostgreSQL" },
  { icon: mongodb, name: "MongoDB" },
];

const DatabaseIcons = () => {
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

export default DatabaseIcons;
