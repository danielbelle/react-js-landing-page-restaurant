import React from 'react'
import AboutBackground from '../Assets/about-background.png'
import AboutBackgroundImage from '../Assets/about-background-image.png'
import { BsFillPCircleFill } from 'react-icons/bs'

const About = () => {
  return (
    <div id="about" className='about-section-container'>
      <div className='about-background-image-container'>
        <img src={AboutBackground} alt=''></img>
      </div>
      <div className='about-section-image-container'>
        <img src={AboutBackgroundImage} alt=''></img>
      </div>
      <div className='about-section-text-container'>
        <p className='primary-subheading'>About</p>
        <h1 className='primary-heading'>
          Food Is An Important Part Of A Balanced Diet
        </h1>
        <p className='primary-text'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in posuere nisl. Nullam et lacus erat.
        </p>
        <p className='primary-text'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in posuere nisl. Nullam et lacus erat
        </p>
        <div className='about-buttons-container'>
          <button className='secondary-button'>Learn More</button>
          <button className='watch-video-button'>Watch Video
            {" "}
            <BsFillPCircleFill />
          </button>
        </div>
      </div>
    </div>
  )
}

export default About