import React from 'react'
import image from '../images/phone_2x.png'
import { StyledImg } from '../styles/MainContent'

const Phone = ({ className }) => {
  return (
    <StyledImg>
      <img src={image} className={className} alt="Libra - Join Us." />
    </StyledImg>
  )
}

export default Phone
