import React from 'react'
import { ProblemsContainer, ProblemsDiv, ProblemsIntro } from './problems.styles'
import ProblemCard from '../problems-card/problems-card.component'

const problems = [
    {
        title: "OPERATING COSTS",
        text: "Huge operating costs is bad for business as it eats into profit margins and give little room for investing in growth and optimization."
    },
    {
        title: "Stunted Growth",
        text: "We know what it's like to see slow online progress after months/years of starting a business."
    },
    {
        title: "Ads Dependency",
        text: "Ads are a great way to generate revenue for your business, but some ads fail/gets rejected and the ad account gets banned sometimes."
    },
    {
        title: "Low Website Traffic",
        text: "Websites are a great way for brands to sell themselves to their audience, but what good is a website if It gets no traffic?"
    },
]

const Problems = () => {
  return (
    <ProblemsDiv>
        <ProblemsIntro>
            <h2>OWN An efficient and sustainable business model.</h2>
            <p>We bring solutions that addresses the following critical obstacles that are hindering business expansion and longevity.</p>
        </ProblemsIntro>
        <ProblemsContainer>
            {problems.map((problem, index) => {
                const item = {...problem, index: index}
                return <ProblemCard key = {index} problem = {item} />
            })}
        </ProblemsContainer>
    </ProblemsDiv>
  )
}

export default Problems