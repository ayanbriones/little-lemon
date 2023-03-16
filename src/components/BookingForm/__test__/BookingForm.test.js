import { fireEvent, render, screen } from '@testing-library/react'
import BookingForm from '../BookingForm'

const availableTimes = ['7:00', '7:30', '8:00', '8:30']
const mockDispatch = jest.fn()
const mockSubmitForm = jest.fn()
describe('BookingForm', () => {
  it('renders BookingForm without crashing', () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    )
  })

  it('should accept date', () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    )
    const inputDateElement = screen.getByLabelText(/choose date/i)
    const today = '2023-03-19'
    fireEvent.change(inputDateElement, { target: { value: today } })
    expect(inputDateElement.value).toBe(today)
  })
  it('should display available times first value', () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    )
    const selectTimeElement = screen.getByLabelText(/choose time/i)
    expect(selectTimeElement.value).toBe(availableTimes[0])
  })
  it('should accepts 1 - 10 number of guests', () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    )
    const inputNumberOfGuests = screen.getByLabelText(/number of guests/i)
    fireEvent.change(inputNumberOfGuests, { target: { value: 3 } })
    expect(inputNumberOfGuests.valueAsNumber).toBeGreaterThanOrEqual(1)
    expect(inputNumberOfGuests.valueAsNumber).toBeLessThanOrEqual(10)
  })
  it('should display occasion', () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    )
    const selectOccasion = screen.getByLabelText(/occasion/i)
    fireEvent.change(selectOccasion, { target: { value: 'Birthday' } })
    expect(selectOccasion.value).toBe('Birthday')
  })
})
