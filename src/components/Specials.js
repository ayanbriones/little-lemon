import React from 'react'
import SpecialsCard from './SpecialsCard'

export default function Specials() {
  return (
    <section className='specials'>
      <header>
        <h2>Specials</h2>
        <button className='button bg-yellow'>Online Menu</button>
      </header>
      <div className='cards'>
        <SpecialsCard />
        <SpecialsCard />
        <SpecialsCard />
      </div>
    </section>
  )
}
