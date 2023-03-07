import React, { useEffect, useState } from 'react'

export default function BookingPage() {
  const [reservation, setReservation] = useState({
    date: null,
    time: null,
    guests: 0,
    occasion: '',
  })

  const handleChange = (e) => {
    console.log(e.target.name)
    const { name } = e.target
    setReservation((oldValue) => ({ ...oldValue, [name]: e.target.value }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(reservation)
  }
  useEffect(() => {
    console.log(reservation)
  })
  return (
    <section className='reservations'>
      <h1>Booking Page</h1>
      <form
        style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}
        id='reservation-form'
        onSubmit={handleSubmit}
      >
        <label htmlFor='res-date'>Choose date</label>
        <input
          type='date'
          id='res-date'
          name='date'
          value={reservation.date}
          onChange={handleChange}
        />
        <label htmlFor='res-time'>Choose time</label>
        <select
          id='res-time'
          name='time'
          value={reservation.time}
          onChange={handleChange}
        >
          <option>17:00</option>
          <option>18:00</option>
          <option>19:00</option>
          <option>20:00</option>
          <option>21:00</option>
          <option>22:00</option>
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
        <button type='submit'>Make your reservation</button>
      </form>
    </section>
  )
}
