import React from 'react'
import LittleLemonLogo from '../assets/Logo.svg'

export default function Header() {
  return (
    <header className='header'>
      <img src={LittleLemonLogo} alt='Little Lemon Logo' />
    </header>
  )
}
