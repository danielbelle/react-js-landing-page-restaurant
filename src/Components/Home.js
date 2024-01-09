import React from 'react'
import Navbar from './Navbar.js'
import BannerBackground from '../Assets/home-banner-background.png'
import BannerImage from '../Assets/home-banner-image.png'
import { FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-scroll'


const Home = () => {
  return (
    <div id="home" class="home-container">
      <Navbar />
      <div className='home-banner-container'>
        <div className='home-bannerImage-container'>
          <img src={BannerBackground} alt='' />
        </div>
        <div className='home-text-section'>
          <h1 className='primary-heading'>
            Sua Comida Entregue Quente e Fresca
          </h1>
          <p className='primary-text'>
            Chefes tomam todo um cuidado na preparação para que você possa cozinhar alimentos frescos.
          </p>
          <Link to='contact' spy={true} smooth={true} offset={0} duration={500}>
            <button className='secondary-button'>
              Comprar Agora <FiArrowRight />
            </button>
          </Link>
        </div>
        <div className='home-image-container'>
          <img src={BannerImage} alt=''></img>
        </div>
      </div>
    </div>
  )
}

export default Home;