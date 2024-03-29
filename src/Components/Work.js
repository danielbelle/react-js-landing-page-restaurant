import React from 'react'
import PickMeals from '../Assets/pick-meals-image.png'
import ChooseMeals from '../Assets/choose-image.png'
import DeliveryMeals from '../Assets/delivery-image.png'

const Work = () => {

  const workInfoData = [
    {
      image: PickMeals,
      title: "Escolher Refeições",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in posuere nisl. Nullam et lacus erat.",
    },
    {
      image: ChooseMeals,
      title: "Defina a Frequência",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur.",
    },
    {
      image: DeliveryMeals,
      title: "Entrega Rápida",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur.",
    }
  ]

  return (
    <div id="work" className='work-section-wrapper'>
      <div className='work-section-top'>
        <p className='primary-subheading'>Formas de Trabalho</p>
        <h1 className='primary-heading'>Como Funciona</h1>
        <p className='primary-text'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in posuere nisl. Nullam et lacus erat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in posuere nisl. Nullam et lacus erat.
        </p>
      </div>
      <div className='work-section-bottom'>
        {
          workInfoData.map((data) => (
            <div className='work-section-info'>
              <div className='info-boxes-img-container'>
                <img src={data.image} alt=''></img>
              </div>
              <h2>{data.title}</h2>
              <p>{data.text}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Work