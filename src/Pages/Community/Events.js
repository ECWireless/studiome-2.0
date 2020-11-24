import React, { useEffect, useState } from 'react'
import { graphql } from 'react-apollo'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import imageUrlBuilder from '@sanity/image-url'
import { client } from '../../client'
import respondTo from '../../components/Breakpoints'

// Queries
import { addImpression } from '../../analytics/queries'

// Components
import { colors, shadows } from '../../components/theme'
import { BannerAlt } from '../../components/Banner'
import { Box1, Box3 } from '../../components/Boxes'
import { ButtonPrimary } from '../../components/Button'
import { Container, Flex, Col2, Col2Left, Col2Right } from '../../components/Containers'
import { Line } from '../../components/Lines'
import { CustomLink } from '../../components/Links'
import { H3, P1, P3, P4 } from '../../components/Typography'

// Images
import EventImage1 from '../../assets/community/events/event-1.jpg'
import EventImage2 from '../../assets/community/events/event-2.jpg'

export const Events = ({
    addImpression
}) => {
    const [content, setContent] = useState({})

    useEffect(() => {
        window.scroll({
            top: 0,
        })

        addImpression({
			variables: {
				date: new Date().toISOString().slice(0, 10),
				productId: "5e5fc31d5393db0004e43a68"
			}
        })
        
        client.fetch('*[_type == "community" && slug.current == "v1"][0]').then(pageProps => {
            setContent(pageProps)
        })
    }, [addImpression])

    function urlFor(source) {
        return imageUrlBuilder(client).image(source)
    }

    return (
        <>
            <BannerAlt image={urlFor(content.eventsBannerImage)} color={colors.green}>
                {content.eventsBannerTitle}
            </BannerAlt>
            <Container>
                <Box1 marginTop={50} marginBottom={50}>
                    <Flex justify={'flex-end'}>
                        <NavLink to="/community">
                            <ButtonPrimary size="md">
                                &larr; back
                            </ButtonPrimary>
                        </NavLink>
                    </Flex>
                </Box1>
                <Fade>
                    <P1 center>
                        {content.eventsDescription}
                    </P1>
                </Fade>
                <Box3 marginTop={75}>
                    <H3>Past Events</H3>
                </Box3>
                <Box3 marginTop={10} marginBottom={50}>
                    <Line
                        width={100}
                        height={3}
                        color={colors.green}
                        left
                    />
                </Box3>
                <Box1 marginBottom={50}>
                    <Col2>
                        <Col2Left>
                            <Box1 marginBottom={50}>
                                <CustomLink
                                    href="https://www.facebook.com/events/2704390353218173/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <EventCard>
                                        <EventPhoto style={{ backgroundImage: `url(${EventImage2})`}} />
                                        <TextContainer>
                                            <Box3 marginBottom={10}>
                                                <P4 color={colors.orange}>Thurs, July 23rd, 3pm</P4>
                                            </Box3>
                                            <P3>Getting Back to Work in the COVID Environment - pt. 2</P3>
                                        </TextContainer>
                                    </EventCard>
                                </CustomLink>
                            </Box1>
                        </Col2Left>
                        <Col2Right>
                            <Box1 marginBottom={25}>
                                <CustomLink
                                    href="https://www.eventbrite.com/e/teaching-me-with-dorin-williams-and-studiome-tickets-93586924009"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <EventCard>
                                        <EventPhoto style={{ backgroundImage: `url(${EventImage1})`}} />
                                        <TextContainer>
                                            <Box3 marginBottom={10}>
                                                <P4 color={colors.orange}>Sat, March 14th, 1pm</P4>
                                            </Box3>
                                            <P3>Teaching Me with Dorin Williams & StudioME</P3>
                                        </TextContainer>
                                    </EventCard>
                                </CustomLink>
                            </Box1>
                        </Col2Right>
                    </Col2>
                </Box1>
            </Container>
        </>
    )
}

export default graphql(addImpression, { name: "addImpression" })(Events);

const EventCard = styled.div`
    align-self: center;
    justify-self: flex-start;
    height: 22rem;
    width: 28rem;
    box-shadow: ${shadows.dark};
    text-decoration: none;
    border: 1px solid ${colors.teal};
    border-radius: 5px;
    overflow: hidden;
    transition: all .3s ease;

    ${respondTo.xs`
        height: 22rem;
        width: 30rem;
    `}

    ${respondTo.sm`
        height: 28rem;
        width: 45rem;
    `}

    ${respondTo.md`
        height: 28rem;
        width: 38rem;
    `}

    ${respondTo.lg`
        height: 28rem;
        width: 45rem;
    `}

    &:hover {
        cursor: pointer;
        box-shadow: ${shadows.large};
        transform: scale(1.02);
    }
`

const EventPhoto = styled.div`
    background-size: cover;
    background-position: center;
    height: 14rem;
    width: 100%;

    ${respondTo.sm`
        height: 18rem;
    `}
`

const TextContainer = styled.div`
    padding: 1.5rem;

    ${respondTo.sm`
        padding: 2rem;
    `}
`
