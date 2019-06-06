import React from 'react'
import { GlobalStyle } from './Style'
import Header from './Components/Header'
import SocialMedia from './Components/SocialMedia'

function App() {
  return (
    <div>
      <GlobalStyle />
      <SocialMedia />
      <Header />
    </div>
  );
}

export default App;
