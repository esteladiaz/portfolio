import React from 'react'
import { JumpLinkWrapper } from './style'

const JumpLink = props => {
    const { emoji, src, text, toggleSwitch } = props
    return (
        <JumpLinkWrapper href={src} onClick={toggleSwitch} >
            {text}{emoji && ' ' + emoji}
        </JumpLinkWrapper>
    )
}

export default JumpLink