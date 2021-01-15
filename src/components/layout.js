import React from 'react'
import PropTypes from 'prop-types'

import GlobalStyle from '../styles/global'

const Layout = ({ children }) => {
  return (
    <>
      <div className="siteContent">
        {children}
      </div>
      <GlobalStyle />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
