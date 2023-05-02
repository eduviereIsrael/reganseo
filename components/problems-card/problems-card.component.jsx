import React from 'react'
import { Index, ProblemTitle, ProblemsCard } from './problems-card.styles'

const ProblemCard = ({problem}) => {
    const {title, text} = problem
  return (
    <ProblemsCard>
        <Index>{problem.index + 1}</Index>
        <ProblemTitle>{title}</ProblemTitle>
        <p>{text}</p>
    </ProblemsCard>
  )
}

export default ProblemCard