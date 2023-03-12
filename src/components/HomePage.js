import React from 'react'
import Chicago from './Chicago'
import CustomersSay from './CustomersSay'
import Specials from './Specials'
import CallToAction from './CallToAction'

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
