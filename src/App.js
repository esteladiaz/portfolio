import React, { Component } from 'react'
import { GlobalStyle } from './Style'
import Body from './Components/Body'
import Nav from './Components/Nav'

export default class App extends Component {
  render() {
    return (
      <div>
          <GlobalStyle />
          <Nav />
          <Body />
      </div>
    )
  }
}
