import React from 'react'
import CallToAction from './CallToAction'
import Chicago from './Chicago'
import CustomersSay from './CustomersSay'
import Specials from './Specials'

export default function HomePage() {
  return (
    <main className='main'>
      <CallToAction />
      <Specials />
      <CustomersSay />
      <Chicago />
    </main>
  )
}
