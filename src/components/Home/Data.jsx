import React from 'react'
import { IoPaperPlaneOutline } from 'react-icons/io5';
const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">
        Theo Fortune
      </h1>
      <h3 className="home__subtitle">Software Engineer</h3>
      <p className="home__description">
        I'm A curious software developer who's trying to get a bit better everyday
      </p>
      <a href="#contact" className="button button__flex">
        Say Hello
        <IoPaperPlaneOutline style={{ color: "var(--container-color)" }} className="button__icon"/>
      </a>
    </div>
  );
}

export default Data