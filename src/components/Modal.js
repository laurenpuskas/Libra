import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Form from '../components/Form'
import {
  StyledModal,
  ModalWrapper,
  SignUp,
  SignUpText,
  TaglineText,
  StyledTag,
  StyledList,
} from '../styles/Modal'

const Modal = ({ closeModal, formId, formName }) => {
  return (
    <StyledModal>
      <ModalWrapper>
        <SignUp>
          <StaticImage
            src="../images/logo_2x.png"
            alt="Libra - Join Us."
            placeholder="none"
            style={{
              width: '70px',
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
          <StyledTag>Join us.</StyledTag>
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

      <StaticImage
        src="../images/close-icon.png"
        alt="close screen"
        placeholder="none"
        style={{
          position: 'absolute',
          top: '30px',
          left: '30px',
          cursor: 'pointer',
          width: '50px',
          height: 'auto',
        }}
        onClick={closeModal}
      />
    </StyledModal>
  )
}

export default Modal
