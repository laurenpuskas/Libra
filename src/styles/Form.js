import styled from 'styled-components'

export const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.4px;

  @media screen and (min-width: 981px) {
    width: 270px;
  }

  input[type='email'] {
    width: 100%;
    height: 42px;
    color: #9c9c9c;
    border: 1px solid #c9c9c9;
    border-radius: 8px;
    margin: 20px 0 15px;
    padding: 0 20px;

    @media screen and (min-width: 981px) {
      margin: 20px 0;
    }

    ::placeholder {
      color: #9c9c9c;
    }
    :-webkit-autofill,
    :-webkit-autofill:hover,
    :-webkit-autofill:focus,
    :-webkit-autofill:active {
      transition: background-color 5000s ease-in-out 0s;
      -webkit-text-fill-color: #9c9c9c !important;
    }
  }

  button {
    width: 100%;
    height: 42px;
    display: block;
    position: relative;
    justify-content: center;
    align-items: center;
    border: 1px solid transparent;
    border-radius: 8px;
    cursor: pointer;
    background: linear-gradient(
      to right,
      #fbc142 0%,
      #fb9b42 50%,
      #fbc142 100%
    );
    background-size: 200% 100%;
    transition: all 0.8s linear;
    font-size: 14px;
    line-height: 1;
    letter-spacing: 0.4px;
    color: white;
    margin-bottom: 5px;

    @media screen and (min-width: 981px) {
      margin-bottom: 40px;
    }

    &:hover {
      background-position: center right, top right;
    }
  }
`
