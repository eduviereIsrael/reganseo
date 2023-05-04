/* eslint-disable */

import React from 'react'
import { TestimonialContainer, TestinialDiv, Name, Testimony } from './testimonial.styles';
import { motion } from 'framer-motion';

const Testimonial = () => {
  return (
    <TestimonialContainer>
        <TestinialDiv>
            <motion.img src="/sir-Gideon.png" alt="" initial={{opacity: 0, y: 15}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 0.2}} />
            <motion.div initial={{opacity: 0, y: 15}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 0.3}}>
                <Testimony>They did a really good job. We are glad we worked with ReganSEO on the Collaks website project. It&apos;s really great how our website presents our brand and managed all areas of our specialization, and also the way they took time to focus on the things that matters most. We will do more projects with them going on.</Testimony>
                <Name>- GIDEON OLADELE, CEO, COLLAKS CARE.</Name>
            </motion.div>
        </TestinialDiv>
    </TestimonialContainer>
  )
}

export default Testimonial