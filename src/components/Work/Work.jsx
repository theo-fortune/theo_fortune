import React from 'react';
import "./work.css"
import Works from './Works';

const Work = () => {
  return (
    <section id="portfolio" className="work section">
      <h3 className="section__title">Portfolio</h3>
      <span className="section__subtitle">Most recent works</span>
      <Works />
    </section>
  );
}

export default Work