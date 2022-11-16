/* eslint-disable */

import {useState, useEffect} from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {

  
  const [navClick, setNavClick] = useState(false)
  const [scroll, setScroll] = useState(false)
  const navLinks = [
    {
      name: 'Home',
      url: '/'
    },
    {
      name: 'Our Services',
      url: '/services'
    },
    {
      name: 'About Us',
      url: '/about'
    },
    {
      name: 'Our Blog',
      url: '/blog'
    },
    {
      name: 'Contact Us',
      url: '/contact'
    },
  ]
  useEffect(() => {
    window.addEventListener('scroll', () => {
        // alert('hello')

        if(window.scrollY > 0){
            setScroll(true)
        } else {
            setScroll(false)
        }
    })

  }, [])
  
  return (
    <>
        <div className={scroll? 'header window-scroll' : 'header'}>
            <div className="sect-wrap head-container">
                <div className='logo-div'>
                    <img src='/assets-1/logo.svg' alt='Throve design agency logo'/>
                    {/* <span className='logo'></span> */}
                </div>
                <div className='menu-div'>
                    <div className="menu-items">
                      <Link href='/'>
                        <p>Home</p>
                      </Link>
                      <Link href=''>
                        <p>Our Services</p>
                      </Link>
                      <Link href='/about'>
                        <p>About Us</p>
                      </Link>
                      <Link href=''>
                        <p>Our Blog</p>
                      </Link>
                      <Link href='/contact'>
                        <p>Contact Us</p>
                      </Link>
                    </div>
                    <div className={navClick? 'hambuga spin': 'hambuga'} onClick={() => {setNavClick(!navClick)}}>
                        <div className='ham dis'></div>
                        <div className='ham spins'></div>
                        <div className='ham spins-i'></div>
                        {/* <div className='ham dis'></div> */}
                    </div>
                </div>
            </div>
        </div>
        <div className={navClick? "mob-menu-div menu-show": "mob-menu-div "}>
            <div className="mob-menu-div-cont">
              {navLinks.map((item, i) => (
                <Link href={item.url} key={i}>
                  <p onClick = {() => setNavClick(false)}>{item.name}</p>
                </Link>
              ))}
              
            </div>
        </div>
    </>
    
  )
}

export default Navbar