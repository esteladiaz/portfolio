import styled, {css} from 'styled-components'

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

const cometStyle = css`
    color: ${colors.linkColor};
    display: inline-block;
    font-weight: 400;
    padding: 0 1px;
    position: relative;
    text-decoration: none;
    transition: color ease 0.3s;

    &::before, &::after {
        content: '';
        position: absolute;
        background-color: ${colors.linkColor};
        z-index: -1;
        height: 5%;
    }

    &::before {
        width: 0%;
        left: 0;
        bottom: 0;
        transition: width ease 0.4s;
        &::after {
            width: 100%;
            left: 0;
            bottom: 0;
            transition: all ease 0.6s;
        }
    &:hover {
    &::before {
        width: 100%;
    }

    &::after {
            left: 100%;
            width: 0%;
            transition: all ease 0.2s;
        }
    }
`

export const LinkWrapper = styled.a`
    ${cometStyle}
`