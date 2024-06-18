import React, { useState } from "react";
import "./header.css";
import { RiHome5Line } from "react-icons/ri";
import { BiUser } from "react-icons/bi";
import { AiOutlineFileSearch } from "react-icons/ai";
import { VscBriefcase } from "react-icons/vsc";
import { MdOutlinePhonelinkRing } from "react-icons/md";
import { AiOutlinePicture } from "react-icons/ai";
import { BsX } from "react-icons/bs";
import { AiOutlineAppstore } from "react-icons/ai";

const Header = () => {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Fortune
        </a>
        <div className={Toggle ? "nav__menu show__menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={
                  activeNav === "#home" ? "nav__link active-ink" : "nav__link"
                }
              >
                <RiHome5Line className="nav__icon" /> Home
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={
                  activeNav === "#about" ? "nav__link active-ink" : "nav__link"
                }
              >
                <BiUser className="nav__icon" /> About
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#skills"
                onClick={() => setActiveNav("#skills")}
                className={
                  activeNav === "#skills" ? "nav__link active-ink" : "nav__link"
                }
              >
                <AiOutlineFileSearch className="nav__icon" /> Skills
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#services"
                onClick={() => setActiveNav("#services")}
                className={
                  activeNav === "#services"
                    ? "nav__link active-ink"
                    : "nav__link"
                }
              >
                <VscBriefcase className="nav__icon" /> Services
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#portfolio"
                onClick={() => setActiveNav("#portfolio")}
                className={
                  activeNav === "#portfolio"
                    ? "nav__link active-ink"
                    : "nav__link"
                }
              >
                <AiOutlinePicture className="nav__icon" /> Portfolio
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <MdOutlinePhonelinkRing className="nav__icon" /> Contact
              </a>
            </li>
          </ul>
          <BsX className="nav__close" onClick={() => showMenu(!Toggle)} />
        </div>
        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <AiOutlineAppstore />
        </div>
      </nav>
    </header>
  );
};

export default Header;
