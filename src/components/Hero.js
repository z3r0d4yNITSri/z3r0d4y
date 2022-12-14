import React from 'react';
import logo from "../Assets/logo.jpg";
import clglogo from "../Assets/clglogo.jpg"
import "../Styles/Hero.css";

function Hero() {
  return (
    <div className='hero'>
      
       <div className='hero__text'>
       <p className='line1'>Welcome to the official <span className='red'>Cyber</span><span className='white'>security</span> Club of <span className='red'>NIT</span> <span className='white'>Srinagar</span> </p>
       <img className='logo' src={logo} alt="" />
       <img className='clglogo' src={clglogo} alt="" />
       <p className='line2'>Security isn’t something you buy, it’s something you do,</p>
       <p className='line2'> and it takes <span className='red'>talented</span> people to do it <span className='red'>right</span>.</p>
      {/* <button className='btn'>Join Us</button> */}
       </div>
    </div>
  )
}

export default Hero
