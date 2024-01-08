import React from 'react'
import AboutBackground from '../Assets/about-background.png'
import AboutBackgroundImage from '../Assets/about-background-image.png'
import { BsFillPCircleFill } from 'react-icons/bs'

const About = () => {
  const newTab = url => {
    window.open(url)
  }

  return (
    <div id="about" className='about-section-container'>
      <div className='about-background-image-container'>
        <img src={AboutBackground} alt=''></img>
      </div>
      <div className='about-section-image-container'>
        <img src={AboutBackgroundImage} alt=''></img>
      </div>
      <div className='about-section-text-container'>
        <p className='primary-subheading'>Sobre</p>
        <h1 className='primary-heading'>
          O Alimento É Uma Parte Importante Da Dieta Saudável
        </h1>
        <p className='primary-text'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in posuere nisl. Nullam et lacus erat.
        </p>
        <p className='primary-text'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in posuere nisl. Nullam et lacus erat
        </p>
        <div className='about-buttons-container'>
          <button className='secondary-button'>Mais Sobre</button>
          <button className='watch-video-button' onClick={() => newTab('https://www.youtube.com/watch?v=ULoPE2xOBCo')}>Play no Vídeo
            {" "}
            <BsFillPCircleFill />
          </button>
        </div>
      </div>
    </div>
  )
}

export default About