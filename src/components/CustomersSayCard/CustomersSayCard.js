import React from 'react'
import cardPhoto from '../../assets/74.jpg'
export default function CustomersSayCard() {
  return (
    <div className='card bg-gray'>
      <p>Rating</p>
      <div className='wrapper'>
        <div className='image-wrapper'>
          <img src={cardPhoto} alt='' />
        </div>
        <p>Michael Ruiz</p>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ducimus
        explicabo sed molestiae voluptatum aperiam dignissimos reprehenderit
        tempora ipsam et perspiciatis itaque, aut rem! Fuga perspiciatis
        distinctio molestiae cumque doloribus.
      </p>
    </div>
  )
}
