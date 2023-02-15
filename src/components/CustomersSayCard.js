import React from 'react'
import cardPhoto from '../assets/74.jpg'
export default function CustomersSayCard() {
  return (
    <div className='card bg-gray'>
      <p>Rating</p>
      <div className='wrapper'>
        <img src={cardPhoto} alt='' />
        <p>Michael Ruiz</p>
      </div>
      <p>Review Text</p>
    </div>
  )
}
