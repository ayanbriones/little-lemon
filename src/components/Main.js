import React from 'react'
import CallToAction from './CallToAction'
import CustomersSay from './CustomersSay'
import Specials from './Specials'

export default function Main() {
  return (
    <main className='main'>
      <CallToAction />
      <Specials />
      <CustomersSay />
    </main>
  )
}
