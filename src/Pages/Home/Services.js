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

// Photos
import BannerImage from '../../assets/home/services/Banner-2.jpg'
import Studio1 from '../../assets/home/services/studios/Audio-Room-small.jpg';
import Studio2 from '../../assets/home/services/studios/podcast-small.jpg';
import Studio3 from '../../assets/home/services/studios/MP-Studio-Main.jpg';
import Studio4 from '../../assets/home/services/studios/Studio-E-small.jpg';

import Equipment1 from '../../assets/home/services/equipment/Equipment-1.jpg';
import Equipment2 from '../../assets/home/services/equipment/Equipment-2.jpg';
import Equipment3 from '../../assets/home/services/equipment/Equipment-3.jpg';
import Equipment4 from '../../assets/home/services/equipment/Equipment-4.jpg';

import Workstation1 from '../../assets/home/services/workstation/workstation-1-small.jpg';
import Workstation2 from '../../assets/home/services/workstation/workstation-2-small.jpg';
import Workstation3 from '../../assets/home/services/workstation/workstation-3-small.jpg';
import Workstation4 from '../../assets/home/services/workstation/workstation-4-small.jpg';

export default function Services(props) {
    return (
        <>
            <Banner color="orange" text="Our Services" image={BannerImage}/>
            <Container>
                <Box3 marginTop={75} marginBottom={25}>
                    <H3 uppercase center>Studio Space</H3>
                </Box3>
                <P2 center>Our studio spaces make it as easy as possible to produce video, photo, and audio content. They are designed for headshots, social media videos, kickstarter videos, podcasts, and more.</P2>
                <Box3 marginTop={50}>
                    <Flex wrap='true' justify={'space-between'} align={'center'}>
                        <Box3 marginBottom={25}>
                            <ServicesPhoto style={{backgroundImage: `url(${Studio1})`, borderBottom: `4px solid ${colors.teal}`}} />
                        </Box3>
                        <Box3 marginBottom={25}>
                            <ServicesPhoto style={{backgroundImage: `url(${Studio2})`, borderBottom: `4px solid ${colors.orange}`}} />
                        </Box3>
                        <Box3 marginBottom={25}>
                            <ServicesPhoto style={{backgroundImage: `url(${Studio3})`, borderBottom: `4px solid ${colors.green}`}} />
                        </Box3>
                        <Box3 marginBottom={25}>
                            <ServicesPhoto style={{backgroundImage: `url(${Studio4})`, borderBottom: `4px solid ${colors.teal}`}} />
                        </Box3>
                    </Flex>
                </Box3>
                <Box3 marginTop={75} marginBottom={25}>
                    <H3 uppercase center>Equipment Rentals</H3>
                </Box3>
                <P2 center>We offer camera bodies, lenses, and other gear for all of your photography and videography needs.</P2>
                <Box3 marginTop={50}>
                    <Flex wrap='true' justify={'space-between'} align={'center'}>
                        <Box3 marginBottom={25}>
                            <ServicesPhoto style={{backgroundImage: `url(${Equipment1})`, borderBottom: `4px solid ${colors.orange}`}} />
                        </Box3>
                        <Box3 marginBottom={25}>
                            <ServicesPhoto style={{backgroundImage: `url(${Equipment2})`, borderBottom: `4px solid ${colors.green}`}} />
                        </Box3>
                        <Box3 marginBottom={25}>
                            <ServicesPhoto style={{backgroundImage: `url(${Equipment3})`, borderBottom: `4px solid ${colors.teal}`}} />
                        </Box3>
                        <Box3 marginBottom={25}>
                            <ServicesPhoto style={{backgroundImage: `url(${Equipment4})`, borderBottom: `4px solid ${colors.orange}`}} />
                        </Box3>
                    </Flex>
                </Box3>
                <Box3 marginTop={75} marginBottom={25}>
                    <H3 uppercase center>Editing Workstations</H3>
                </Box3>
                <P2 center>Workstations are available for post-production and video FX. The stations include a powerful 27″ iMac, packed with the entire Adobe Cloud, Final Cut X, and iMovie. Stations also include free access to our professional music and sound effects libraries.</P2>
                <Box3 marginTop={50}>
                    <Flex wrap='true' justify={'space-between'} align={'center'}>
                        <Box3 marginBottom={25}>
                            <ServicesPhoto style={{backgroundImage: `url(${Workstation4})`, borderBottom: `4px solid ${colors.green}`}} />
                        </Box3>
                        <Box3 marginBottom={25}>
                            <ServicesPhoto style={{backgroundImage: `url(${Workstation1})`, borderBottom: `4px solid ${colors.teal}`}} />
                        </Box3>
                        <Box3 marginBottom={25}>
                            <ServicesPhoto style={{backgroundImage: `url(${Workstation2})`, borderBottom: `4px solid ${colors.orange}`}} />
                        </Box3>
                        <Box3 marginBottom={25}>
                            <ServicesPhoto style={{backgroundImage: `url(${Workstation3})`, borderBottom: `4px solid ${colors.green}`}} />
                        </Box3>
                    </Flex>
                </Box3>
                <Box3 marginTop={50} marginBottom={75}>
                    <Flex align={'center'} justify={'center'}>
                        <NavLink
                            onClick={props.onQuickButtonFix.bind(this, 'rentals')}
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
