/* eslint-disable */

import {useState, useEffect} from 'react';
import Link from 'next/link';

const Navbar = () => {

 
  return (
    <>
        <header className='header'>
            <div className="head-container">
                <div className='logo-div'>
                    <img src='/logo-v3-svg.svg' alt='regan logo'/>
                    {/* <span className='logo'></span> */}
                </div>
                <a href='#contact'>CONTACT US</a>
                
               
            </div>
        </header>
    </>
    
  )
}

export default Navbar