import React from 'react'
import LittleLemonLogo from '../assets/Logo.svg'
import Nav from './Nav'

export default function Header() {
  return (
    <header className='header'>
      <img src={LittleLemonLogo} alt='Little Lemon Logo' />
      <Nav />
    </header>
  )
}
