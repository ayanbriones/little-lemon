import React from 'react'
export default function CustomersSayCard({ img, name, review }) {
  return (
    <div className='card bg-gray'>
      <p>Rating ⭐️⭐️⭐️⭐️⭐️</p>
      <div className='wrapper'>
        <div className='image-wrapper'>
          <img src={img} alt='' />
        </div>
        <p>{name}</p>
      </div>
      <p>{review}</p>
    </div>
  )
}
