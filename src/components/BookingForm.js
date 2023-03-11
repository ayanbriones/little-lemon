import React, { useState } from 'react'

export default function BookingForm(props) {
  const { availableTimes, dispatch } = props
  const [reservation, setReservation] = useState({
    date: new Date(),
    guests: 2,
    time: '17:00',
    occasion: 'Birthday',
  })
  const handleChange = (e) => {
    const { name } = e.target
    setReservation((oldValue) => ({ ...oldValue, [name]: e.target.value }))
    if (name === 'date') {
      dispatch({ type: 'select_date', payload: e.target.value })
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({ type: 'submit', payload: reservation })
  }
  return (
    <form
      style={{ display: 'grid' }}
      id='reservation-form'
      onSubmit={handleSubmit}
    >
      <h2>Book Now</h2>
      <label htmlFor='res-date'>Choose date</label>
      <input
        type='date'
        id='res-date'
        name='date'
        required
        value={reservation.date}
        onChange={handleChange}
      />
      <label htmlFor='res-time'>Choose time</label>
      <select
        id='res-time'
        name='time'
        required
        placeholder='Choose time'
        value={reservation.time}
        onChange={handleChange}
      >
        {availableTimes.map((time) => (
          <option key={time}>{time}</option>
        ))}
      </select>
      <label htmlFor='guests'>Number of guests</label>
      <input
        type='number'
        placeholder='1'
        min='1'
        max='10'
        id='guests'
        name='guests'
        value={reservation.guests}
        onChange={handleChange}
      />
      <label htmlFor='occasion'>Occasion</label>
      <select
        id='occasion'
        name='occasion'
        value={reservation.occasion}
        onChange={handleChange}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <button type='submit' className='button bg-yellow'>
        Make your reservation
      </button>
    </form>
  )
}
