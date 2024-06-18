import React, { useState } from "react";
import "./services.css";
import { BsArrowRightShort, BsX, BsFileEarmarkCode } from "react-icons/bs";
import { VscVerified } from "react-icons/vsc";
import { MdWeb } from "react-icons/md";
import { AiOutlineCode } from "react-icons/ai";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="services section" id="services">
      <h3 className="section__title">Services</h3>
      <span className="section__subtitle">What I Offer</span>
      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <AiOutlineCode className="services__icon" />
            <h3 className="service__title">
              Frontend <br /> Development
            </h3>
          </div>
          <span className="service__button" onClick={() => toggleTab(1)}>
            View More <BsArrowRightShort className="services__button-icon" />
          </span>
          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <BsX
                className="services__modal-close"
                onClick={() => toggleTab(0)}
              />
              <h3 className="services__modal-title">Frontend Development</h3>
              <p className="services__modal-description">
                Service with more than 3 years of experience. Providing quality
                work to clients and companies.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <VscVerified className="services__modal-icon" />
                  <p className="services__modal-info">
                    I develop user interfaces.
                  </p>
                </li>
                <li className="services__modal-service">
                  <VscVerified className="services__modal-icon" />
                  <p className="services__modal-info">Web development</p>
                </li>
                <li className="services__modal-service">
                  <VscVerified className="services__modal-icon" />
                  <p className="services__modal-info">
                    I create UX element interactions.
                  </p>
                </li>
                <li className="services__modal-service">
                  <VscVerified className="services__modal-icon" />
                  <p className="services__modal-info">
                    Crafting technically documentation professionally
                  </p>
                </li>
                <li className="services__modal-service">
                  <VscVerified className="services__modal-icon" />
                  <p className="services__modal-info">
                    Designing web and mobile UI
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="services__content">
          <div>
            <BsFileEarmarkCode className="services__icon" />
            <h3 className="service__title">
              Backend <br /> Development
            </h3>
          </div>
          <span onClick={() => toggleTab(2)} className="service__button">
            View More <BsArrowRightShort className="services__button-icon" />
          </span>
          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <BsX
                className="services__modal-close"
                onClick={() => toggleTab(0)}
              />
              <h3 className="services__modal-title">Backend Development</h3>
              <p className="services__modal-description">
                Service with more than 3 years of experience. Providing quality
                work to clients and companies.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <VscVerified className="services__modal-icon" />
                  <p className="services__modal-info">
                    I develop user interfaces.
                  </p>
                </li>
                <li className="services__modal-service">
                  <VscVerified className="services__modal-icon" />
                  <p className="services__modal-info">Web development</p>
                </li>
                <li className="services__modal-service">
                  <VscVerified className="services__modal-icon" />
                  <p className="services__modal-info">
                    I create UX element interactions.
                  </p>
                </li>
                <li className="services__modal-service">
                  <VscVerified className="services__modal-icon" />
                  <p className="services__modal-info">
                    Crafting technically documentation professionally
                  </p>
                </li>
                <li className="services__modal-service">
                  <VscVerified className="services__modal-icon" />
                  <p className="services__modal-info">
                    Designing web and mobile UI
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="services__content">
          <div>
            <MdWeb className="services__icon" />
            <h3 className="service__title">
              Product <br /> Design
            </h3>
          </div>
          <span className="service__button" onClick={() => toggleTab(3)}>
            View More <BsArrowRightShort className="services__button-icon" />
          </span>
          <div
            className={
              toggleState === 3
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <BsX
                className="services__modal-close"
                onClick={() => toggleTab(0)}
              />
              <h3 className="services__modal-title">Product Design</h3>
              <p className="services__modal-description">
                Service with more than 3 years of experience. Providing quality
                work to clients and companies.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <VscVerified className="services__modal-icon" />
                  <p className="services__modal-info">
                    I develop user interfaces.
                  </p>
                </li>
                <li className="services__modal-service">
                  <VscVerified className="services__modal-icon" />
                  <p className="services__modal-info">Web development</p>
                </li>
                <li className="services__modal-service">
                  <VscVerified className="services__modal-icon" />
                  <p className="services__modal-info">
                    I create UX element interactions.
                  </p>
                </li>
                <li className="services__modal-service">
                  <VscVerified className="services__modal-icon" />
                  <p className="services__modal-info">
                    Crafting technically documentation professionally
                  </p>
                </li>
                <li className="services__modal-service">
                  <VscVerified className="services__modal-icon" />
                  <p className="services__modal-info">
                    Designing web and mobile UI
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
