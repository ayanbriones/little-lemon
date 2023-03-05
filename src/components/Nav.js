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
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/menu'>Menu</Link>
          </li>
          <li>
            <Link to='/reservations'>Reservations</Link>
          </li>
          <li>
            <Link to='/order-online'>Order Online</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
