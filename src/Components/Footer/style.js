import styled, { css } from 'styled-components'

const footerTextStyle = css`
    p {
        font-size: 0.875rem;
        &:first-child {
            margin: 0;
        }
    }
`

export const FooterWrapper = styled.div`
    ${footerTextStyle}
    background: pink;
    bottom: 0;
    left: 0;
    margin-left: 1rem;
    position: relative;
`