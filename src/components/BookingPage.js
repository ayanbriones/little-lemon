import React from 'react'
import BookingForm from './BookingForm'

export default function BookingPage(props) {
  const { availableTimes, handleReserveTime } = props
  return (
    <section className='reservations'>
      <h1>Booking Page</h1>
      <BookingForm
        availableTimes={availableTimes}
        handleReserveTime={handleReserveTime}
      />
    </section>
  )
}
