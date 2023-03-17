import React from 'react'
import CustomersSayCard from '../CustomersSayCard/CustomersSayCard'
import './CustomersSay.css'
import img1 from '../../assets/74.jpg'
import img2 from '../../assets/90.jpg'
import img3 from '../../assets/92.jpg'
import img4 from '../../assets/94.jpg'

export default function CustomersSay() {
  return (
    <section className='customers-say'>
      <header>
        <h2>Testimonials</h2>
      </header>
      <div className='cards'>
        <CustomersSayCard
          img={img1}
          name='Michael Ruiz'
          review='Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ducimus
        explicabo sed molestiae voluptatum aperiam dignissimos reprehenderit
        tempora ipsam et perspiciatis itaque, aut rem! Fuga perspiciatis
        distinctio molestiae cumque doloribus.'
        />
        <CustomersSayCard
          img={img2}
          name='Joel McDonalid'
          review='Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ducimus
        explicabo sed molestiae voluptatum aperiam dignissimos reprehenderit
        tempora ipsam et perspiciatis itaque, aut rem! Fuga perspiciatis
        distinctio molestiae cumque doloribus.'
        />
        <CustomersSayCard
          img={img3}
          name='Herbert Porter'
          review='Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ducimus
        explicabo sed molestiae voluptatum aperiam dignissimos reprehenderit
        tempora ipsam et perspiciatis itaque, aut rem! Fuga perspiciatis
        distinctio molestiae cumque doloribus.'
        />
        <CustomersSayCard
          img={img4}
          name='Gina Hunter'
          review='Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ducimus
        explicabo sed molestiae voluptatum aperiam dignissimos reprehenderit
        tempora ipsam et perspiciatis itaque, aut rem! Fuga perspiciatis
        distinctio molestiae cumque doloribus.'
        />
      </div>
    </section>
  )
}
