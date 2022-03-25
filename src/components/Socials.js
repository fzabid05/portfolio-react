import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Socials = () => {
  return (
    <div className="socials">
      <div className="socialsIcon">
        <a href="https://github.com/fzabid05" target="_blank">
          <BsGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/fatima-zohra-abid/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Socials;
