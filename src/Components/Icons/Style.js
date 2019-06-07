import styled from 'styled-components'
import { size } from '../../Variables'
import { colors, getBackgroundColor } from '../../Variables'

export const Svg = styled.svg`
    fill: ${getBackgroundColor(colors)};
    float: right;
    height: ${size.icon};
    width: ${size.icon};
    transition: all ease 350ms;

    &:hover {
        fill: ${getBackgroundColor(colors)};
    }
`