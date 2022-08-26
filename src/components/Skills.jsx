import React from "react";
import SkillIcons from "./SkillIcons";
const Skills = () => {
  return (
    <>
      <div className="tokyo_tm_about">
        <div className="tokyo_tm_title">
          <div className="title_flex">
            <h3 className="left">Skills</h3>
          </div>
        </div>
        <SkillIcons />
        <br />
        <h5>
          <span id="skillsSubtitle">Languages and tools: </span> HTML, CSS,
          SASS, Javascript/Node.js, TypeScript, Python
          <br />
          <br />
          <span id="skillsSubtitle">Frameworks: </span>
          React.js, Redux, Express.js, Flask
          <br />
          <br />
          <span id="skillsSubtitle">Database: </span>
          PostgreSQL, MySQL, Sequelize, Node Postgres, MongoDB, Mongoose ORM
          <br />
          <br />
          <span id="skillsSubtitle">Other tools: </span> Git, GitHub, Heroku,
          REST APIs, Jest, VSCode, Jupyter Notebooks, Agile
        </h5>
      </div>
    </>
  );
};

export default Skills;
