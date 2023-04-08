/* eslint-disable */

import React from 'react'

const about = "With 5 years of experience in designing and building websites, we understand the importance of creating websites that not only look great but also function seamlessly. Our team works closely with each client to ensure that their website reflects their brand's unique identity and effectively communicates their message to their target audience.In addition to designing and building websites, we also specialize in SEO optimization. We use the latest techniques and strategies to improve our clients' search engine rankings, increase their organic traffic, and ultimately boost their monthly revenue. We take pride in our ability to provide personalized service to each of our clients. Our team is dedicated to understanding each client's specific goals and challenges and tailoring our services to meet their unique needs."

const About = () => {
  return (
    <div className='about'>
        <div className="container">
            <div className="left">
                <img src="/logo.svg" alt="" />
            </div>
            <div className="right">
                <p className="small-text">{about}</p>
            </div>
        </div>

    </div>
  )
}

export default About