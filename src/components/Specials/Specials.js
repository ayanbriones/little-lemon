import React from 'react'
import SpecialsCard from '../SpecialsCard/SpecialsCard'
import './Specials.css'
import greekSaladImg from '../../assets/greek salad 269x209.jpg'
import lemonDessertImg from '../../assets/lemon dessert.jpg'
import gourmetImg from '../../assets/gourmet.jpeg'

export default function Specials() {
  return (
    <section className='specials'>
      <div className='wrapper'>
        <header>
          <h2>Specials</h2>
          <button className='button bg-yellow'>Online Menu</button>
        </header>
        <div className='cards'>
          <SpecialsCard
            img={greekSaladImg}
            title='Greek Salad'
            price={12.99}
            info=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quasi quo magnam amet, repellendus blanditiis labore culpa expedita soluta veniam cumque sunt adipisci, commodi minus ut nemo repellat esse nihil?'
          />
          <SpecialsCard
            img={lemonDessertImg}
            title='Lemon Dessert'
            price={11.99}
            info=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quasi quo magnam amet, repellendus blanditiis labore culpa expedita soluta veniam cumque sunt adipisci, commodi minus ut nemo repellat esse nihil?'
          />
          <SpecialsCard
            img={gourmetImg}
            title='Gourmet Dessert'
            price={10.99}
            info=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quasi quo magnam amet, repellendus blanditiis labore culpa expedita soluta veniam cumque sunt adipisci, commodi minus ut nemo repellat esse nihil?'
          />
        </div>
      </div>
    </section>
  )
}
