import styled, {css} from 'styled-components'
import { colors, getBackgroundColor } from '../../Variables'

const cometStyle = css`
    position: relative;
    text-decoration: none;
    display: inline-block;
    color: ${getBackgroundColor(colors)};
    padding: 0 1px;
    transition: color ease 0.3s;

    &::before, &::after {
        content: '';
        position: absolute;
        background-color: ${getBackgroundColor(colors)};
        z-index: -1;
        height: 3px;
    }

    &::before {
        width: 0%;
        left: 0;
        bottom: 0;
        transition: width ease 0.4s;
    }

    &::after {
        width: 100%;
        left: 0;
        bottom: 0;
        transition: all ease 0.6s;
    }
    &:hover {
        color: ${colors.linkHoverColor};
        &::before {
            background-color: ${colors.linkHoverColor};
            width: 100%;
        }
        &::after {
            left: 100%;
            width: 0%;
            transition: all ease 0.2s;
        }   
    }

`

export const JumpLinkWrapper = styled.a`
    ${cometStyle}
    cursor: pointer;
`