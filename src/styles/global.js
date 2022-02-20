import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
  */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    /* stylelint-disable-next-line */
    vertical-align: baseline;
  }

  html, body {
    width: 100%; 
    height: 100%;
  }
  .siteRoot {
    display: flex;
    flex-direction: column;
  }
  .siteContent {
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
    position: relative;
    z-index: 2;
  }

  @font-face {
      font-family: 'Gilroy', Arial, sans-serif;
      src: url('../fonts/gilroy-regular-webfont.woff2') format('woff2'),
          url('../fonts/gilroy-regular-webfont.woff') format('woff');
      font-weight: normal;
      font-style: normal;
  }
  @font-face {
      font-family: 'Gilroy', Arial, sans-serif;
      src: url('../fonts/gilroy-medium-webfont.woff2') format('woff2'),
          url('../fonts/gilroy-medium-webfont.woff') format('woff');
      font-weight: 500;
      font-style: normal;
  }
  @font-face {
      font-family: 'Gilroy', Arial, sans-serif;
      src: url('../fonts/gilroy-semibold-webfont.woff2') format('woff2'),
          url('../fonts/gilroy-semibold-webfont.woff') format('woff');
      font-weight: 700;
      font-style: normal;
  }
  @font-face {
      font-family: 'Gilroy', Arial, sans-serif;
      src: url('../fonts/gilroy-bold-webfont.woff2') format('woff2'),
          url('../fonts/gilroy-bold-webfont.woff') format('woff');
      font-weight: 800;
      font-style: normal;
  }

  h1, h2, h3, h4, h5, h6 {
    color: #3a3a3a;
    font-weight: 700;
  }

  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  a {
    text-decoration: none;
    transition: all ease-in-out 0.2s;
    color: #fff;

    :hover {
      text-decoration: none;
      opacity: 0.7;
    }
  }

  ol, ul, li {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote::before, blockquote::after,
  q::before, q::after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  * {
    box-sizing: border-box;
  }

  body {
    background: #fff;
    color: #646464;
    font-family: 'Gilroy', sans-serif;
  }

  img {
    display: block;
  	width: 100%;
  	height: auto;
  }

  button,
  input {
    font-family: inherit;
    font-size: inherit;
    background: none;
    border: none;
    outline: none;
    appearance: none;
    border-radius: 0;
    resize: none;
    &:focus {
      outline: none;
    }
    &:invalid {
      box-shadow: none;
    }
  }
`
export default GlobalStyle
