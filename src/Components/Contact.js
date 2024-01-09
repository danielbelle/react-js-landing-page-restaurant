import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_s8nljg4', 'template_v0sr4jm', form.current, '2ip1oI5hY4jTjN8JS').then((result) => {
      alert(result.text)
    }, (error) => {
      alert(error.text)
    })
  }

  return (
    <div id="contact" className='contact-page-wrapper'>
      <h1 className='primary-heading'>Alguma Dúvida?</h1>
      <h1 className='primary-heading'>Deixe-nos Ajudá-lo</h1>
      <form ref={form} onSubmit={sendEmail}>
        <div className='contact-form-container'>
          <input type='email' name='user_email' placeholder='seu-email@gmail.com'></input>
          <input className='secondary-button' type='submit' value={'Enviar'} />
        </div>
      </form>
    </div>
  )
}

export default Contact