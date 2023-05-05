import React from 'react';
import { Banner, BannerSection, BottomStroke, TopStroke } from './first-banner.styles';
import { SecondaryButton } from '../button/button.styles';
import { motion } from 'framer-motion';

const FirstBanner = () => {
  return (
    <BannerSection>
        <Banner>
            <motion.h2 initial={{opacity: 0, y: 15}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 0.2}} >BECOME AN AUTHORITY <br/> IN YOUR NICHE</motion.h2>
            <motion.p initial={{opacity: 0, y: 15}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 0.2}} >With Search Engine Optimization, we aim to programmatically place you on the top results on google for search queries relating to your niche, service or product. </motion.p>
            <motion.p initial={{opacity: 0, y: 15}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 0.2}}>According to google, the first page of search results gets 99% of all the traffic. We will get you there.</motion.p>
            <motion.span initial={{opacity: 0, y: 15}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 0.2}}>
                <SecondaryButton href="/">Get Started</SecondaryButton>
            </motion.span>
            <TopStroke>
                <motion.img src="/first-banner-stroke.svg" alt="" initial={{scale: 0}} whileInView={{scale: 1}} transition={{duration: 0.5, delay: 0.1}}/>
            </TopStroke>
            <BottomStroke>
                <motion.img src="/first-banner-stroke.svg" alt="" initial={{scale: 0}} whileInView={{scale: 1}} transition={{duration: 0.5, delay: 0.1}}/>
            </BottomStroke>
        </Banner>
    </BannerSection>
    )
}

export default FirstBanner