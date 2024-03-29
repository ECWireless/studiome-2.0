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
		<>
			<ExamplesBackground>
				<Container>
					<H2 uppercase center>Some of our work</H2>
					<Box3 marginTop={10} marginBottom={50}>
							<Line width={150} height={3} color={'orange'} />
					</Box3>
					<Flex wrap={'true'}>
						<Fade bottom ssrFadeout>
							<Box3 marginBottom={25}>
								<CardContainer>
									<ExampleVideo
										src={'https://player.vimeo.com/video/651689605'}
										frameborder={0} allow={'autoplay; fullscreen'} allowfullscreen
									/>
								</CardContainer>
							</Box3>
						</Fade>
						<Fade bottom delay={200} ssrFadeout>
							<Box3 marginBottom={25}>
								<CardContainer>
									<ExampleVideo
										src={'https://player.vimeo.com/video/786112487?h=63d9f4dcad'}
										frameborder={0} allow={'autoplay; fullscreen'} allowfullscreen
									/>
								</CardContainer>
							</Box3>
						</Fade>
						<Fade bottom ssrFadeout>
							<Box3 marginBottom={25}>
								<CardContainer>
									<ExampleVideo
										src={'https://player.vimeo.com/video/678736360?h=eb055f50d0'}
										frameborder={0} allow={'autoplay; fullscreen'} allowfullscreen
									/>
								</CardContainer>
							</Box3>
						</Fade>
						<Fade bottom delay={200} ssrFadeout>
							<Box3 marginBottom={25}>
								<CardContainer>
									<ExampleVideo
										src={'https://player.vimeo.com/video/799646886?h=5844db8734'}
										frameborder={0} allow={'autoplay; fullscreen'} allowfullscreen
									/>
								</CardContainer>
							</Box3>
						</Fade>
					</Flex>
				</Container>
				</ExamplesBackground>

			<ExamplesBackground>
				<Container>
					<H2 uppercase center>What Our Clients Say</H2>
					<Box3 marginTop={10} marginBottom={50}>
							<Line width={150} height={3} color={'orange'} />
					</Box3>
					<Flex wrap={'true'}>
						<Fade bottom ssrFadeout>
							<Box3 marginBottom={25}>
								<CardContainer>
									<ExampleVideo
										src={'https://player.vimeo.com/video/794582308?h=7d76898675'}
										frameborder={0} allow={'autoplay; fullscreen'} allowfullscreen
									/>
								</CardContainer>
							</Box3>
						</Fade>
						<Fade bottom delay={200} ssrFadeout>
							<Box3 marginBottom={25}>
								<CardContainer>
									<ExampleVideo
										src={'https://player.vimeo.com/video/495195149?h=96a76e7e52'}
										frameborder={0} allow={'autoplay; fullscreen'} allowfullscreen
									/>
								</CardContainer>
							</Box3>
						</Fade>
						<Fade bottom ssrFadeout>
							<Box3 marginBottom={25}>
								<CardContainer>
									<ExampleVideo
										src={'https://player.vimeo.com/video/822105710?h=9ea971081e'}
										frameborder={0} allow={'autoplay; fullscreen'} allowfullscreen
									/>
								</CardContainer>
							</Box3>
						</Fade>
						<Fade bottom delay={200} ssrFadeout>
							<Box3 marginBottom={25}>
								<CardContainer>
									<ExampleVideo
										src={'https://player.vimeo.com/video/284189590?h=0dff5455fa'}
										frameborder={0} allow={'autoplay; fullscreen'} allowfullscreen
									/>
								</CardContainer>
							</Box3>
						</Fade>
						</Flex>
					</Container>
				</ExamplesBackground>
			</>
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
