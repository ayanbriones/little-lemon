import React from 'react'
import Chicago from '../Chicago/Chicago'
import CustomersSay from '../CustomersSay/CustomersSay'
import Specials from '../Specials/Specials'
import CallToAction from '../CallToAction/CallToAction'

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
