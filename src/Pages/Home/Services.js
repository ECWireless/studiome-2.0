import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import respondTo from '../../components/Breakpoints'

// Components
import { colors, shadows } from '../../components/theme'
import Banner from '../../components/Banner'
import { Box3 } from '../../components/Boxes'
import Button from '../../components/Button'
import { Container, Flex } from '../../components/Containers'
import { H3, P2 } from '../../components/Typography'

export default function Services({
    onQuickButtonFix,
    servicesBannerTitle,
    servicesBannerImage,
    services1Title,
    services1Description,
    services1Image1,
    services1Image2,
    services1Image3,
    services1Image4,
    services2Title,
    services2Description,
    services2Image1,
    services2Image2,
    services2Image3,
    services2Image4,
    services3Title,
    services3Description,
    services3Image1,
    services3Image2,
    services3Image3,
    services3Image4,
}) {
    return (
        <>
            <Banner color="orange" text={servicesBannerTitle} image={servicesBannerImage}/>
            <Container>
                <Box3 marginTop={75} marginBottom={25}>
                    <H3 uppercase center>{services1Title}</H3>
                </Box3>
                <P2 center>{services1Description}</P2>
                <Box3 marginTop={50}>
                    <Flex wrap='true' justify={'space-between'} align={'center'}>
                        <Box3 marginBottom={25}>
                            <ServicesPhoto style={{backgroundImage: `url(${services1Image1})`, borderBottom: `4px solid ${colors.teal}`}} />
                        </Box3>
                        <Box3 marginBottom={25}>
                            <ServicesPhoto style={{backgroundImage: `url(${services1Image2})`, borderBottom: `4px solid ${colors.orange}`}} />
                        </Box3>
                        <Box3 marginBottom={25}>
                            <ServicesPhoto style={{backgroundImage: `url(${services1Image3})`, borderBottom: `4px solid ${colors.green}`}} />
                        </Box3>
                        <Box3 marginBottom={25}>
                            <ServicesPhoto style={{backgroundImage: `url(${services1Image4})`, borderBottom: `4px solid ${colors.teal}`}} />
                        </Box3>
                    </Flex>
                </Box3>
                <Box3 marginTop={75} marginBottom={25}>
                    <H3 uppercase center>{services2Title}</H3>
                </Box3>
                <P2 center>{services2Description}</P2>
                <Box3 marginTop={50}>
                    <Flex wrap='true' justify={'space-between'} align={'center'}>
                        <Box3 marginBottom={25}>
                            <ServicesPhoto style={{backgroundImage: `url(${services2Image1})`, borderBottom: `4px solid ${colors.orange}`}} />
                        </Box3>
                        <Box3 marginBottom={25}>
                            <ServicesPhoto style={{backgroundImage: `url(${services2Image2})`, borderBottom: `4px solid ${colors.green}`}} />
                        </Box3>
                        <Box3 marginBottom={25}>
                            <ServicesPhoto style={{backgroundImage: `url(${services2Image3})`, borderBottom: `4px solid ${colors.teal}`}} />
                        </Box3>
                        <Box3 marginBottom={25}>
                            <ServicesPhoto style={{backgroundImage: `url(${services2Image4})`, borderBottom: `4px solid ${colors.orange}`}} />
                        </Box3>
                    </Flex>
                </Box3>
                <Box3 marginTop={75} marginBottom={25}>
                    <H3 uppercase center>{services3Title}</H3>
                </Box3>
                <P2 center>{services3Description}</P2>
                <Box3 marginTop={50}>
                    <Flex wrap='true' justify={'space-between'} align={'center'}>
                        <Box3 marginBottom={25}>
                            <ServicesPhoto style={{backgroundImage: `url(${services3Image1})`, borderBottom: `4px solid ${colors.green}`}} />
                        </Box3>
                        <Box3 marginBottom={25}>
                            <ServicesPhoto style={{backgroundImage: `url(${services3Image2})`, borderBottom: `4px solid ${colors.teal}`}} />
                        </Box3>
                        <Box3 marginBottom={25}>
                            <ServicesPhoto style={{backgroundImage: `url(${services3Image3})`, borderBottom: `4px solid ${colors.orange}`}} />
                        </Box3>
                        <Box3 marginBottom={25}>
                            <ServicesPhoto style={{backgroundImage: `url(${services3Image4})`, borderBottom: `4px solid ${colors.green}`}} />
                        </Box3>
                    </Flex>
                </Box3>
                <Box3 marginTop={50} marginBottom={75}>
                    <Flex align={'center'} justify={'center'}>
                        <NavLink
                            onClick={onQuickButtonFix.bind(this, 'rentals')}
                            to="/" exact
                        >
                            <Button
                                text="Book Now!"
                                size="l"
                            />
                        </NavLink>
                    </Flex>
                </Box3>
            </Container>
        </>
    )
}

const ServicesPhoto = styled.div`
    width: 26rem;
    height: 26rem;
    background-size: cover;
    background-position: center;
    box-shadow: ${shadows.medium};

    ${respondTo.md`
        width: 28rem;
        height: 28rem;
    `}

    ${respondTo.md`
        width: 23rem;
        height: 23rem;
    `}
`
