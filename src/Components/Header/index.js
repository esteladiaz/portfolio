import React, { Component } from 'react'
import Link from '../../Primitives/Link'

export default class Header extends Component {
    render() {
        return (
            <header>
                <h1>Hi, I'm Estela.</h1>
                <p>I prefer dark mode, but if <Link text='light' /> is easier on your eyes, <Link src='google.com' text={'click here'} emoji={'☀️'} /></p>
            </header>
        )
    }
}