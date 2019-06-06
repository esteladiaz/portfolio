import React from 'react'

const Link = props => {
    const { emoji, src, text } = props
    return (
        <a href={src}>
            {text}{emoji && ' ' + emoji}
        </a>
    )
}

export default Link