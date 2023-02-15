import React from 'react'
import greekSalad from '../assets/greek salad.jpg'

export default function SpecialsCard() {
  return (
    <div className='card bg-gray'>
      <img src={greekSalad} alt='Card' />
      <div className='wrapper'>
        <div className='card-title'>
          Greek Salad
          <span className='highlight-text fg-red'>$12.99</span>
        </div>
        <p className='description fg-green'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quasi
          quo magnam amet, repellendus blanditiis labore culpa expedita soluta
          veniam cumque sunt adipisci, commodi minus ut nemo repellat esse
          nihil?
        </p>
        <p className='delivery'>Order a delivery</p>
      </div>
    </div>
  )
}
