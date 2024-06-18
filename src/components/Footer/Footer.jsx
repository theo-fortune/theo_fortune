import React from "react";
import "./footer.css";
import { FiGithub } from "react-icons/fi";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title"> Fortune </h1>
        <div className="footer__list">
          <a href="#about" className="footer__link">
            About
          </a>
          <a href="#portfolio" className="footer__link">
            Projects
          </a>
          <a href="#testimonials" className="footer__link">
            Testimonials
          </a>
        </div>
        <div className="footer__social">
          <a
            href="https://www.instagram.com/fortuneui"
            className="footer__social-link"
          >
            <FaInstagram />
          </a>
          <a
            href = "https://www.linkedin.com/in/fortune-theo-b6445a230"
            className="footer__social-link"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.github.com/theo-fortune"
            className="footer__social-link"
          >
            <FiGithub />
          </a>
        </div>
        <span className="footer__copy">
          &#169; Theo Fortune All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
