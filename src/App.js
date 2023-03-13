import { Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import About from './components/About'
import Footer from './components/Footer'
import HomePage from './components/HomePage'
import OrderOnline from './components/OrderOnline'
import Menu from './components/Menu'
import Nav from './components/Nav'
import Login from './components/Login'
import BookingPage from './components/BookingPage'
import { useReducer } from 'react'
import { fetchAPI, submitAPI } from './api.js'
import ConfirmedBooking from './components/ConfirmedBooking'

const initializeTimes = () => {
  return fetchAPI(new Date())
}
const updateTimes = (state, action) => {
  switch (action.type) {
    case 'select_date': {
      const result = fetchAPI(new Date(action.payload))
      return result
    }
    default:
      return state
  }
}
function App() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes())
  const navigate = useNavigate()

  const submitForm = async (formData) => {
    const result = await submitAPI(formData)
    if (result === true) {
      navigate('/success')
    }
  }
  return (
    <div className='container'>
      <Nav />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<About />} />
        <Route path='/menu' element={<Menu />} />
        <Route
          path='/reservations'
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />
        <Route path='/order-online' element={<OrderOnline />} />
        <Route path='/login' element={<Login />} />
        <Route path='/success' element={<ConfirmedBooking />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
