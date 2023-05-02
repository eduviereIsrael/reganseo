import React from 'react'
import { PerksCardDiv } from './perks-card.styles'

const PerksCard = ({perk}) => {
  const {icon, title, text} = perk;
  return (
    <PerksCardDiv>
        <img src={icon} />
        <h4>{title}</h4>
        <p>{text}</p>
    </PerksCardDiv>
  )
}

export default PerksCard