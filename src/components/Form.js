import React from 'react'

import { StyledForm } from '../styles/Form'

const Form = ({ id, name }) => {
  return (
    <StyledForm
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact" />
      <input type="hidden" name="form-type" value={id} />
      <input type="email" name="email" placeholder="Enter your email address" />
      <button type="submit">{name}</button>
    </StyledForm>
  )
}

export default Form
