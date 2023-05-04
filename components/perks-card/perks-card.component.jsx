import React from 'react';
import { PerksCardDiv } from './perks-card.styles';
import { motion } from 'framer-motion';

const PerksCard = ({perk}) => {
  const {icon, title, text, delay} = perk;
  return (
    <PerksCardDiv>
        <motion.img src={icon}  initial={{opacity: 0, y: 15}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: delay}}   />
        <motion.h4  initial={{opacity: 0, y: 15}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: delay}}  >{title}</motion.h4>
        <motion.p  initial={{opacity: 0, y: 15}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: delay}}  >{text}</motion.p>
    </PerksCardDiv>
  )
}

export default PerksCard