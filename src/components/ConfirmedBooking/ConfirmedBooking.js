import React from 'react'
import Check from '../Check/Check'
import './ConfirmedBooking.css'

export default function ConfirmedBooking() {
  return (
    <section className='confirmed-booking'>
      <Check />
      <h2>Reservation Confirmed!</h2>
    </section>
  )
}
