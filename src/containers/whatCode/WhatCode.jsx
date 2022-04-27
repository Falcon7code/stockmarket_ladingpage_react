import React from 'react';
import './whatCode.css';
import Feature from '../../components/feature/Feature';

const WhatCode = () => (
  
  <div className="gpt_whatcode " id="whatcode">
    <div className="gpt_whatcode-feature">
      <Feature title="What is TCB" text="TCB is the world inovative company that recognizes disruptive innovation that causes rapid cost declines, cuts across sectors, and spawns further innovation. Through an iterative investment process, combining top-down and bottom-up research, ARK aims to identify innovation early, capitalize on the opportunities, and provide long-term value to investors." />
    </div>
    <div className="gpt_whatcode-heading">
      <h1 className="gradient_text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt_whatcode-container">
      <Feature title="Fintech Innovation" text=" We aim to provide exposure to fintech innovations including mobile payments, digital wallets, peer-to-peer lending, blockchain technology, and financial risk transformation. These innovations should revolutionize the financial industry, impacting every sector of the global economy." />
      <Feature title="Disruptive Innovation" text="We aim  to provide broad exposure to disruptive innovation. ARK believes innovations centered around artificial intelligence, robotics, energy storage, DNA sequencing, and blockchain technology will change the way the world works and deliver outsized growth as industries transform." />
      <Feature title="Autonomous Tech" text="We seek to provide exposure to autonomous mobility, electric vehicles, robotics and automation, 3D printing, and space exploration. Advancements in these areas are enhancing productivity while reducing costs and transforming manufacturing, production, and infrastructure." />
      <Feature title="Real Estate" text="We are a leading global investor in real estate and real estate-related assets. We invest in the debt and equity of commercial and residential properties and portfolios, as well as directly into real estate operating companies and servicing platforms that can provide our investments with a competitive edge to drive value." />
    </div>
  </div>
);

export default WhatCode;