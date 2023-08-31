import React from 'react';
import { PrimaryButton } from '../button/button.styles';
import { HeroDiv, Intro, SubText, ImageDiv, MainText, HeroImg, HeroSkew, } from './hero.styles';
import Perks from '../perks/perks.component';
import Services from '../services/services.component';




const Hero = () => {

  return (
    <HeroDiv>
        <Intro>
            <SubText>
                <p>SCALE</p>
                <p>OPTIMIZE</p>
                <p>RE-STRATEGIZE</p>
            </SubText>
            <MainText>
                <h1>SKY-ROCKE YOUR WEBSITE TRAFFIC WITH OUR PROVEN SEO-STRATEGIES</h1>
                <PrimaryButton href="#contact" scroll={false} >Get Started</PrimaryButton>
            </MainText>
        </Intro>
        <HeroSkew>
            <ImageDiv>
                <HeroImg src='/regan-hero.webp' />
                <Perks />
                <Services />
            </ImageDiv>
        </HeroSkew>
    </HeroDiv>
  )
}

export default Hero