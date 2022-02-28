import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import { StyledLogo } from '../styles/Logo'

const Logo = ({ width }) => {
  return (
    <StyledLogo>
      <StaticImage
        src="../images/logo.png"
        alt="Libra - Join Us."
        placeholder="none"
        style={{
          width: width,
          marginLeft: 'auto',
          marginRight: 'auto',
          display: 'flex',
        }}
      />
    </StyledLogo>
  )
}

export default Logo
