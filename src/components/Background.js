import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import { StyledBackground } from '../styles/Background'

const Background = ({ children }) => {
    const data = useStaticQuery(
        graphql`
            query {
                bgImage: file(relativePath: { eq: "background.jpg" }) {
                    childImageSharp {
                        fluid(quality: 90, maxWidth: 1920) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        `
    )
    return (
        <StyledBackground
            Tag="div"
            fluid={data.bgImage.childImageSharp.fluid}
            backgroundColor={`#000102`}
        >
            <div className="inner">
                {children}
            </div>
        </StyledBackground>
    )
}

export default Background
