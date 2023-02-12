import React from 'react'
import SpecialsCard from './SpecialsCard'

export default function Specials() {
  return (
    <section className='specials'>
      <h2>Specials</h2>
      <button className='button'>Online Menu</button>
      <SpecialsCard />
      <SpecialsCard />
      <SpecialsCard />
    </section>
  )
}
