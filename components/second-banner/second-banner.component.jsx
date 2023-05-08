import React from 'react';
import { BannerSection, Banner, TopStroke, BottomStroke, FaqSection } from "./second-banner.styles";
import { PrimaryButton } from '../button/button.styles';
import { motion } from 'framer-motion';

const SecondBanner = () => {
  return (
    <BannerSection>
        <Banner>
            <motion.h2 initial={{opacity: 0, y: 15}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 0.2}} >OUR SERVICES <br/> KEEPS ON DELIVERING</motion.h2>
            <motion.p initial={{opacity: 0, y: 15}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 0.2}} >With Search Engine Optimization, we aim to programmatically place you on the top results on google for search queries relating to your niche, service or product. </motion.p>
            <motion.p initial={{opacity: 0, y: 15}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 0.2}}>According to google themselves, the first page of search results gets 99% of all the traffic.</motion.p>
            <motion.span initial={{opacity: 0, y: 15}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 0.2}}>
                <PrimaryButton href="#contact" scroll={false} >Get Started</PrimaryButton>
            </motion.span>
            <TopStroke>
                <motion.img src="/last-banner-dark.svg" alt="" initial={{scale: 0}} whileInView={{scale: 1}} transition={{duration: 0.5, delay: 0.1}}/>
            </TopStroke>
            <BottomStroke>
                <motion.img src="/last-banner-white.svg" alt="" initial={{scale: 0}} whileInView={{scale: 1}} transition={{duration: 0.5, delay: 0.1}}/>
            </BottomStroke>
        </Banner>

    </BannerSection>
  )
}

export default SecondBanner