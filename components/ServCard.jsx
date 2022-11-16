/* eslint-disable */

import React from 'react'

const ServCard = (props) => {
  return (
    <div>
        <img src={props.img} alt={props.title} />
        <h5>{props.title}</h5>
        <p>{props.text}</p>
    </div>
  )
}

export default ServCard