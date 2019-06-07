import React from 'react'
import { LinkWrapper } from './style'

const Link = props => {
    const { emoji, src, text, toggleSwitch } = props
    return (
        <LinkWrapper href={src} onClick={toggleSwitch} >
            {text}{emoji && ' ' + emoji}
        </LinkWrapper>
    )
}

export default Link