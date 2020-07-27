import styled, { css } from 'styled-components'
import respondTo from './Breakpoints'

export const H1 = styled.h1`
    font-size: 3rem;
    color: #757575;

    ${respondTo.xs`
        font-size: 3.8rem;
    `}
    
    ${respondTo.sm`
    `}

    ${respondTo.md`
        font-size: 4.5rem;
    `}

    ${respondTo.lg`
    `}

    ${props => props.center && css`
        text-align: center;
    `}

    ${props => props.light && css`
        font-weight: 100;
    `}

    ${props => props.uppercase && css`
        text-transform: uppercase;
    `}
`

export const H2 = styled.h2`
    font-size: 1.8rem;
    color: #757575;

    ${respondTo.xs`
        font-size: 2rem;
    `}
    
    ${respondTo.sm`
        font-size: 2.4rem;
    `}

    ${respondTo.md`
        font-size: 3.4rem;
    `}

    ${respondTo.lg`
        font-size: 4rem;
    `}

    ${props => props.center && css`
        text-align: center;
    `}

    ${props => props.light && css`
        font-weight: 100;
    `}

    ${props => props.uppercase && css`
        text-transform: uppercase;
    `}
`

export const H3 = styled.h3`
    font-size: 1.6rem;
    color: #757575;

    ${respondTo.xs`
        font-size: 1.8rem;
    `}
    
    ${respondTo.sm`
        font-size: 2.4rem;
    `}

    ${respondTo.md`
        font-size: 2.8rem;
    `}

    ${respondTo.lg`
        font-size: 3.2rem;
    `}

    ${props => props.center && css`
        text-align: center;
    `}

    ${props => props.light && css`
        font-weight: 100;
    `}

    ${props => props.uppercase && css`
        text-transform: uppercase;
    `}
`

export const P1 = styled.p`
    font-size: 1.4rem;
    color: #757575;

    ${respondTo.xs`
    `}
    
    ${respondTo.sm`
        font-size: 1.8rem;
    `}

    ${respondTo.md`
        font-size: 2rem;
    `}

    ${respondTo.lg`
    `}

    ${props => props.center && css`
        text-align: center;
    `}

    ${props => props.light && css`
        font-weight: 100;
    `}

    ${props => props.uppercase && css`
        text-transform: uppercase;
    `}
`

export const P2 = styled.p`
    font-size: 1.2rem;
    color: #757575;

    ${respondTo.xs`
        font-size: 1.4rem;
    `}
    
    ${respondTo.sm`
        font-size: 1.6rem;
    `}

    ${respondTo.md`
        font-size: 1.8rem;
    `}

    ${respondTo.lg`
        font-size: 2rem;
    `}

    ${props => props.center && css`
        text-align: center;
    `}

    ${props => props.light && css`
        font-weight: 100;
    `}

    ${props => props.uppercase && css`
        text-transform: uppercase;
    `}
`

export const P3 = styled.div`
    font-size: 1.1rem;
    color: #757575;

    ${respondTo.xs`
        font-size: 1.2rem;
    `}
    
    ${respondTo.sm`
        font-size: 1.4rem;
    `}

    ${respondTo.md`
        font-size: 1.6rem;
    `}

    ${respondTo.lg`
        font-size: 1.8rem;
    `}

    ${props => props.center && css`
        text-align: center;
    `}

    ${props => props.light && css`
        font-weight: 100;
    `}

    ${props => props.uppercase && css`
        text-transform: uppercase;
    `}
`
