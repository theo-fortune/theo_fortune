import React from 'react'
import './home.css'
import { Scroll, Social, Data } from '.'


const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />
          <div className="home__img"></div>
          <Data />
        </div>
        <Scroll />
      </div>
    </section>
  )
}

export default Home