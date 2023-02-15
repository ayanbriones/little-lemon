import React from 'react'
import CustomersSayCard from './CustomersSayCard'

export default function CustomersSay() {
  return (
    <section className='customers-say'>
      <header>
        <h2>Testimonials</h2>
      </header>
      <div className='cards'>
        <CustomersSayCard />
        <CustomersSayCard />
        <CustomersSayCard />
        <CustomersSayCard />
      </div>
    </section>
  )
}
