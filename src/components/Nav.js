import React from 'react'
import { Link } from 'react-router-dom'
import LittleLemonLogo from '../assets/Logo.svg'

export default function Nav() {
  return (
    <header className='main-header'>
      <Link to='/'>
        <img src={LittleLemonLogo} alt='Little Lemon Logo' />
      </Link>
      <nav className='nav nav-list fg-black'>
        <ul>
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
