import React from 'react'; 
import "./about.css";
import { Profile, Resume } from '../../assets';
import Info from './Info';
import { AiOutlineFilePdf } from "react-icons/ai";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>
      <div className="about__container container grid">
        <img src={Profile} alt="profile" className="about__img" />
        <div className="about__data">
          <Info />
          <p className="about__description">
            As a ReactJS software engineer with expertise in UI/UX product
            design and proficiency in C++, Java and Python, I specialize in
            delivering high-quality software solutions that enhance user
            experience and drive business growth.
          </p>
          <a download="" href={Resume} className="button button--flex">Download CV <AiOutlineFilePdf style={{color: "var(--container-color)"}}/></a>
        </div>
      </div>
    </section>
  );
}

export default About