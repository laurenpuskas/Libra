import styled from 'styled-components'

export const StyledForm = styled.form`
    width: 30vw;
    height: 50px;
    border-radius: 8px;
    margin: 0 auto 16vh;
    padding: 0 0 0 15px;
    background: inherit;
    position: relative;
    overflow: hidden;

    ::after {
        content: '';
        width: 40vw;
        height: 100px;
        background: rgba(255, 255, 255, 0.2); 
        position: absolute;
        left: -5vw;
        right: 0;
        top: -25px;  
        bottom: 0;
        filter: blur(13px);
        backdrop-filter: blur(13px);
    }

    input,
    button {
        position: relative;
        z-index: 999;
    }

    input[type="email"] {
        width: 82%;
        height: 100%;
        color: rgba(255, 255, 255, 0.9);

        ::placeholder {
            color: rgba(255, 255, 255, 0.6);
        }
        :-webkit-autofill,
        :-webkit-autofill:hover,
        :-webkit-autofill:focus,
        :-webkit-autofill:active {
            transition: background-color 5000s ease-in-out 0s;
            -webkit-text-fill-color: rgba(255, 255, 255, 0.6) !important;
        }
    }

    button {
        width: 18%;
        text-align: center;
        color: #e3a742;
        font-weight: 400;
        cursor: pointer;
        position: relative;

        ::before {
            content: ' ';
            position: absolute;
            top: -30%;
            left: 0;
            height: 160%;
            width: 1px;
            background-color: rgba(255, 255, 255, 0.15);
        }
    }
`
