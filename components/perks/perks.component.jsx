import React from 'react'
import { PerksDiv } from './perks.styles'
import PerksCard from '../perks-card/perks-card.component'
// import { PerksDiv } from '../hero/hero.styles';


const perks = [
    {
        icon: "/credibility-icon.svg",
        title: "Credibility",
        text: "Reach a new level of credibility by answering to your target audience at different stages in their buyers journey.",
        delay: 0.2,
    },
    {
        icon: "/Visibility-icon.svg",
        title: "Visibility",
        text: "Our digital services are aimed at helping thousands of prospects get acquainted with your business, regularly.",
        delay: 0.3,
    },
    {
        icon: "/opti-icon.svg",
        title: "Optimization",
        text: "We get it right once, and you get all the in-flow of cold traffic your business needs to thrive on the long run.",
        delay: 0.4,
    },
];

const Perks = () => {
  return (
    <PerksDiv>
        {perks.map((perk) => (
            <PerksCard key={perk.title} perk={perk} />
        ))}
    </PerksDiv>
  )
}

export default Perks