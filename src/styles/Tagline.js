import styled from 'styled-components'

export const StyledTagline = styled.div`
    h2 {
        font-size: 3rem;
        margin-bottom: 2.5vh;

        @media screen and (max-width: 630px) {
            font-size: 2.5rem;
        }
    }
    p {
        font-size: 1.1rem;
        line-height: 1.7;
        margin: 0 auto 5vh;
        padding: 0 20px;
        max-width: 400px;
    }
`
