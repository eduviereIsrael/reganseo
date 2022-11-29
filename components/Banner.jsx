import React from 'react'
import PrimaryBtn from './PrimaryBtn'

const Banner = () => {
  return (
    <div className='banner'>
        <div className="container sect-wrap">
            <div className="banner-cont">
            <h2>Get better results</h2>
            <p>Connecting with thousands of your warm audience every month is a sure way to establish a solid foundation, especially when it comes with no recurring cost.</p>
            <PrimaryBtn text='Book a call' backColor = '#1A1A1A' link='https://calendly.com/eduviereisrael/one-on-one' />
            </div>
            
        </div>
        
    </div>
  )
}

export default Banner