import React from 'react'
import Logo from '../Assets/Logo.svg';
import { BsTwitter } from 'react-icons/bs';
import { SiLinkedin } from 'react-icons/si';
import { BsYoutube } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import ScrollToTop from 'react-scroll-to-top';

function Footer() {
  return (
    <div id="footer" className='footer-wrapper'>
      <ScrollToTop smooth color="orange"/>
      <div className='footer-section-one'>
        <div className='footer-logo-container'>
          <img src={Logo} alt='' />
        </div>
        <div className='footer-icons'>
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className='footer-section-two'>
        <div className='footer-section-columns'>
          <span>Qualidade</span>
          <span>Ajuda</span>
          <span>Compartilhar</span>
          <span>Vagas</span>
          <span>Depoimentos</span>
          <span>Como Funciona</span>
        </div>
        <div className='footer-section-columns'>
          <span>(XX) 99999-5834</span>
          <span>ola@foodie.com.br</span>
          <span>marketing@foodie.com.br</span>
          <span>contato@foodie.com.br</span>
        </div>
        <div className='footer-section-columns'>
          <span>Termos e Condições</span>
          <span>Política de Privacidade</span>
        </div>
      </div>
    </div>
  )
}

export default Footer