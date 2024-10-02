import React from 'react'
import './home.css'
import Me from '../../assets/avatar-3.svg'
import HeaderSocial from './HeaderSocial'
import ScrollDown from './ScrollDown'
import Shape from './Shape'

const Home = () => {
  return (
    <section className='home container' id="home">
      <div className='intro'>
        <img src={Me} alt='' className='home__img' />

        <h1 className='home__name'>Nguyen Thi Hoang Vy</h1>
        <span className='home__education'>
          I'm a Frontend Developer
        </span>
        <HeaderSocial />
        <a href='#contact' className='btn'>Hire Me</a>
        <ScrollDown />
      </div>
      <Shape />
    </section>
  )
}

export default Home
