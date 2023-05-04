import React from 'react';
import { ProblemsContainer, ProblemsDiv, ProblemsIntro } from './problems.styles';
import ProblemCard from '../problems-card/problems-card.component';
import { motion } from 'framer-motion';

const problems = [
    {
        title: "OPERATING COSTS",
        text: "Huge operating costs is bad for business as it eats into profit margins and give little room for investing in growth and optimization.",
        delay: 0.2
    },
    {
        title: "Stunted Growth",
        text: "We know what it's like to see slow online progress after months/years of starting a business.",
        delay: 0.3
    },
    {
        title: "Ads Dependency",
        text: "Ads are a great way to generate revenue for your business, but some ads fail/gets rejected and the ad account gets banned sometimes.",
        delay: 0.4
    },
    {
        title: "Low Website Traffic",
        text: "Websites are a great way for brands to sell themselves to their audience, but what good is a website if It gets no traffic?",
        delay: 0.4
    },
]

const Problems = () => {
  return (
    <ProblemsDiv>
        <ProblemsIntro>
            <motion.h2 initial={{opacity: 0, y: 15}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 0.2}}>OWN An efficient and sustainable business model.</motion.h2>
            <motion.p initial={{opacity: 0, y: 15}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 0.3}}>We bring solutions that addresses the following critical obstacles that are hindering business expansion and longevity.</motion.p>
        </ProblemsIntro>
        <ProblemsContainer>
            {problems.map((problem, index) => {
                const item = {...problem, index: index}
                return( <motion.div key = {index}  initial={{opacity: 0, y: 15}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: item.delay}}> 
                            <ProblemCard  problem = {item} />
                        </motion.div>
                    )
            })}
        </ProblemsContainer>
    </ProblemsDiv>
  )
}

export default Problems