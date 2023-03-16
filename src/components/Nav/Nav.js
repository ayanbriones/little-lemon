import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import LittleLemonLogo from '../../assets/Logo.svg'
import './Nav.css'
import Hamburger from '../Hamburger/Hamburger'

export default function Nav() {
  const [toggleNav, setToggleNav] = useState(false)
  const handleClick = () => {
    setToggleNav((oldvalue) => !oldvalue)
  }
  return (
    <header className='main-header'>
      <Link to='/'>
        <img
          src={LittleLemonLogo}
          alt='Little Lemon Logo'
          className='little-lemon-logo'
        />
      </Link>
      <button className='hamburger' onClick={handleClick}>
        <Hamburger />
      </button>
      <nav className={`nav fg-black ${toggleNav ? '' : 'nav-close'}`}>
        <ul className='nav-list'>
          <Link to='/'>
            <li>Home</li>
          </Link>
          <Link to='/about'>
            <li>About</li>
          </Link>
          <Link to='/menu'>
            <li>Menu</li>
          </Link>
          <Link to='/reservations'>
            <li>Reservations</li>
          </Link>
          <Link to='/order-online'>
            <li>Order Online</li>
          </Link>
          <Link to='/login'>
            <li>Login</li>
          </Link>
        </ul>
      </nav>
    </header>
  )
}
