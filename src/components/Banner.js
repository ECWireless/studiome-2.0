import React from 'react'
import styled from 'styled-components'
import respondTo from './Breakpoints'

// Components
import { Box1 } from '../components/Boxes'
import { Line } from '../components/Lines'

const Banner = (props) => {
    return (
        <BannerContainer style={{backgroundImage: `url(${props.image})`}} className="flex-column banner-container">
            <h1 className={`h1 ${props.textColor === "grey" ? "grey" : "white"} uppercase`}>{props.text}</h1>
            <Box1 marginTop={20}>
                <Line width={100} height={3} color={props.color} />
            </Box1>
        </BannerContainer>
    )
}

export const BannerAlt = (props) => {
    return (
        <BannerContainer style={{backgroundImage: `url(${props.image})`}} className="flex-column banner-container">
            <div className="banner-background" style={{zIndex: 1}} />
            <h1 className="h1 uppercase banner-alt-text" style={{zIndex: 2}}>{props.text}</h1>
        </BannerContainer>
    )
}

const BannerContainer = styled.div`
    width: 100%;
    height: 14rem;
    background-size: cover;
    background-position: center;
    align-items: center;
    justify-content: center;

    ${respondTo.sm`
        height: 30rem;
    `}
`

export default Banner
