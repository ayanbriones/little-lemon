import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './components/About'
import Footer from './components/Footer'
import HomePage from './components/HomePage'
import Reservations from './components/Reservations'
import OrderOnline from './components/OrderOnline'
import Menu from './components/Menu'
import Nav from './components/Nav'
import Login from './components/Login'

function App() {
  return (
    <div className='container'>
      <Nav />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<About />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/reservations' element={<Reservations />} />
        <Route path='/order-online' element={<OrderOnline />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
