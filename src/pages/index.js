import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Tagline from '../components/Tagline'

const IndexPage = () => (
  <Layout>
    <SEO title="Coming Soon" />
    <Background>
      <Logo width="70px" marginBottom="20vh" />
      <Tagline />
    </Background>
  </Layout>
)

export default IndexPage
