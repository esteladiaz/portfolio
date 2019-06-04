import styled, { createGlobalStyle } from 'styled-components'

export const colors = {
    backgroundColor: '#232323',
    codeColor: '#7bfca5',
    headerColor: '#000',
    headerBackgroundColor: '#000',
    headerHoverColor: '#000',
    linkColor: '#8c7bfc',
    linkHoverColor: '#da60f5',
    linkActive: 'purple',
    textColor: '#fff'
}

export const GlobalStyle = createGlobalStyle`
    a {
        color: ${colors.linkColor};
        text-decoration: none;
        transition: 150ms;
        &:hover {
            color: ${colors.linkHoverColor};
            transform: color;
        }
    }
    body {
        align-items: center;
        background: ${colors.backgroundColor};
        color: ${colors.textColor};
        display: flex;
        height: 100vh;
        font-family: "Roboto", sans-serif;
        justify-content: center;
        margin: 0;
        width: 100vw;
    }
    code {
        color: ${colors.codeColor};
        font-family: "Cutive Mono", courier;
    }
`

export const Header = styled.div`
    background: ${colors.headerColor};
`