import styled from 'styled-components'

export const NavWrapper = styled.div`
    display: flex;
    flex-flow: column wrap;
    right: 0;
    height: 100vh;
    justify-content: space-evenly;
    margin-right: 1rem;
    position: fixed;
    top: 0;
    width: 20vw;
    a {
        margin-top: 1rem;
        &:first-child {
            margin-top: 0;
        }
    }
`