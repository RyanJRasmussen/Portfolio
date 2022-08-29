import React from "react";
import Resume from "../assets/resume.pdf";
import github from "../assets/svg/social/github.svg";
import linkedin from "../assets/svg/social/linkedin.svg";
import resume from "../assets/svg/social/resume.svg";

const SocialShare = [
  {
    icon: linkedin,
    link: "https://linkedin.com/in/ryan-j-rasmussen-",
    name: "LinkedIn",
  },
  {
    icon: github,
    link: "https://github.com/RyanJRasmussen",
    name: "GitHub",
  },
  {
    icon: resume,
    link: Resume,
    name: "Resume",
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

export default Social;
