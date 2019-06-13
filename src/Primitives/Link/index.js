import React from 'react'
import { LinkWrapper } from './style'

const Link = props => {
    const { emoji, src, newTab, text, toggleSwitch } = props
    if (newTab) {
        return (
            <LinkWrapper href={src} onClick={toggleSwitch} target="_blank">
                {text}{emoji && ' ' + emoji}
            </LinkWrapper>
        )
    }
    return (
        <LinkWrapper href={src} onClick={toggleSwitch}  >
            {text}{emoji && ' ' + emoji}
        </LinkWrapper>
    )
}

export default Link