import React from 'react'

export default function SpecialsCard({ img, title, price, info }) {
  return (
    <div className='card bg-gray'>
      <img src={img} alt='Card' />
      <div className='wrapper'>
        <div className='card-title'>
          {title}
          <span className='highlight-text fg-red'>{price}</span>
        </div>
        <p className='description fg-green'>{info}</p>
        <p className='delivery'>Order a delivery</p>
      </div>
    </div>
  )
}
