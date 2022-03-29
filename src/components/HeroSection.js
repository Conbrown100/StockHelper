import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/real-time-stocks.mp4' autoPlay loop muted />
      <h1>StockHelper</h1>
      <p>View your favorite stocks!</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Sign up
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Sign in
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
