import React, { Component } from 'react'
import Content from '../Content'
import { BodyWrapper } from './style'

export default class Header extends Component {
    render() {
        return (
            <BodyWrapper>
                <h1>Hi, I'm Estela.</h1>
                <Content />
            </BodyWrapper>
        )
    }
}