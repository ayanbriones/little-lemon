import React from 'react'
import LittleLemonLogo from '../assets/Logo.svg'

export default function Nav() {
  return (
    <header className='main-header'>
      <img src={LittleLemonLogo} alt='Little Lemon Logo' />
      <nav className='nav'>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservations</li>
          <li>Order Online</li>
          <li>Login</li>
        </ul>
      </nav>
    </header>
  )
}
