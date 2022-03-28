import styled from 'styled-components'
import background from '../images/background.jpg'
import mobileBackground from '../images/mobile-background.jpg'
import pattern from '../images/modal-bg.png'

export const StyledModal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${mobileBackground});
  background-size: cover;
  background-size: center;
  padding-top: 70px;

  @media screen and (min-width: 801px) {
    background-image: url(${background});
  }
`

export const ModalWrapper = styled.div`
  width: 92%;
  max-width: 880px;
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 16px;
  transition: opacity 1s ease-in-out;
  z-index: 5;

  @media screen and (min-width: 801px) {
    flex-direction: row;
    background: linear-gradient(to right, #e9e5e5, #dce8f3);
  }

  &:before {
    content: ' ';
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: top left;
    border-radius: 16px;
    position: absolute;
    top: 0;
    left: 0;

    @media screen and (min-width: 801px) {
      background-image: url(${pattern});
    }
  }
`

export const SignUp = styled.div`
  background: white;
  padding: 40px 20px 30px;
  text-align: center;
  border-radius: 16px;
  position: relative;

  @media screen and (min-width: 801px) {
    border-radius: 16px 0 0 16px;
  }
`

export const SignUpText = styled.p`
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.4px;
  font-weight: 500;
  color: #737373;
  margin-bottom: 10px;
`

export const TaglineText = styled.p`
  font-size: 14px;
  line-height: 24px;
  font-weight: 500;
  letter-spacing: 0.4px;
  background: linear-gradient(to right, #fbc142, #fb9b42);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const StyledList = styled.div`
  display: flex;
  width: 100%;
  padding: 20px 15px 40px;

  @media screen and (min-width: 801px) {
    padding: 20px 50px 20px 40px;
  }

  @media screen and (max-width: 800px) {
    .gatsby-image-wrapper {
      width: 14%;
    }
  }

  .inner-list {
    display: flex;
    flex-direction: column;
    justify-content: center;

    li {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin: 15px 0;

      img {
        width: 30px;
        height: auto;
        margin-right: 15px;

        @media screen and (min-width: 801px) {
          width: 35px;
          margin-right: 20px;
        }
      }

      span {
        font-size: 18px;
        letter-spacing: 0.4px;
        line-height: 1.4;

        @media screen and (max-width: 800px) {
          width: 86%;
        }

        @media screen and (min-width: 801px) {
          font-size: 21px;
          line-height: 1.1;
        }
      }
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
