import styled, { css } from 'styled-components'

const tileFontStyles = css`
    h3 {
        font-size: 1.5rem;
        margin: 1rem 0 0;
    }
    h4 {
        color: ${props => props.theme.theme.linkColor};
        font-weight: 300;
        margin: 1rem 0 0;
    }
    p {
        font-size: 1.25rem;
        margin: 1rem 0 0;
    }
`

export const Description = styled.div`
    margin: 1rem;
`

export const ProjectTileWrapper = styled.div`
    ${tileFontStyles}
    background: ${props => props.theme.theme.backgroundColorLight};
    border-radius: 4px;
    width: calc((100% / 4) - 1rem);
    margin: 1rem 0.5rem;
    &:nth-child(4n+1) {
        margin-left: 0;
    }
    &:nth-child(4n) {
        margin-right: 0;
    }
`

export const Image = styled.img`
    height: 150px;
    width: 100%;
`