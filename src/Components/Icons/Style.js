import styled, { css } from 'styled-components'
import { colors } from '../../Style'
import { size } from '../../Variables'
// import using 'size.icon.first'
// import using 'size.icon.second'...


export const Svg = styled.svg`
    fill: ${colors.linkColor};
    height: ${size.icons.linkedin};
    width: ${size.icons.linkedin};
`

export const SvgBackground = styled.div`
    align-items: center;
    background: ${colors.schemeGreen};
    border-radius: 50%;
    display: flex;
    height: ${size.icons.linkedin};
    justify-content: center;
    color: ${size.icons.testFunction};
    width: ${size.icons.linkedin};
`

export const testCss = css`
    color: red;
`