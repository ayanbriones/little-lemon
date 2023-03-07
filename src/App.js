import { Route, Routes } from 'react-router-dom'
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

const initializeTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']

function updateTimes(state, action) {
  switch (action.type) {
    case 'reserve': {
      console.log('Reserved ', action.time)
      return state
    }
    default:
      return state
  }
}
function App() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes)
  const handleReserveTime = (time) => {
    dispatch({ type: 'reserve', time: time })
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
              handleReserveTime={handleReserveTime}
            />
          }
        />
        <Route path='/order-online' element={<OrderOnline />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
