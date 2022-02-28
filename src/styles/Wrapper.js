import styled from 'styled-components'
import background from '../images/background.jpg'
import mobileBackground from '../images/mobile-background.jpg'

export const StyledWrapper = styled.div`
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${mobileBackground});
  background-size: cover;
  background-size: left;

  @media screen and (min-width: 981px) {
    height: 100vh;
    background-image: url(${background});
    background-size: center;
  }

  .inner {
    width: 90%;
    max-width: 1360px;
    margin: 30px 0 80px;

    @media screen and (min-width: 981px) {
      margin: 50px 0 4vh;
    }

    @media screen and (min-width: 1460px) {
      width: 96%;
    }
  }
`
