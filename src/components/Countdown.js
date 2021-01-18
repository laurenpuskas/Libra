import React from 'react'
import Timer from 'react-countdown'

import { StyledTimer } from '../styles/Countdown'

const Countdown = () => {
    const Completionist = () => <span>Welcome to Libra</span>

    const renderer = ({ formatted: { days, hours, minutes, seconds }, completed }) => {
        if (completed) {
            return <Completionist />
        } else {
            return (
                <StyledTimer>
                    {days}<span>d<span>:</span></span>
                    {hours}<span>h<span>:</span></span>
                    {minutes}<span>m<span>:</span></span>
                    {seconds}<span>s</span>
                </StyledTimer>
            )
        }
    }

    return (
        <Timer
            date={'2021-07-14T21:41'}
            renderer={renderer}
        />
    )
}

export default Countdown
