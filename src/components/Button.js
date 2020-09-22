import React from 'react'
import styled, { css } from 'styled-components'
import respondTo from './Breakpoints'

// Components
import { colors, shadows } from './theme'

export default function Button(props) {
    return (
        <button className={`button button--${props.size}`}>
            {props.children ? props.children : props.arrow ? <span>&larr; {props.text}</span> : props.text}
        </button>
    )
}

export const ButtonPrimary = styled.button`
    align-items: center;
    height: 5rem;
    background-color: ${colors.green};
    border: none;
    border-radius: 5px;
    box-shadow: ${shadows.button};
    color: ${colors.white};
    text-transform: uppercase;
    outline: none;
    font-weight: 100;
    transition: .3s all ease;

    &:hover {
        cursor: pointer;
        background-color: ${colors.greyLight};
        color: ${colors.green};
    }

    &:active {
        box-shadow: none;
    }

    ${props => props.size === 'sm' && css`
        width: 4rem;
        height: 3rem;
        font-size: 1rem;

        ${respondTo.sm`
            width: 5rem;
            height: 4rem;
            font-size: 1rem;
        `}

        ${respondTo.md`
            width: 6rem;
            height: 4rem;
        `}
    `}

    ${props => props.size === 'md' && css`
        width: 8rem;
        height: 3rem;
        font-size: 1.2rem;

        ${respondTo.sm`
            width: 9rem;
            height: 4rem;
            font-size: 1.4rem;
        `}

        ${respondTo.md`
            width: 10rem;
        `}
    `}

    ${props => props.size === 'lg' && css`
        width: 12rem;
        height: 5rem;
        font-size: 1.2rem;

        ${respondTo.sm`
            width: 14rem;
            height: 5rem;
            font-size: 1.4rem;
        `}

        ${respondTo.md`
            width: 15rem;
        `}
    `}
`
