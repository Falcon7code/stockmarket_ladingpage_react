import React, { useState } from 'react';
import {RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo.png';


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3_navbar">
      <div className="gpt3_navbar-links">
        <div className="gpt3_navbar-links_logo">
          <img src={logo} />
        </div>
        <div className="gpt3_navbar-links_container">
          <p> <a href='#home'>Home</a></p>
          <p> <a href='#wcode'>Artificial Intelligence</a></p>
          <p> <a href='#possibility'>Autonomous Tech</a></p>
          <p> <a href='#features'>Cryptocurrencies</a></p>
          <p> <a href='#features'>Fintech</a></p>
          <p> <a href='#blog'>Blog</a></p>
        </div>
      </div>
      <div className="gpt3_navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="gpt3_navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3_navbar-menu_container scale-up-center">
          <div className="gpt3_navbar-menu_container-links">
          <p> <a href='#home'>Home</a></p>
          <p> <a href='#wcode'>A.I</a></p>
          <p> <a href='#features'>Crypto</a></p>
          <p> <a href='#features'>Fintech</a></p>
          <p> <a href='#possibility'>Auto Tech</a></p>
          <p> <a href='#blog'>Blog</a></p>
          </div>
          <div className="gpt3_navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  )
}

export default Navbar;
