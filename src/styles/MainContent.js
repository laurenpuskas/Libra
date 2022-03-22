import styled from 'styled-components'

export const StyledContent = styled.div`
  display: flex;
  flex-direction: row;
  animation: fade 2s ease;

  @media screen and (max-width: 981px) {
    flex-direction: column-reverse;
  }

  .description {
    width: 100%;
    align-self: center;

    @media screen and (min-width: 981px) {
      width: 60%;
    }

    @media screen and (min-width: 1460px) {
      width: 50%;
      margin-right: 17%;
    }

    .inner-wrap {
      width: 100%;

      @media screen and (min-width: 1051px) {
        width: 86%;
      }

      @media screen and (min-width: 1499px) {
        width: 100%;
      }
    }

    h1 {
      font-size: 28px;
      margin-bottom: 30px;
      text-align: center;

      @media screen and (min-width: 981px) {
        font-size: 36px;
        margin-bottom: 35px;
        text-align: left;
      }

      @media screen and (min-width: 1499px) {
        font-size: 39px;
      }

      span {
        background: linear-gradient(to right, #fbc142, #fb9b42);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        @media screen and (max-width: 981px) {
          &:nth-of-type(1) {
            &::after {
              display: block;
              content: ' ';
            }
          }
        }
      }
    }

    p {
      font-size: 17px;
      line-height: 1.5;
      font-weight: 400;
      margin: 0 30px 15px;

      @media screen and (min-width: 981px) {
        font-size: 19px;
        margin: 0 0 15px;
      }

      @media screen and (min-width: 1499px) {
        font-size: 23px;
      }

      :last-of-type {
        margin-bottom: 45px;

        @media screen and (max-width: 980px) {
          border-top: 1px solid #bbb;
          padding-top: 15px;
        }
      }
    }
  }

  @keyframes fade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

export const StyledImg = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 30px;

  @media screen and (min-width: 981px) {
    width: 40%;
    margin-bottom: 0;
  }

  @media screen and (min-width: 1460px) {
    width: 33%;
    text-align: left;
  }

  img {
    width: auto;
    height: 46vh;
    max-height: 500px;
    display: inline-block;

    @media screen and (min-width: 981px) {
      height: 59vh;
    }
  }

  .phone-desktop {
    display: none;

    @media screen and (min-width: 981px) {
      display: inline;
    }
  }

  .phone-mobile {
    display: none;

    @media screen and (max-width: 980px) {
      display: inline;
    }
  }
`
