import React from "react";
import LanguageIcons from "./LanguageIcons";
import FrameworkIcons from "./FrameworkIcons";
import DatabaseIcons from "./DatabaseIcons";
import OtherIcons from "./OtherIcons";
// import SkillIcons from "./SkillIcons";
const Skills = () => {
  return (
    <>
      <div className="tokyo_tm_about">
        <div className="tokyo_tm_title">
          <div className="title_flex">
            <h3 className="left">Skills</h3>
          </div>
        </div>
        {/* <SkillIcons /> */}
        <br />
        <p>
          <span id="skillsSubtitle">Languages and tools: </span>
          <LanguageIcons />
          HTML, CSS, Javascript/Node.js, Python
          <br />
          <br />
          <br />
          <span id="skillsSubtitle">Frameworks: </span>
          <FrameworkIcons />
          React.js, Redux.js, Express.js, Flask
          <br />
          <br />
          <br />
          <span id="skillsSubtitle">Database: </span>
          <DatabaseIcons />
          PostgreSQL, MongoDB
          <br />
          <br />
          <br />
          <span id="skillsSubtitle">Other tools: </span>
          <OtherIcons />
          Git, GitHub, Heroku, REST APIs, VSCode
        </p>
      </div>
    </>
  );
};

export default Skills;
