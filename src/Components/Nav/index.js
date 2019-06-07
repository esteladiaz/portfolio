import React from 'react'
import { NavWrapper } from './style'
import Email from '../Icons/Email'
import GitHub from '../Icons/GitHub'
import Instagram from '../Icons/Instagram'
import LinkedIn from '../Icons/LinkedIn'
import Twitter from '../Icons/Twitter'

const Nav = () => {
    return (
        <NavWrapper>
            <Email link="mailto:estela@diazela.com" />
            <GitHub link="//github.com/esteladiaz" />
            <Instagram link="//www.instagram.com/diazela" />
            <LinkedIn link="//linkedin.com/in/diazestela" />
            <Twitter link="//twitter.com/_diazela" />
        </NavWrapper>
    )
}

export default Nav