import React from 'react'
import footerPhoto from '../assets/restauranfood.jpg'
export default function Footer() {
  return (
    <footer className='footer fg-green'>
      <div className='doormat'>
        <div className='image-wrapper'>
          <img src={footerPhoto} alt='' />
        </div>
        <div className='wrapper'>
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
      </div>
      <div className='contacts'>
        <h4>Contact</h4>
        <p>Address</p>
        <p>Phone number</p>
        <p>Email@email.com</p>
      </div>
      <div className='social-media'>
        <h4>Social Media Links</h4>
        <p>Address</p>
        <p>Phone number</p>
        <p>Email@email.com</p>
      </div>
    </footer>
  )
}
