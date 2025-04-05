import React from 'react';
import './Hero.css';
import HeroImg from '../assets/hero-img.png';
import icon from '../assets/icon.svg'
function Hero() {
  return (
    <div className="hero-main">
      <div className="hero">
        <div className="container hero__container">
          <div className="hero-left">
            <h2>Next genaretion platform</h2>
            <h1>Artificial intelligence & Syber security</h1>
            <p>
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.
            </p>
            <div className="btn">
              <button>Get Started</button>
              <div className="hero-btn">
                <button>
                  <img src={icon} alt="icon"  width={27}/> Watch Video
                </button>
              </div>
            </div>
          </div>
          <div className="hero-right">
            <img src={HeroImg} alt="heroImg" width={632} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
