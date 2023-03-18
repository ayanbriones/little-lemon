import { fireEvent, render, screen, waitFor, act } from '@testing-library/react'
import BookingForm from '../BookingForm'

const availableTimes = ['7:00', '7:30', '8:00', '8:30']
const mockDispatch = jest.fn()
const mockSubmitForm = jest.fn()
describe('BookingForm', () => {
  it('renders BookingForm without crashing', async () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    )
  })

  //   it('should accept date', async () => {
  //     render(
  //       <BookingForm
  //         availableTimes={availableTimes}
  //         dispatch={mockDispatch}
  //         submitForm={mockSubmitForm}
  //       />
  //     )
  //     await waitFor(async () => {
  //       const inputDateElement = await screen.findByLabelText(/choose date/i)
  //       const today = '2023-03-19'
  //       await fireEvent.change(inputDateElement, { target: { value: today } })

  //       expect(inputDateElement.value).toBe(today)
  //     })
  //   })
  //   it('should display available times first value', async () => {
  //     render(
  //       <BookingForm
  //         availableTimes={availableTimes}
  //         dispatch={mockDispatch}
  //         submitForm={mockSubmitForm}
  //       />
  //     )

  //     const selectTimeElement = screen.getByLabelText(/choose time/i)
  //     await waitFor(() => {
  //       expect(selectTimeElement.value).toBe('')
  //     })
  //   })
  //   it('should accepts 1 - 10 number of guests', async () => {
  //     render(
  //       <BookingForm
  //         availableTimes={availableTimes}
  //         dispatch={mockDispatch}
  //         submitForm={mockSubmitForm}
  //       />
  //     )
  //     const inputNumberOfGuests = screen.getByLabelText(/number of guests/i)
  //     fireEvent.change(inputNumberOfGuests, { target: { value: 3 } })
  //     await waitFor(() => {
  //       expect(inputNumberOfGuests.valueAsNumber).toBeGreaterThanOrEqual(1)
  //     })
  //     await waitFor(() => {
  //       expect(inputNumberOfGuests.valueAsNumber).toBeLessThanOrEqual(10)
  //     })
  //   })
  //   it('should display occasion', async () => {
  //     render(
  //       <BookingForm
  //         availableTimes={availableTimes}
  //         dispatch={mockDispatch}
  //         submitForm={mockSubmitForm}
  //       />
  //     )
  //     const selectOccasion = screen.getByLabelText(/occasion/i)
  //     fireEvent.change(selectOccasion, { target: { value: 'Birthday' } })
  //     await waitFor(() => {
  //       expect(selectOccasion.value).toBe('Birthday')
  //     })
  //   })
})
