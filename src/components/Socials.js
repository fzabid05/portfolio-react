import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Socials = () => {
  return (
    <div className="socials">
      <div className="socialsIcon">
        <a href="" target="_blank">
          <AiFillGithub />
        </a>
        <a href="" target="_blank">
          <AiFillLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Socials;
