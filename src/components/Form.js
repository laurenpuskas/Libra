import React, { useState } from 'react'

import { StyledForm } from '../styles/Form'

const Form = ({ id, name }) => {
  const [formSubmit, setFormSubmit] = useState(false)

  const onSuccessHandler = (event) => {
    event.preventDefault()

    const timer = setTimeout(() => {
      setFormSubmit(true)
    }, 500)
    return () => clearTimeout(timer)
  }

  return (
    <StyledForm
      name="contact"
      method="post"
      onSubmit={onSuccessHandler}
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact" />
      <input type="hidden" name="form-type" value={id} />
      <input
        type="email"
        name="email"
        placeholder="Enter your email address"
        className={!formSubmit ? undefined : 'hidden'}
      />
      <button type="submit" className={!formSubmit ? undefined : 'hidden'}>
        {name}
      </button>

      {formSubmit && (
        <div className="success-message">
          <p>Thank you.</p>
          <span>We'll reach out soon.</span>
        </div>
      )}
    </StyledForm>
  )
}

export default Form
