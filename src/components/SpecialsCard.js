import React from 'react'
import greekSalad from '../assets/greek salad.jpg'

export default function SpecialsCard() {
  return (
    <div className='card'>
      <title>Greek Salat</title>
      <p className='price'>$12.99</p>
      <img src={greekSalad} height={150} alt='Card' />
      <p className='description'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quasi
        quo magnam amet, repellendus blanditiis labore culpa expedita soluta
        veniam cumque sunt adipisci, commodi minus ut nemo repellat esse nihil?
      </p>
      <p className='delivery'>Order a delivery</p>
    </div>
  )
}
