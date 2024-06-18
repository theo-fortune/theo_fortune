import React from 'react'
import "./info.css";
import { BsAward } from "react-icons/bs";
import { CgBriefcase } from "react-icons/cg";
import { BiSupport } from "react-icons/bi";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <BsAward className='about__icon'/>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">7 years</span>
      </div>
      <div className="about__box">
        <CgBriefcase className='about__icon'/>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">128+ Projects</span>
      </div>
      <div className="about__box">
        <BiSupport className='about__icon'/>
        <h3 className="about__title">Support</h3>
        <span className="about__subtitle">Online 24/7</span>
      </div>
    </div>
  );
}

export default Info