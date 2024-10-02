import React from 'react'
import './about.css'
import AboutAvt from '../../assets/avatar-2.svg'
import AboutBox from './AboutBox'

const About = () => {
  return (
    <section className='about container section' id="about">
      <h2 className='section__title'>About Me</h2>
      <div className='about__container grid'>
        <img src={AboutAvt} alt="" className='about__img' />
        <div className='about__data grid'>
          <div className='about__info'>
            <p className='about__description'>
              As a Fresher, my goal is to gain practical experience and enhance my skills while contributing to the success of the organization.
              I look forward to leveraging my theoretical knowledge and passion for technology to contribute to bringing the best products to the market and aiming for higher goals.
            </p>
            <a href='#home' className='btn'>Download CV</a>
          </div>
          <div className='about__skills grid'>
            <div className='skills_data'>
              <div className='skills_titles'>
                <h3 className='skills__name'>Frontend Development </h3>
                <span className='skills__number'>90%</span>
              </div>
              <div className='skills__bar'>
                <span className='skills__percentage fe-development'></span>
              </div>
            </div>

            <div className='skills_data'>
              <div className='skills_titles'>
                <h3 className='skills__name'>Backend Development</h3>
                <span className='skills__number'>60%</span>
              </div>
              <div className='skills__bar'>
                <span className='skills__percentage be-development'></span>
              </div>
            </div>

            <div className='skills_data'>
              <div className='skills_titles'>
                <h3 className='skills__name'>UI/UX design</h3>
                <span className='skills__number'>80%</span>
              </div>
              <div className='skills__bar'>
                <span className='skills__percentage ui_design'></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutBox />
    </section>
  )
}

export default About
