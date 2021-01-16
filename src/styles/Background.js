import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

export const StyledBackground = styled(BackgroundImage)`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    ::after {
        opacity: 44% !important;
    }

    ::before,
    ::after {
        background-size: auto 114% !important;
        background-position: center bottom;
        animation-name: bgslide;
        animation-duration: 60s;
        animation-timing-function: linear;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
    }
    @keyframes bgslide {
        from {
            background-position: center top;
        }
        to { 
            background-position: center bottom;
        }
    }

    .inner {
        max-width: 1140px;
        text-align: center;
    }
`
