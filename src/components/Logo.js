import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const Logo = ({ width, marginBottom }) => {
  return (
    <StaticImage
      src="../images/logo.png"
      alt="Libra - Join Us."
      placeholder="none"
      style={{
        width: width,
        marginBottom: marginBottom,
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
      }}
    />
  )
}

export default Logo
