import React from 'react'
import Check from '../Check/Check'
import './ConfirmedBooking.css'

export default function ConfirmedBooking(props) {
  return (
    <section className='confirmed-booking'>
      <Check />
      <h2>Reservation Confirmed!</h2>
      <p>Date {props.date}</p>
      <p>Time {props.time}</p>
    </section>
  )
}
