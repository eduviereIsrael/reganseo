import React from 'react'
import { PrimaryButton } from '../button/button.styles'
import { HeroDiv, Intro, SubText, ImageDiv, MainText, PerksDiv, HeroImg } from './hero.styles'
import PerksCard from '../perks-card/perks-card.component'

const perks = [
    {
        icon: "/credibility-icon.svg",
        title: "Credibility",
        text: "Reach a new level of credibility by answering to your target audience at different stages in their buyers journey.",
    },
    {
        icon: "/Visibility-icon.svg",
        title: "Visibility",
        text: "Our digital services are aimed at helping thousands of prospects get acquainted with your business, regularly.",
    },
    {
        icon: "/opti-icon.svg",
        title: "Optimization",
        text: "We get it right once, and you get all the in-flow of cold traffic your business needs to thrive on the long run.",
    },
]

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
                <h1>SKY-ROCKET YOUR WEBSITE TRAFFIC WITH OUR PROVEN SEO-STRATEGIES</h1>
                <PrimaryButton href="" >Get Started</PrimaryButton>
            </MainText>
        </Intro>
        <ImageDiv>
            <HeroImg src='/regan-hero.webp' />
            <PerksDiv>
                {perks.map((perk) => (
                    <PerksCard key={perk.title} perk={perk} />
                ))}
            </PerksDiv>
        </ImageDiv>
    </HeroDiv>
  )
}

export default Hero