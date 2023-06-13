import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="possibility section__padding" id="possibility">
    <div className="possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="possibility-content">
      <h4>Request Early Access to Get Started</h4>
      <h1 className="gradient__text">Unlock limitless possibilities<br />with our AI-powered app</h1>
      <p>Experience the convenience of effortless information consumption. Say goodbye to overwhelming texts and indulge in the pleasure of concise and coherent summaries. Our app enhances your understanding and eliminates unnecessary complexities, providing you with unparalleled assistance and enjoyment. Join us on this transformative journey.</p>
      <h4>Request Early Access to Discover More</h4>  
    </div>
  </div>
);


export default Possibility
