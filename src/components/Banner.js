import React from 'react'
import styled from 'styled-components'
import respondTo from './Breakpoints'

// Components
import { Box1 } from '../components/Boxes'
import { Flex } from '../components/Containers'
import { Line } from '../components/Lines'

const Banner = (props) => {
    return (
        <BannerContainer style={{backgroundImage: `url(${props.image})`}} className="flex-column banner-container">
            <Box1 marginTop={10}>
                <h1 className={`h1 ${props.textColor === "grey" ? "grey" : "white"} center uppercase`}>{!props.text ? props.children : props.text}</h1>
                <Box1 marginTop={20}>
                    <Line width={100} height={3} color={props.color} />
                </Box1>
            </Box1>
        </BannerContainer>
    )
}

export const BannerAlt = (props) => {
    return (
        <BannerContainer style={{backgroundImage: `url(${props.image})`}}>
            <Flex direction={'column'} style={{ height: '100%' }} align={'center'} justify={'center'}>
                <BannerBackground />
                <h1 className="h1 uppercase banner-alt-text" style={{zIndex: 2}}>{!props.text ? props.children : props.text}</h1>
                <Box1 marginTop={20} style={{zIndex: 3}}>
                    <Line width={100} height={3} color={props.color} />
                </Box1>
            </Flex>
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
    position: relative;

    ${respondTo.xs`
        height: 20rem;
    `}

    ${respondTo.sm`
        height: 30rem;
    `}
`

const BannerBackground = styled.div`
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    height: 14rem;
    width: 100%;
    padding: 4rem;
    z-index: 2;

    ${respondTo.xs`
        height: 20rem;
    `}

    ${respondTo.sm`
        height: 30rem;
    `}

    ${respondTo.md`
        background-color: rgba(0, 0, 0, 0.5);
        height: 30rem;
        width: 100%;
        border-radius: 0;
    `}
`

export default Banner
