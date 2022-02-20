import React from 'react'

import { StyledWrapper } from '../styles/Wrapper'

const Wrapper = (props) => {
  return (
    <StyledWrapper>
      <div className="inner">{props.children}</div>
    </StyledWrapper>
  )
}

export default Wrapper
