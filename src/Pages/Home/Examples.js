import React from 'react'
import Fade from 'react-reveal/Fade';
import styled from 'styled-components'
import respondTo from '../../components/Breakpoints'

// Components
import { shadows } from '../../components/theme'
import { Box3 } from '../../components/Boxes'
import { Container, Flex } from '../../components/Containers'
import { Line } from '../../components/Lines'
import { H2 } from '../../components/Typography'

const Examples = () => {
    return (
        <ExamplesBackground>
            <Container>
                <H2 uppercase center>Some of our work</H2>
                <Box3 marginTop={10} marginBottom={50}>
                    <Line width={150} height={3} color={'orange'} />
                </Box3>
                <Flex wrap={true}>
                    <Fade bottom ssrFadeout>
                        <Box3 marginBottom={25}>
                            <CardContainer>
                                <ExampleVideo
                                    src={'https://player.vimeo.com/video/352268055'}
                                    frameborder={0} allow={'autoplay; fullscreen'} allowfullscreen
                                />
                            </CardContainer>
                        </Box3>
                    </Fade>
                    <Fade bottom delay={200} ssrFadeout>
                        <Box3 marginBottom={25}>
                            <CardContainer>
                                <ExampleVideo
                                    src={'https://player.vimeo.com/video/220716527'}
                                    frameborder={0} allow={'autoplay; fullscreen'} allowfullscreen
                                />
                            </CardContainer>
                        </Box3>
                    </Fade>
                    <Fade bottom ssrFadeout>
                        <Box3 marginBottom={25}>
                            <CardContainer>
                                <ExampleVideo
                                    src={'https://player.vimeo.com/video/249834272'}
                                    frameborder={0} allow={'autoplay; fullscreen'} allowfullscreen
                                />
                            </CardContainer>
                        </Box3>
                    </Fade>
                    <Fade bottom delay={200} ssrFadeout>
                        <Box3 marginBottom={25}>
                            <CardContainer>
                                <ExampleVideo
                                    src={'https://player.vimeo.com/video/504781681'}
                                    frameborder={0} allow={'autoplay; fullscreen'} allowfullscreen
                                />
                            </CardContainer>
                        </Box3>
                    </Fade>
                </Flex>
            </Container>
        </ExamplesBackground>
    )
}

const ExamplesBackground = styled.div`
    width: 100%;
    margin: 4rem auto;
    ${respondTo.lg`
        margin: 5rem auto;
    `}
    ${respondTo.lg`
        margin: 8rem auto;
    `}
    ${respondTo.xl`
        margin: 10rem auto;
    `}
`

const CardContainer = styled.div`
    width: 28rem;
    height: 16rem;
    ${respondTo.xs`
        width: 40rem;
        height: 23rem;
    `}
    ${respondTo.sm`
        width: 29rem;
        height: 17rem;
    `}
    ${respondTo.md`
        width: 39rem;
        height: 22rem;
    `}
    ${respondTo.lg`
        width: 49rem;
        height: 28rem;
    `}
`

const ExampleVideo = styled.iframe`
    height: 100%;
    width: 100%;
    border: none;
    box-shadow: ${shadows.card};
`

export default Examples
