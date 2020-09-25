import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import styled, { css } from 'styled-components'
import Fade from 'react-reveal/Fade'
import respondTo from '../../components/Breakpoints'


// Components
import { colors, shadows } from '../../components/theme'
import { BannerAlt } from '../../components/Banner'
import { Box1 } from '../../components/Boxes'
import { ButtonPrimary } from '../../components/Button'
import { Container, Flex } from '../../components/Containers'
import PhotoGallery from '../../components/PhotoGallery'
import { H3, P1 } from '../../components/Typography'

// Images
import BannerImage from '../../assets/community/gallery/gallery-banner.jpg'
import StudiosImage1 from '../../assets/community/gallery/studios/studios-1.jpg'
import StudiosImage2 from '../../assets/community/gallery/studios/studios-2.jpg'
import StudiosImage3 from '../../assets/community/gallery/studios/studios-3.jpg'
import StudiosImage4 from '../../assets/community/gallery/studios/studios-4.jpg'
import StudiosImage5 from '../../assets/community/gallery/studios/studios-5.jpg'
import StudiosImage6 from '../../assets/community/gallery/studios/studios-6.jpg'
import StudiosImage7 from '../../assets/community/gallery/studios/studios-7.jpg'
import StudiosImage8 from '../../assets/community/gallery/studios/studios-8.jpg'
import EventsImage1 from '../../assets/community/gallery/events/events-1.jpg'
import CreationImage1 from '../../assets/community/gallery/creation/creation-1.jpg'
import CreationImage2 from '../../assets/community/gallery/creation/creation-2.jpg'
import CreationImage3 from '../../assets/community/gallery/creation/creation-3.jpg'
import CreationImage4 from '../../assets/community/gallery/creation/creation-4.jpg'
import CreationImage5 from '../../assets/community/gallery/creation/creation-5.jpg'
import CreationImage6 from '../../assets/community/gallery/creation/creation-6.jpg'
import CreationImage7 from '../../assets/community/gallery/creation/creation-7.jpg'
import CommunityImage1 from '../../assets/community/gallery/community/community-1.jpg'
import CommunityImage2 from '../../assets/community/gallery/community/community-2.jpg'
import CommunityImage3 from '../../assets/community/gallery/community/community-3.jpg'
import CommunityImage4 from '../../assets/community/gallery/community/community-4.jpg'
import CommunityImage5 from '../../assets/community/gallery/community/community-5.jpg'
import CommunityImage6 from '../../assets/community/gallery/community/community-6.jpg'
import CommunityImage7 from '../../assets/community/gallery/community/community-7.jpg'
import CommunityImage8 from '../../assets/community/gallery/community/community-8.jpg'
import CommunityImage9 from '../../assets/community/gallery/community/community-9.jpg'

const photos = [
    {
        photo: StudiosImage1,
        category: 'studios'
    },
    {
        photo: StudiosImage2,
        category: 'studios'
    },
    {
        photo: StudiosImage3,
        category: 'studios'
    },
    {
        photo: StudiosImage4,
        category: 'studios'
    },
    {
        photo: StudiosImage5,
        category: 'studios'
    },
    {
        photo: StudiosImage6,
        category: 'studios'
    },
    {
        photo: StudiosImage7,
        category: 'studios'
    },
    {
        photo: StudiosImage8,
        category: 'studios'
    },
    {
        photo: EventsImage1,
        category: 'events'
    },
    {
        photo: CreationImage1,
        category: 'creation'
    },
    {
        photo: CreationImage2,
        category: 'creation'
    },
    {
        photo: CreationImage3,
        category: 'creation'
    },
    {
        photo: CreationImage4,
        category: 'creation'
    },
    {
        photo: CreationImage5,
        category: 'creation'
    },
    {
        photo: CreationImage6,
        category: 'creation'
    },
    {
        photo: CreationImage7,
        category: 'creation'
    },
    {
        photo: CommunityImage1,
        category: 'community'
    },
    {
        photo: CommunityImage2,
        category: 'community'
    },
    {
        photo: CommunityImage3,
        category: 'community'
    },
    {
        photo: CommunityImage4,
        category: 'community'
    },
    {
        photo: CommunityImage5,
        category: 'community'
    },
    {
        photo: CommunityImage6,
        category: 'community'
    },
    {
        photo: CommunityImage7,
        category: 'community'
    },
    {
        photo: CommunityImage8,
        category: 'community'
    },
    {
        photo: CommunityImage9,
        category: 'community'
    },
]

