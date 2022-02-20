import React from 'react'

import { StyledButton } from '../styles/Button'

const Button = ({ primary, onClick, style, children }) => {
  return (
    <StyledButton primary={primary} onClick={onClick} style={style}>
      <span>{children}</span>
    </StyledButton>
  )
}

export default Button
