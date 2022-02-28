import styled from 'styled-components'

export const StyledButton = styled.button`
  height: 50px;
  display: block;
  position: relative;
  justify-content: center;
  align-items: center;
  border: 1px solid transparent;
  border-radius: 8px;
  background: ${(props) =>
    props.primary
      ? 'transparent'
      : 'linear-gradient(to right, #fceaec, #f2eff0)'};
  cursor: pointer;

  @media screen and (max-width: 980px) {
    width: 100% !important;
    margin: 0 0 15px !important;
    background: ${(props) => (props.primary ? 'transparent' : '#f5f8fc')};
  }

  @media screen and (min-width: 981px) {
    display: inline-block;
  }

  span {
    font-weight: 500;
    font-size: 16px;
    line-height: 1;
    letter-spacing: 0.4px;
    background: ${(props) =>
      props.primary
        ? 'white'
        : 'linear-gradient(to right, #fbc142 0%, #fb9b42 50%, #fbc142 100%)'};
    background-size: 200% 100%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 0.8s linear;
  }

  &::after {
    position: absolute;
    top: -1.5px;
    bottom: -1.5px;
    left: -2px;
    right: -2px;
    background: linear-gradient(
      to right,
      #fbc142 0%,
      #fb9b42 50%,
      #fbc142 100%
    );
    background-size: 200% 100%;
    content: '';
    z-index: -1;
    border-radius: 8px;
    transition: all 0.8s linear;
  }

  &:hover {
    span {
      background-position: center right, top right;
    }
    &::after {
      background-position: center right, top right;
    }
  }
`
