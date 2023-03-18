import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup'

export default function BookingForm(props) {
  const { availableTimes, dispatch, submitForm } = props
  const formik = useFormik({
    initialValues: {
      date: '',
      guests: 2,
      time: '',
      occasion: '',
    },
    validationSchema: Yup.object({
      date: Yup.date().required('Required'),
      guests: Yup.number()
        .max(10, 'Must be atleast 1 and maximum of 10')
        .required('Required'),
      time: Yup.string().required('Required'),
      occasion: Yup.string().required('Required'),
    }),

    onSubmit: (values) => {
      submitForm(formik.values)
      console.log('formik submit', values)
    },
  })
  // const [reservation, setReservation] = useState({
  //   date: new Date().toLocaleDateString(),
  //   guests: 2,
  //   time: '17:00',
  //   occasion: 'Birthday',
  // })
  // const handleChange = (e) => {
  //   const { name } = e.target
  //   setReservation((oldValue) => ({ ...oldValue, [name]: e.target.value }))
  //   if (name === 'date') {
  //     dispatch({ type: 'select_date', payload: e.target.value })
  //   }
  // }
  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   console.log(reservation)
  //   submitForm(reservation)
  // }
  return (
    <form
      style={{ display: 'grid' }}
      id='reservation-form'
      onSubmit={formik.handleSubmit}
    >
      <h2>Book Now</h2>
      <label htmlFor='res-date'>Choose date</label>
      <input
        type='date'
        id='res-date'
        name='date'
        value={formik.values.date}
        onChange={(e) => {
          formik.handleChange(e)
          dispatch({ type: 'select_date', payload: e.target.value })
        }}
        onBlur={formik.handleBlur}
        aria-label='On Click'
      />
      {formik.touched.date && formik.errors.date ? (
        <div className='input-error'>{formik.errors.date}</div>
      ) : null}
      <label htmlFor='time'>Choose time</label>
      <select
        id='time'
        name='time'
        placeholder='Choose time'
        {...formik.getFieldProps('time')}
        aria-label='On Click'
      >
        <option value=''>Please select time</option>
        {availableTimes.map((time) => (
          <option key={time}>{time}</option>
        ))}
      </select>
      {formik.touched.time && formik.errors.time ? (
        <div className='input-error'>{formik.errors.time}</div>
      ) : null}
      <label htmlFor='guests'>Number of guests</label>
      <input
        type='number'
        placeholder='1'
        min='1'
        max='10'
        id='guests'
        name='guests'
        {...formik.getFieldProps('guests')}
        aria-label='On Click'
      />
      {formik.touched.guests && formik.errors.guests ? (
        <div className='input-error'>{formik.errors.guests}</div>
      ) : null}
      <label htmlFor='occasion'>Occasion</label>
      <select
        id='occasion'
        name='occasion'
        {...formik.getFieldProps('occasion')}
        aria-label='On Click'
      >
        <option value=''>Please select</option>
        <option>Birthday</option>
        <option>Anniversary</option>
        <option>Others</option>
      </select>
      {formik.touched.occasion && formik.errors.occasion ? (
        <div className='input-error'>{formik.errors.occasion}</div>
      ) : null}
      <button
        type='submit'
        className='submit button bg-yellow'
        aria-label='On Click'
      >
        Make your reservation
      </button>
    </form>
  )
}
