import React from 'react'

import { Footer, Blog, Possibility, Features, WhatCode, Header,} from './containers';
import {Article, Brand, Cta, Feature, Navbar } from './components';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient_bg'> 
        < Navbar/>
        <Header />
        </div>
        <Brand />
        <WhatCode />
        <Features />
        <Possibility />
        <Cta />
        <Blog />
        <Footer />
    </div>
  )
}

export default App