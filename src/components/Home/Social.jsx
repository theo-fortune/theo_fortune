import React from 'react'
import { AiOutlineInstagram } from "react-icons/ai";
import { TfiLinkedin } from 'react-icons/tfi';
import { FiGithub } from 'react-icons/fi';

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.instagram.com/fortuneui"
        className="home__social-icon"
      >
        <AiOutlineInstagram />
      </a>
      <a
        href = "https://www.linkedin.com/in/fortune-theo-b6445a230"
        className="home__social-icon"
      >
        <TfiLinkedin />
      </a>
      <a
        href="https://www.github.com/theo-fortune"
        className="home__social-icon"
      >
        <FiGithub />
      </a>
    </div>
  );
}

export default Social