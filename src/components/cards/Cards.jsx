import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import treeskulls from "../../assets/treeskulls.jpeg"
import dragon from "../../assets/dragon.png"
import mountain from "../../assets/mountain.png"
import ec from "../../assets/ec.jpeg"
import tgg from "../../assets/tgg.jpeg"

const Cards = () => {
  return (
    <div className='cards'>
        <h1>Check out some of my projects</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem 
                    src= {treeskulls}
                    text="Tree made of skulls"
                    label ="horror"
                    path="/arts"
                    />
                    <CardItem 
                    src= {dragon}
                    text="Dragon"
                    label ="horror"
                    path="/arts"
                    />
                </ul>
                <ul className="cards__items">
                    <CardItem 
                    src= {mountain}
                    text="Looking out on a mountain"
                    label ="Night"
                    path="/arts"
                    />
                    <CardItem 
                    src= {tgg}
                    text="Giveaway Vouchers"
                    label ="Freelance"
                    path="/projects"
                    />
                    <CardItem 
                    src= {ec}
                    text="Promotional Poster"
                    label ="Freelance"
                    path="/projects"
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards