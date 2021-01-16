import styled from 'styled-components'

export const StyledTimer = styled.p`
    font-size: 2.8rem;
    font-weight: 900;

    @media screen and (max-width: 630px) {
        font-size: 2.1rem;
    }

    span {
        font-size: 1.8rem;
        letter-spacing: -0.5px;

        span {
            padding: 0 22px;

            @media screen and (max-width: 630px) {
                padding: 0 10px;
            }
        }
    }
`
