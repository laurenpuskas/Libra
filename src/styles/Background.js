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

    .inner {
        max-width: 1140px;
        text-align: center;
    }
`
