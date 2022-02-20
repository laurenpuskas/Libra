import React, { useState } from 'react'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import Wrapper from '../components/Wrapper'
import Logo from '../components/Logo'
import MainContent from '../components/MainContent'
import Button from '../components/Button'
import Phone from '../components/Phone'
import Modal from '../components/Modal'

const IndexPage = () => {
  const [modalEarlyAccessIsOpen, setEarlyAccessIsOpen] = useState(false)
  const [modalTokenIsOpen, setTokenIsOpen] = useState(false)

  const showEarlyAccessModal = () => setEarlyAccessIsOpen(true)
  const closeEarlyAccessModal = () => setEarlyAccessIsOpen(false)
  const showTokenModal = () => setTokenIsOpen(true)
  const closeTokenModal = () => setTokenIsOpen(false)

  return (
    <Layout>
      <SEO title="Change Yourself, Change the World." />

      <Wrapper>
        <Logo width="50px" marginBottom="50px" />

        <MainContent>
          <div className="description">
            <h1>
              Change <span>Yourself,</span> Change <span>The World.</span>
            </h1>
            <div className="inner-wrap">
              <p>
                The world's first exclusive lifestyle social network designed to
                help live a balanced life, while keeping your data-private.
              </p>
              <p>
                Stop wasting your time on harmful & addictive social networks
                that are using your data for their profit.
              </p>
              <div className="animation-wrapper">
                <Button
                  primary
                  onClick={showEarlyAccessModal}
                  style={{ width: 'calc(50% - 15px)', marginRight: '30px' }}
                >
                  Get Early Access
                </Button>
                <Button
                  onClick={showTokenModal}
                  style={{ width: 'calc(50% - 15px)' }}
                >
                  Learn About The Token
                </Button>
              </div>
            </div>
          </div>

          <Phone />
        </MainContent>
      </Wrapper>

      {modalEarlyAccessIsOpen ? (
        <Modal
          closeModal={closeEarlyAccessModal}
          formId="getEarlyAccessForm"
          formName="Get Early Access"
        />
      ) : null}
      {modalTokenIsOpen ? (
        <Modal
          closeModal={closeTokenModal}
          formId="getTokenForm"
          formName="Learn More About The Token"
        />
      ) : null}
    </Layout>
  )
}

export default IndexPage
