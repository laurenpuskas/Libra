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
