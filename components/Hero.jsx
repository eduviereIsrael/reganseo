/* eslint-disable */
import { useState, useEffect } from 'react';

import PrimaryBtn from './PrimaryBtn';
import Image from 'next/image';

const Hero = () => {

  const [positions, setPositions] = useState(0)
  const [scrollPos, setScrollPos] = useState(0)

  useEffect(() => {

    window.addEventListener('scroll', () => {
        let scrollDigit = window.scrollY
        if (scrollPos === 0){
            setScrollPos(scrollDigit)
        } else {
            setScrollPos(scrollDigit - scrollDigit)
        }
        setPositions(prevPositions => prevPositions + (scrollDigit / 10))
    })

  }, [])

  const salesDivStyle = {
    top: `${50 + (scrollPos / 3)}px`
  }
  const mrrDivStyle = {
    top: `${150 + (scrollPos / 2)}px`
  }
  
  const trafficDivStyle = {
    top: `${165 + (scrollPos / 4)}px`
  }
  
  return (
    <div className='hero'>
        <div className="container sect-wrap">
            <div className="intro desktop">
                <h1>WE DRIVE ORGANIC TRAFFIC, SALES AND LEADS USING<span style={{color: '#06AA4D'}}> SEARCH ENGINE OPTIMIZATION</span></h1>

                <p>
                    We will increase you website traffic and Improve 
                    your conversions using SEO, that way you rely 
                    less on paid advertising and you have a new 
                    channel (with 0 recurring cost) generating revenue for your business.
                </p>

                <PrimaryBtn text='Book a call' backColor = '#1A1A1A' link='https://calendly.com/eduviereisrael/one-on-one' />

                <div className="reports">
                    <div className="sales" style={salesDivStyle}>
                        <span>Sales</span>
                        <hr />
                        <p>+400%</p>
                    </div>
                    <div className="traffic" style={trafficDivStyle}>
                        <span>Traffic</span>
                        <hr />
                        <p>+1283%</p>
                    </div>
                    <div className="mrr" style={mrrDivStyle}>
                        <span>MRR</span>
                        <hr />
                        <p>+23%</p>
                    </div>
                </div>

                <img src='/herodesk.webp'/>

            </div>

            <div className="intro-mob mobile">
                <h1>WE DRIVE ORGANIC TRAFFIC, SALES AND LEADS USING<span style={{color: '#06AA4D'}}> SEARCH ENGINE OPTIMIZATION.</span></h1>

                <img src='/hero-mob.webp' alt='team-picture' />

                <p>
                    We will increase you website traffic and Improve 
                    your conversions using SEO, that way you spend 
                    less on paid advertising and you have a new 
                    channel (with no recurring cost) generating revenue for your business.
                </p>

                <PrimaryBtn text='Book a call' backColor = '#1A1A1A' link='empty' />

                <div className="reports">
                    <div className="sales">
                        <span>Sales</span>
                        <hr />
                        <p>+400%</p>
                    </div>
                    <div className="traffic" >
                        <span>Traffic</span>
                        <hr />
                        <p>+1283%</p>
                    </div>
                    <div className="mrr" >
                        <span>MRR</span>
                        <hr />
                        <p>+23%</p>
                    </div>
                </div>


            </div>
        </div>
    </div>
  )
}

export default Hero