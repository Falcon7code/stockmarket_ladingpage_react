import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="gpt_header section_padding" id="home">
    <div className="gpt_header-content">
    <h1 className="gradient_text">We Invest Solely In Disruptive Innovation</h1>
      <p>We recognizes that disruptive innovation causes rapid cost declines, cuts across sectors, and spawns further innovation. Through an iterative investment process, combining top-down and bottom-up research, ARK aims to identify innovation early, capitalize on the opportunities, and provide long-term value to investors.</p>

      <div className="gpt_header-content_input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="gpt_header-content_people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="gpt_header-image">
      <img src={ai} />
    </div>
    
  </div>
);

export default Header;
