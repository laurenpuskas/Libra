import React from 'react'
import Timer from 'react-countdown'

import { StyledTimer } from '../styles/Countdown'

const Countdown = () => {
    const Completionist = () => <span>Welcome to Libra</span>

    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            return <Completionist />
        } else {
            return (
                <StyledTimer>
                    {days}<span>d&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;</span>
                    {hours}<span>h&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;</span>
                    {minutes}<span>m &nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;</span>
                    {seconds}<span>s</span>
                </StyledTimer>
            )
        }
    }

    return (
        <Timer
            date={'2021-07-14T09:41'}
            renderer={renderer}
        />
    )
}

export default Countdown
