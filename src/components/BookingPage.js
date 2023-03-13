import React from 'react'
import BookingForm from './BookingForm'
import '../styles/Bookings.css'

export default function BookingPage(props) {
  const { availableTimes, dispatch, submitForm } = props
  return (
    <section className='bookings'>
      <BookingForm
        availableTimes={availableTimes}
        submitForm={submitForm}
        dispatch={dispatch}
      />
    </section>
  )
}
