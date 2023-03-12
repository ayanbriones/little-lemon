import React from 'react'
import Chicago from './Chicago'
import CustomersSay from './CustomersSay'
import Specials from './Specials'

export default function HomePage() {
  return (
    <main className='main'>
      <Specials />
      <CustomersSay />
      <Chicago />
    </main>
  )
}
