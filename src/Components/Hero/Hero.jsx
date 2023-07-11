import React from "react";
import './Hero.css';
import { BsPinterest } from 'react-icons/bs';

const Hero = () => {
  return (
    
    <div className="page">
      <div className="page-hero">
        <div className="hero">
          <div className="iconWapper"><BsPinterest className="icon" /></div>
          <p className="text">Pinterest</p>
        </div>
      </div>
    </div>
  )
}

export default Hero;
