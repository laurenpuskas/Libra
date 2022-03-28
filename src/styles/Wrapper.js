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
    z-index: 5;

    @media screen and (min-width: 981px) {
      margin: 50px 0 4vh;
    }

    @media screen and (min-width: 1460px) {
      width: 96%;
    }
  }
`

export const Gradients = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

export const RedCircle = styled.div`
  position: absolute;
  z-index: 3;
  width: 90vw;
  height: 110vh;
  top: 0;
  left: -30vw;
  opacity: 0.5;
  filter: blur(244px);
  animation: RedCircle 5s ease infinite;

  @keyframes RedCircle {
    0% {
      background: #ffbac5;
    }
    33% {
      background: #d0f1ec;
    }
    66% {
      background: #aed1f2;
    }
    100% {
      background: #ffbac5;
    }
  }
`

export const GreenCircle = styled.div`
  position: absolute;
  z-index: 4;
  width: 72vw;
  height: 90vh;
  top: -40vh;
  left: 14vw;
  opacity: 0.5;
  filter: blur(244px);
  animation: GreenCircle 6s ease infinite;

  @keyframes GreenCircle {
    0% {
      background: #d0f1ec;
    }
    33% {
      background: #aed1f2;
    }
    66% {
      background: #ffbac5;
    }
    100% {
      background: #d0f1ec;
    }
  }
`

export const BlueCircle = styled.div`
  position: absolute;
  z-index: 3;
  width: 90vw;
  height: 90vh;
  top: 30vh;
  left: auto;
  right: -30vw;
  opacity: 0.5;
  filter: blur(244px);
  animation: BlueCircle 4s ease infinite;

  @keyframes BlueCircle {
    0% {
      background: #aed1f2;
    }
    33% {
      background: #ffbac5;
    }
    66% {
      background: #d0f1ec;
    }
    100% {
      background: #aed1f2;
    }
  }
`
