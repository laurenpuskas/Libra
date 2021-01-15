import React from 'react'

import { StyledTagline } from '../styles/Tagline'

const Tagline = ({ title, children }) => {
    return (
        <StyledTagline>
            <h2>{title}</h2>
            <p>{children}</p>
        </StyledTagline>
    )
}

export default Tagline
