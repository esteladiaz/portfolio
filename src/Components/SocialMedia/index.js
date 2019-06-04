import React from 'react'
import { SocialMediaContainer } from './style'
import Email from '../Icons/Email'
import GitHub from '../Icons/GitHub'
import Instagram from '../Icons/Instagram'
import LinkedIn from '../Icons/LinkedIn'
import Twitter from '../Icons/Twitter'

const SocialMedia = () => {
    return (
        <SocialMediaContainer>
            <Email href="mailto:estela@diazela.com" />
            <GitHub href="//github.com/esteladiaz" />
            <Instagram href="//www.instagram.com/diazela" />
            <LinkedIn href="//linkedin.com/in/diazestela" />
            <Twitter href="//twitter.com/_diazela" />
        </SocialMediaContainer>
    )
}

export default SocialMedia