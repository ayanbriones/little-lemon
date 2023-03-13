import { fireEvent, render, screen } from '@testing-library/react'
import { Link } from 'react-router-dom'
import App from './App'
import BookingForm from './components/BookingForm'
import BookingPage from './components/BookingPage'
import HomePage from './components/HomePage'

test('Renders the BookingForm heading', () => {
  render(<BookingForm />)
  const dateInput = screen.getByLabelText('Choose date')
  expect(dateInput).toBeInTheDocument()
  // fireEvent.change(dateInput, { target: { value: '13-03-2023' } })
  // const timeSelect = screen.getByLabelText('Choose time')
  // fireEvent.click(timeSelect)
})

it('Renders the homepage', () => {
  // render(<Nav />)
  // const reservation = screen.getByText('Reserve a table')
  // expect(reservation).toBeInTheDocument()
  // render(<BookingForm />)
  // const oldAvailableTimes = screen.getByLabelText('Choose time')
  // const dateInput = screen.getByLabelText('Choose date')
  // expect(oldAvailableTimes).toBeInTheDocument()
  // expect(dateInput).toBeInTheDocument()
})
