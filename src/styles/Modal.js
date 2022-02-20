import styled from 'styled-components'
import background from '../images/background.jpg'
import pattern from '../images/modal-bg.png'

export const StyledModal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${background});
  background-size: cover;
  background-size: center;
`

export const ModalWrapper = styled.div`
  width: 96%;
  max-width: 880px;
  display: flex;
  flex-direction: column;
  background: linear-gradient(to right, #e9e5e5, #dce8f3);
  position: relative;
  border-radius: 16px;

  @media screen and (min-width: 981px) {
    flex-direction: row;
  }

  &:before {
    content: ' ';
    width: 100%;
    height: 100%;
    background-image: url(${pattern});
    background-size: cover;
    background-position: top left;
    border-radius: 16px;
    position: absolute;
    top: 0;
    left: 0;
  }
`

export const SignUp = styled.div`
  background: white;
  padding: 40px 20px 30px;
  text-align: center;
  border-radius: 16px 0 0 16px;
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

export const StyledTag = styled.p`
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.4px;
  color: #adadad;
`

export const StyledList = styled.div`
  display: flex;
  width: 100%;
  padding: 20px 50px 20px 40px;

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
        width: 35px;
        height: auto;
        margin-right: 20px;
      }

      span {
        font-size: 21px;
        letter-spacing: 0.4px;
      }
    }
  }
`
