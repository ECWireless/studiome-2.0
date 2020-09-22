import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

// Components
import { colors } from '../../components/theme'
import { BannerAlt } from '../../components/Banner'
import { Box1 } from '../../components/Boxes'
import { ButtonPrimary } from '../../components/Button'
import { Container, Flex } from '../../components/Containers'
import { H3, P1 } from '../../components/Typography'

// Images
import BannerImage from '../../assets/community/events/events-banner.jpg'

export default class Learn extends Component {

    componentDidMount() {
        window.scroll({
            top: 0,
        });
    }

    render() {
        return (
            <>
                <BannerAlt image={BannerImage} color={colors.green}>
                    Learn
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
                    <P1 center>
                        As part of our mission to foster a community of creators, StudioME offers free resources for those looking to up their skills in photography, editing, lighting, VFX, and more. Feel free to contact us requesting a new resource!
                    </P1>
                    <Box1 marginTop={75} marginBottom={50}>
                        <H3 center>Pick a category:</H3>
                    </Box1>
                    <Box1 marginBottom={50}>
                        <Flex justify={'space-between'}>
                            <ButtonPrimary size="lg">
                                Photography
                            </ButtonPrimary>
                            <ButtonPrimary size="lg">
                                Production
                            </ButtonPrimary>
                            <ButtonPrimary size="lg">
                                Editing
                            </ButtonPrimary>
                            <ButtonPrimary size="lg">
                                Lighting
                            </ButtonPrimary>
                            <ButtonPrimary size="lg">
                                VFX
                            </ButtonPrimary>
                        </Flex>
                    </Box1>
                </Container>
            </>
        )
    }
}
