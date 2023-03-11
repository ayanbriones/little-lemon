import React from 'react'

export default function ReservationResult(props) {
  return (
    <div>
      <h2>Reservation Confirmed!</h2>
      <p>Date {props.date}</p>
      <p>Time {props.time}</p>
    </div>
  )
}
