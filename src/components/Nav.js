import React from 'react'
import LittleLemonLogo from '../assets/Logo.svg'

export default function Nav() {
  return (
    <header className='main-header'>
      <img src={LittleLemonLogo} alt='Little Lemon Logo' />
      <nav className='nav nav-list fg-black'>
        <ul>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/'>About</a>
          </li>
          <li>
            <a href='/'>Menu</a>
          </li>
          <li>
            <a href='/'>Reservations</a>
          </li>
          <li>
            <a href='/'>Order Online</a>
          </li>
          <li>
            <a href='/'>Login</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
