import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

export const StyledBackground = styled(BackgroundImage)`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .inner {
        max-width: 1120px;
    }
`
