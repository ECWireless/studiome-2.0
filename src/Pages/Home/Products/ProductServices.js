import React from 'react';
import styled from 'styled-components'

// Images
import StartToFinishPhoto from '../../../assets/home/products/services/StartToFinish.jpg';
import ProductionPhoto from '../../../assets/home/products/services/Production.jpg';
import EditingPhoto from '../../../assets/home/products/services/Post-Editing.jpg';

// Components
import { Box3 } from '../../../components/Boxes'
import respondTo from '../../../components/Breakpoints'
import { ButtonPrimary } from '../../../components/Button'
import { Card } from '../../../components/Cards'
import { Flex } from '../../../components/Containers'
import { H4, P2, P4 } from '../../../components/Typography'
import { Line } from '../../../components/Lines'

export default function ProductServices(props) {
    return (
        <>
            <Flex wrap={true}>
                <Box3 marginTop={50}>
                    <StyledServicesCard>
                        <a
                            target="_blank" href="https://forms.gle/ziysrwi8PtFhJbi57"
                            rel="noopener noreferrer"
                        >
                            <StyledServicesImage
                                onClick={props.onServicesModalToggle}
                                style={{backgroundImage: `url(${StartToFinishPhoto})`}}
                            />
                        </a>
                        <Box3 marginTop={50}>
                            <H4 uppercase light>Start to Finish</H4>
                        </Box3>
                        <Box3 marginTop={10}>
                            <Line width={150} height={3} color={'orange'} />
                        </Box3>
                        <Box3 marginRight={25} marginLeft={25} marginTop={25}>
                            <P4>
                                We can help you at every step from script writing to launch. Let our team of experts take your project to the next level.
                            </P4>
                        </Box3>
                        <StyledListContainer>
                            <Flex direction={'column'}>
                                <Box3 marginRight={25} marginLeft={25} marginTop={25}>
                                    <P2>Capabilities:</P2>
                                </Box3>
                                <Box3 marginRight={25} marginLeft={25} marginTop={10}>
                                    <P4>
                                        <ul>
                                            <li>Creative Consultation</li>
                                            <li>Script Writing & Storyboarding</li>
                                            <li>Talent & Crew Search</li>
                                            <li>Project Management</li>
                                            <li>Production & Post Editing</li>
                                            <li>Formatting & Delivery</li>
                                        </ul>
                                    </P4>
                                </Box3>
                            </Flex>
                        </StyledListContainer>
                        <a
                            target="_blank"
                            href="https://forms.gle/ziysrwi8PtFhJbi57"
                            rel="noopener noreferrer"
                            style={{ position: 'absolute', bottom: 25 }}
                        >
                            <ButtonPrimary
                                size={'lg'}
                                onClick={props.onServicesModalToggle}
                            >
                                Get a quote
                            </ButtonPrimary>
                        </a>
                    </StyledServicesCard>
                </Box3>
                
                <Box3 marginTop={50}>
                    <StyledServicesCard>
                        <a
                            target="_blank" href="https://forms.gle/ziysrwi8PtFhJbi57"
                            rel="noopener noreferrer"
                        >
                            <StyledServicesImage
                                onClick={props.onServicesModalToggle}
                                style={{backgroundImage: `url(${ProductionPhoto})`}}
                            />
                        </a>
                        <Box3 marginTop={50}>
                            <H4 uppercase light>Production</H4>
                        </Box3>
                        <Box3 marginTop={10}>
                            <Line width={150} height={3} color={'orange'} />
                        </Box3>
                        <Box3 marginRight={25} marginLeft={25} marginTop={25}>
                            <P4>
                                We use the same modern approach to streamline both small and large projects, whether in studio or on location.
                            </P4>
                        </Box3>
                        <StyledListContainer>
                            <Flex direction={'column'}>
                                <Box3 marginRight={25} marginLeft={25} marginTop={25}>
                                    <P2>Capabilities:</P2>
                                </Box3>
                                <Box3 marginRight={25} marginLeft={25} marginTop={10}>
                                    <P4>
                                        <ul>
                                            <li>Video Production</li>
                                            <li>Audio Recording</li>
                                            <li>Photography</li>
                                            <li>360 VR Recording</li>
                                        </ul>
                                    </P4>
                                </Box3>
                            </Flex>
                        </StyledListContainer>
                        <a
                            target="_blank"
                            href="https://forms.gle/ziysrwi8PtFhJbi57"
                            rel="noopener noreferrer"
                            style={{ position: 'absolute', bottom: 25 }}
                        >
                            <ButtonPrimary
                                size={'lg'}
                                onClick={props.onServicesModalToggle}
                            >
                                Get a quote
                            </ButtonPrimary>
                        </a>
                    </StyledServicesCard>
                </Box3>

                <Box3 marginTop={50}>
                    <StyledServicesCard>
                        <a
                            target="_blank" href="https://forms.gle/ziysrwi8PtFhJbi57"
                            rel="noopener noreferrer"
                        >
                            <StyledServicesImage
                                onClick={props.onServicesModalToggle}
                                style={{backgroundImage: `url(${EditingPhoto})`}}
                            />
                        </a>
                        <Box3 marginTop={50}>
                            <H4 uppercase light>Post Editing</H4>
                        </Box3>
                        <Box3 marginTop={10}>
                            <Line width={150} height={3} color={'orange'} />
                        </Box3>
                        <Box3 marginRight={25} marginLeft={25} marginTop={25}>
                            <P4>
                                Our editors can work to spice up your existing content, create new digital content, or a little of both.
                            </P4>
                        </Box3>
                        <StyledListContainer>
                            <Flex direction={'column'}>
                                <Box3 marginRight={25} marginLeft={25} marginTop={25}>
                                    <P2>Capabilities:</P2>
                                </Box3>
                                <Box3 marginRight={25} marginLeft={25} marginTop={10}>
                                    <P4>
                                        <ul>
                                            <li>Video Editing</li>
                                            <li>Photo Editing</li>
                                            <li>Audio Editing</li>
                                            <li>Motion Graphics</li>
                                            <li>Animations</li>
                                            <li>360 VR Editing</li>
                                        </ul>
                                    </P4>
                                </Box3>
                            </Flex>
                        </StyledListContainer>
                        <a
                            target="_blank"
                            href="https://forms.gle/ziysrwi8PtFhJbi57"
                            rel="noopener noreferrer"
                            style={{ position: 'absolute', bottom: 25 }}
                        >
                            <ButtonPrimary
                                size={'lg'}
                                onClick={props.onServicesModalToggle}
                            >
                                Get a quote
                            </ButtonPrimary>
                        </a>
                    </StyledServicesCard>
                </Box3>
            </Flex>
        </>
    )
}

const StyledServicesCard = styled(Card)`
    z-index: 0;
    position: relative;
    justify-self: center;
    width: 30rem;
    height: 22rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    animation: onServiceFadeIn .7s ease-out;

    ${respondTo.xs`
        width: 40rem;
        height: 25rem;
    `}
    
    ${respondTo.sm`
        width: 17.5rem;
        height: 70rem;
    `}

    ${respondTo.md`
        width: 25rem;
        height: 70rem;
    `}
`

const StyledServicesImage = styled.div`
    width: 25rem;
    height: 20rem;
    background-position: center;
    background-size: cover;
    transition: opacity .3s ease;
    display: none;

    &:hover {
        cursor: pointer;
        opacity: .8;
    }

    ${respondTo.sm`
        display: block;
    `}
`

const StyledListContainer = styled.ul`
    display: none;

    ${respondTo.sm`
        display: block;
    `}
`
