import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import { StyledImg } from '../styles/MainContent'

const Phone = () => {
  return (
    <StyledImg>
      <StaticImage
        src="../images/phone_2x.png"
        alt="Libra - Join Us."
        placeholder="none"
        quality={100}
      />
    </StyledImg>
  )
}

export default Phone
