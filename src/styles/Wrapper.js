import styled from 'styled-components'
import background from '../images/background.jpg'

export const StyledWrapper = styled.div`
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${background});
  background-size: cover;
  background-size: center;

  @media screen and (min-width: 981px) {
    height: 100vh;
  }

  .inner {
    width: 90%;
    max-width: 1360px;
    margin: 50px 0 80px;

    @media screen and (min-width: 981px) {
      margin: 0 0 4vh;
    }

    @media screen and (min-width: 1460px) {
      width: 96%;
    }
  }
`
