import React from 'react'
import { LinkWrapper } from './style'

const Link = props => {
    const { emoji, src, text } = props
    return (
        <LinkWrapper href={src}>
            {text}{emoji && ' ' + emoji}
        </LinkWrapper>
    )
}

export default Link