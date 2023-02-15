import React from 'react'
import footerPhoto from '../assets/restauranfood.jpg'
export default function Footer() {
  return (
    <footer className='footer fg-green'>
      <img src={footerPhoto} height={300} alt='' />
      <div className='doormat'>
        <h4>
          Doormat <br />
          Navigation
        </h4>
        <ul className='nav-list'>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservations</li>
          <li>Order Online</li>
          <li>Login</li>
        </ul>
      </div>
      <div className='contact'>
        <h4>Contact</h4>
        <p>Address</p>
        <p>Phone number</p>
        <p>Email@email.com</p>
      </div>
      <div className='social_media'>
        <h4>Social Media Links</h4>
        <p>Address</p>
        <p>Phone number</p>
        <p>Email@email.com</p>
      </div>
    </footer>
  )
}
