import React from 'react'
import '../../App.css'
import './HeroSection.css'
import {Button} from "../button/Button";

const HeroSection = () => {
  return (
    <div className='hero-container'>
        {/* <video src='../../assets/video-1.mp4' autoPlay loop muted /> */}
        <h1>My Photoshop Projects</h1>
        <p>Take a look!</p>
        <div className='hero-btns'>
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>TAKE A LOOK</Button>
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>MORE INFO</Button>
        </div>
    </div>
  )
}

export default HeroSection