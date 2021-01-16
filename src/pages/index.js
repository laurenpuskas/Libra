import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Tagline from '../components/Tagline'
import Form from '../components/Form'
import Countdown from '../components/Countdown'

const IndexPage = () => (
  <Layout>
    <SEO title="Coming Soon" />

    <Background>
      <Logo width="60px" marginBottom="15vh" />
      
      <Tagline title="Be You, Now.">
        Changing the world and changing yourself are the same. Join us.
      </Tagline>

      <Form />

      <Countdown />
    </Background>
  </Layout>
)

export default IndexPage
