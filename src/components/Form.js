import React from 'react'

import { StyledForm } from '../styles/Form'

const Form = () => {
    return (
        <StyledForm
            name="contact" 
            method="post" 
            data-netlify="true" 
            data-netlify-honeypot="bot-field"
        >
            <input type="hidden" name="form-name" value="contact" />
            <input type="email" name="email" placeholder="Type your email" />
            <button type="submit">Send</button>
        </StyledForm>
    )
}

export default Form
