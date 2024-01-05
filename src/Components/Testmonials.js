import React from 'react'
import ProfilePic from '../Assets/john-doe-image.png'
import { AiFillStar } from 'react-icons/ai'


function Testmonials() {
  return (
    <div id="testmonials" className='testimonial-section-wrapper'>
      <div className='work-section-top'>
        <p className='primary-subheading'>Testimonials</p>
        <h1 className='primary-heading'>What They Are Saying</h1>
        <p className='primary-text'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in posuere nisl. Nullam et lacus erat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in posuere nisl. Nullam et lacus erat.
        </p>
      </div>
      <div className='testimonial-section-bottom'>
        <img src={ProfilePic} alt=''></img>
        <p className='primary-text'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in posuere nisl. Nullam et lacus erat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in posuere nisl. Nullam et lacus erat.
        </p>
        <div className='testimonials-stars-container'>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Jhon Doe</h2>
      </div>
    </div>
  )
}

export default Testmonials