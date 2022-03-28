import React from 'react'

import {
  StyledWrapper,
  Gradients,
  RedCircle,
  GreenCircle,
  BlueCircle,
} from '../styles/Wrapper'

const Wrapper = (props) => {
  return (
    <StyledWrapper>
      <div className="inner">{props.children}</div>

      <Gradients>
        <GreenCircle />
        <RedCircle />
        <BlueCircle />
      </Gradients>
    </StyledWrapper>
  )
}

export default Wrapper
