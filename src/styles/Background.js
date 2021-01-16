import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

export const StyledBackground = styled(BackgroundImage)`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    ::before,
    ::after {
        background-size: 120%;
        background-position: center top;
        animation-name: bgslide;
        animation-duration: 100s;
        animation-timing-function: linear;
        animation-iteration-count: 1;
    }
    ::after {
        opacity: 44% !important;
    }

    @keyframes bgslide {
        from {
            background-size: 120%;
            background-position: center top;
        }
        to { 
            background-size: cover;
            background-position: center bottom;
        }
    }

    .inner {
        max-width: 1140px;
        text-align: center;
    }
`
