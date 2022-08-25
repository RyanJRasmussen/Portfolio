import React from "react";
import Resume from "../assets/resume.pdf";

const SocialShare = [
  { iconName: "linkedin", link: "https://linkedin.com/in/ryan-j-rasmussen-" },
  {
    iconName: "github",
    link: "https://github.com/RyanJRasmussen",
  },
  // { iconName: "mail", link: "https://ryan.james.rasmussen@gmail.com/" },
  //need to figure out "mailTo" later
  {
    iconName: "resume",
    link: Resume,
  },
];
const Social = () => {
  return (
    <>
      <ul className="social">
        {SocialShare.map((val, i) => (
          <li key={i}>
            <a href={`${val.link}`} target="_blank" rel="noreferrer">
              <img
                className="svg"
                id="homeIcon"
                src={`/assets/img/svg/social/${val.iconName}.svg`}
                alt={val.iconName}
              ></img>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Social;
