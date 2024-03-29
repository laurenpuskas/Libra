import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Form from '../components/Form'
import {
  StyledModal,
  ModalWrapper,
  SignUp,
  SignUpText,
  TaglineText,
  StyledList,
  Gradients,
  RedCircle,
  GreenCircle,
  BlueCircle,
} from '../styles/Modal'

const Modal = ({ visibility, opacity, formId, formName }) => {
  const closeModal = () => {
    window.location.reload()
  }

  return (
    <StyledModal style={{ visibility: visibility }}>
      <ModalWrapper style={{ opacity: opacity }}>
        <SignUp>
          <StaticImage
            src="../images/logo_2x.png"
            alt="Libra - Join Us."
            placeholder="none"
            style={{
              width: '45px',
              marginBottom: '25px',
            }}
          />
          <SignUpText>Sign Up for LIBRA</SignUpText>
          <TaglineText>
            Change Yourself,
            <br />
            Change The World.
          </TaglineText>
          <Form id={formId} name={formName} />
        </SignUp>

        <StyledList>
          <ul className="inner-list">
            <li>
              <StaticImage
                src="../images/icon-world.png"
                alt="Stay balanced and connected"
                placeholder="none"
              />
              <span>Stay balanced and connected</span>
            </li>
            <li>
              <StaticImage
                src="../images/icon-social.png"
                alt="View or Stream content that improves daily life"
                placeholder="none"
              />
              <span>View or Stream content that improves daily life</span>
            </li>
            <li>
              <StaticImage
                src="../images/icon-access.png"
                alt="Get access to an exclusive network"
                placeholder="none"
              />
              <span>Get access to an exclusive network</span>
            </li>
            <li>
              <StaticImage
                src="../images/icon-share.png"
                alt="Lead, share, and support your favorite people"
                placeholder="none"
              />
              <span>Lead, share, and support your favorite people</span>
            </li>
          </ul>
        </StyledList>
      </ModalWrapper>

      <div
        style={{
          position: 'absolute',
          top: '10px',
          right: '15px',
          zIndex: '5',
        }}
        onClick={closeModal}
      >
        <StaticImage
          src="../images/close-icon.png"
          alt="close screen"
          placeholder="none"
          style={{
            cursor: 'pointer',
            width: '50px',
            height: 'auto',
          }}
        />
      </div>

      <Gradients>
        <GreenCircle />
        <RedCircle />
        <BlueCircle />
      </Gradients>
    </StyledModal>
  )
}

export default Modal
