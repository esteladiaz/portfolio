import React from 'react'
import { SocialMediaContainer, SocialMediaIcon } from './style'
import LinkedIn from '../Icons/LinkedIn'

const SocialMedia = () => {
    return (
        <SocialMediaContainer>
            <LinkedIn />
            <SocialMediaIcon rel="noopener noreferrer" href="//github.com/esteladiaz" target="_blank">GitHub</SocialMediaIcon>
            <SocialMediaIcon rel="noopener noreferrer" href="//www.instagram.com/diazela" target="_blank">Instagram</SocialMediaIcon>
            <SocialMediaIcon rel="noopener noreferrer" href="//twitter.com/_diazela" target="_blank">Twitter</SocialMediaIcon>
            <SocialMediaIcon href="mailto:estela@diazela.com">Email</SocialMediaIcon>
        </SocialMediaContainer>
    )
}

export default SocialMedia