const Gallery = () => {
    const [category, setCategory] = useState('all')
    const [gallery, setGallery] = useState(false)
    const [galleryNumber, setGalleryNumber] = useState(0)
    const [data, setData] = useState(photos)

    useEffect(() => {
        window.scroll({
            top: 0,
        })
    }, [])

    const selectPhoto = (photoNumber) => {
        setGallery(true)
        setGalleryNumber(photoNumber)
    }

    const toggleRightArrow = () => {
        if (galleryNumber >= data.length-1) {
            setGalleryNumber(0)
        } else {
            setGalleryNumber(galleryNumber + 1)
        }
    }

    const toggleLeftArrow = () => {
        if (galleryNumber === 0) {
            setGalleryNumber(data.length-1)
        } else {
            setGalleryNumber(galleryNumber - 1)
        }
    }

    useEffect(() => {
        switch (category) {
            case 'all':
                setData(photos)
              break;
            case 'studios':
                let studiosData =  photos.filter(function(specificData) {
                    return specificData.category === 'studios';
                })
                setData(studiosData)
              break;
            case 'events':
                let eventsData =  photos.filter(function(specificData) {
                    return specificData.category === 'events';
                })
                setData(eventsData)
              break;
            case 'creation':
                let creationData =  photos.filter(function(specificData) {
                    return specificData.category === 'creation';
                })
                setData(creationData)
              break;
            case 'community':
                let communityData =  photos.filter(function(specificData) {
                    return specificData.category === 'community';
                })
                setData(communityData)
              break;
            default:
                setData(photos)
          }
    }, [category])

    return (
        <>
            <BannerAlt image={BannerImage} color={colors.green}>
                Our Gallery
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
                        This is the one-stop gallery for all aspects of StudioME. Peruse below to view each studio, our hosted events, the creation of the studio, and how other creatives are using the space.
                    </P1>
                </Fade>
                <Box1 marginTop={75} marginBottom={25}>
                    <H3>View all or pick a category:</H3>
                </Box1>
                <CustomBox1 width={500} marginBottom={50}>
                    <Flex wrap={'flex-start'}>
                        <CategoryLink onClick={() => setCategory('all')} active={category === 'all'}>
                            All
                        </CategoryLink>
                        <CategoryLink onClick={() => setCategory('studios')} active={category === 'studios'}>
                            Studios
                        </CategoryLink>
                        <CategoryLink onClick={() => setCategory('events')} active={category === 'events'}>
                            Events
                        </CategoryLink>
                        <CategoryLink onClick={() => setCategory('creation')} active={category === 'creation'}>
                            The Creation
                        </CategoryLink>
                        <CategoryLink onClick={() => setCategory('community')} active={category === 'community'}>
                            Community
                        </CategoryLink>
                    </Flex>
                </CustomBox1>
                <Box1 marginTop={50} marginBottom={50}>
                    <Flex style={{ justifyContent: 'center'}} wrap='true'>
                        {data.map((photo, index) => (
                            <Fade delay={100 * (index+1)} key={index} ssrFadout>
                                <Photo style={{ backgroundImage: `url(${photo.photo})`}} onClick={() => selectPhoto(index)} />
                            </Fade>
                        ))}
                    </Flex>
                </Box1>
            </Container>
            <Backdrop onClick={() => setGallery(false)} open={gallery} />
            {gallery && <PhotoGallery
                photos={data}
                toggleLeftArrow={toggleLeftArrow} toggleRightArrow={toggleRightArrow}
                galleryNumber={galleryNumber}
            />}
        </>
    )
}

export default Gallery

const Backdrop = styled.div`
	position: fixed;
    top: 0;
    left: 0;
	height: 100vh;
	width: 100%;
	background: #000;
	z-index: -1;
	opacity: 0;
	transition: all .5s ease;

	${props => props.open && css`
		z-index: 999;
		opacity: .8;
	`}
`

const CategoryLink = styled.button`
    background: transparent;
    border: none;
    border-bottom: 2px solid transparent;
    padding-bottom: .3rem;
    margin-bottom: .5rem;
    margin-Right: 1.5rem;
    font-size: 1.2rem;
    color: ${colors.orange};
    outline: none;
    transition: all .3s ease;

    &:hover {
        cursor: pointer;
        border-bottom: 2px solid ${colors.green};
    }

    ${respondTo.xs`
        font-size: 1.4rem;
    `}
    
    ${respondTo.sm`
        padding-bottom: .5rem;
        font-size: 1.6rem;
    `}

    ${respondTo.md`
        font-size: 1.8rem;
    `}

    ${respondTo.lg`
        font-size: 2rem;
    `}

    ${props => props.active && css`
        border-bottom: 2px solid ${colors.teal};
    `}
`

const CustomBox1 = styled.div`
    ${props => css`
        width: ${props.width * .5}px;
        margin-bottom: ${props.marginBottom * .4}px;

        ${respondTo.xs`
            width: ${props.width * .55}px;
            margin-bottom: ${props.marginBottom * .45}px;
        `}
        
        ${respondTo.sm`
            width: ${props.width * .8}px;
            margin-bottom: ${props.marginBottom * .7}px;
        `}

        ${respondTo.md`
            width: ${props.width}px;
            margin-bottom: ${props.marginBottom}px;
        `}
    `};
`

const Photo = styled.div`
    height: 30rem;
    width: 30rem;
    background-position: center;
    background-size: cover;
    border: 1px solid transparent;
    box-shadow: ${shadows.card};
    transition: all .5s ease;
    margin-bottom: 2rem;

    ${respondTo.xs`
        height: 35rem;
        width: 35rem;
    `}

    ${respondTo.sm`
        height: 24rem;
        width: 24rem;
        margin-right: 2rem;
    `}

    ${respondTo.lg`
        height: 31rem;
        width: 31rem;
    `}

    ${respondTo.xl`
        height: 31rem;
        width: 31rem;
    `}

    &:hover {
        border: 1px solid ${colors.teal};
        box-shadow: none;
        cursor: pointer;
    }
`
