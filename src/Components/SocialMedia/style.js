import styled from 'styled-components'
import { getBackgroundColor } from '../../Variables'

const colors = {
    schemeRed: '#fc7b7b',
    schemeOrange: '#fcb47b',
    schemeYellow: '#fcfc7b',
    schemeGreen: '#7bfc94',
    schemeBlue: '#7bc3fc',
    schemeIndigo: '#7b7bfc',
    schemeViolet: '#bc7bfc'
}

export const SocialMediaContainer = styled.div`
    display: flex;
    flex-flow: column wrap;
    left: 0;
    height: 100vh;
    justify-content: space-evenly;
    margin-left: 1rem;
    position: absolute;
    top: 0;
    a {
        background: ${getBackgroundColor(colors)};
        margin-top: 1rem;
        &:first-child) {
            margin-top: 0;
        }
    }
`