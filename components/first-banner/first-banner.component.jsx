import React from 'react';
import { Banner, BannerSection, BottomStroke, TopStroke } from './first-banner.styles';
import { SecondaryButton } from '../button/button.styles';
import { motion } from 'framer-motion';

const FirstBanner = () => {
  return (
    <BannerSection>
        <Banner>
            <h2>BECOME AN AUTHORITY <br/> IN YOUR NICHE</h2>
            <p>With Search Engine Optimization, we aim to programmatically place you on the top results on google for search queries relating to your niche, service or product. </p>
            <p>According to google themselves, the first page of search results gets 99% of all the traffic.</p>
            <SecondaryButton href="/">Get Started</SecondaryButton>
            <TopStroke>
                <motion.img src="/first-banner-stroke.svg" alt="" initial={{scale: 0.5}} whileInView={{scale: 1}} transition={{duration: 0.3}}/>
            </TopStroke>
            <BottomStroke>
                <motion.img src="/first-banner-stroke.svg" alt="" initial={{scale: 0.5}} whileInView={{scale: 1}} transition={{duration: 0.3}}/>
            </BottomStroke>
        </Banner>
    </BannerSection>
    )
}

export default FirstBanner