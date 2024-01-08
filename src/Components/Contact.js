import React from 'react'

function Contact() {
  return (
    <div id="contact" className='contact-page-wrapper'>
      <h1 className='primary-heading'>Alguma Dúvida?</h1>
      <h1 className='primary-heading'>Deixe-nos Ajudá-lo</h1>
      <div className='contact-form-container'>
        <input type='text' placeholder='seu-email@gmail.com'></input>
        <button className='secondary-button'>Enviar</button>
      </div>
    </div>
  )
}

export default Contact