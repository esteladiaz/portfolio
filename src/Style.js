import styled, { createGlobalStyle, css } from 'styled-components'

export const colors = {
    backgroundColor: '#232323',
    codeColor: '#7bfca5',
    headerColor: '#000',
    headerBackgroundColor: '#000',
    headerHoverColor: '#000',
    linkColor: '#8c7bfc',
    linkHoverColor: '#da60f5',
    linkActive: 'purple',
    textColor: '#fff',
    schemeRed: '#fc7b7b',
    schemeOrange: '#fcb47b',
    schemeYellow: '#fcfc7b',
    schemeGreen: '#7bfc94',
    schemeBlue: '#7bc3fc',
    schemeIndigo: '#7b7bfc',
    schemeViolet: '#bc7bfc'
}

const fontStyles = css`
    h1, h2, h3, h4, h5, h6, p, a {
        &:first-child {
            margin-top: 0;
        }
    }
    h1 {
        font-size: 3rem;
    }
    h2 {
        font-size: 2.5rem;
        margin-bottom: 0;
    }
    p {
        font-size: 1.5rem;
        font-weight: 300;
    }
`

export const GlobalStyle = createGlobalStyle`
    ${fontStyles}
    a {
        text-decoration: none;
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