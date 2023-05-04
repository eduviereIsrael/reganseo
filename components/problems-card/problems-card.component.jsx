import React from 'react';
import { Index, ProblemTitle, ProblemsCard } from './problems-card.styles';
import { motion } from 'framer-motion';

const ProblemCard = ({problem}) => {
    const {title, text, delay} = problem
  return (
    <ProblemsCard>
        {/* <motion.span initial={{opacity: 0, y: 15}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: delay}} > */}
          <Index>{problem.index + 1}</Index>
          <ProblemTitle>{title}</ProblemTitle>
          <p>{text}</p>
        {/* </motion.span> */}
      </ProblemsCard>
  )
}

export default ProblemCard