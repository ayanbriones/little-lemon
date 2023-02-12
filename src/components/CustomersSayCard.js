import React from 'react'
import cardPhoto from '../assets/lemon dessert.jpg'
export default function CustomersSayCard() {
  return (
    <div className='card'>
      <p>Rating</p>
      <img src={cardPhoto} alt='' />
      <p>Name</p>
      <p>Review Text</p>
    </div>
  )
}
