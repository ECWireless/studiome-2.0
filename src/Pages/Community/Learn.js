import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import styled, { css } from 'styled-components'
import Fade from 'react-reveal/Fade'
import imageUrlBuilder from '@sanity/image-url'
import { client } from '../../client'
import respondTo from '../../components/Breakpoints'


// Components
import { colors } from '../../components/theme'
import { BannerAlt } from '../../components/Banner'
import { Box1 } from '../../components/Boxes'
import { ButtonPrimary } from '../../components/Button'
import { Container, Flex, Col2, Col2Left, Col2Right } from '../../components/Containers'
import { H3, P1 } from '../../components/Typography'

// Data
import { LearnData } from './LearnData'

const Learn = () => {
    const [category, setCategory] = useState('all')
    const [content, setContent] = useState({})
    const [data, setData] = useState(LearnData)

    useEffect(() => {
        window.scroll({
            top: 0,
        })

        client.fetch('*[_type == "community" && slug.current == "v1"][0]').then(pageProps => {
            setContent(pageProps)
        })

    }, [])

    useEffect(() => {

        switch (category) {
            case 'all':
                setData(LearnData)
              break;
            case 'photography':
                let photographyData =  LearnData.filter(function(specificData) {
                    return specificData.category === 'photography';
                })
                setData(photographyData)
              break;
            case 'video':
                let videoData =  LearnData.filter(function(specificData) {
                    return specificData.category === 'video';
                })
                setData(videoData)
              break;
            case 'audio':
                let audioData =  LearnData.filter(function(specificData) {
                    return specificData.category === 'audio';
                })
                setData(audioData)
              break;
            case 'editing':
                let editingData =  LearnData.filter(function(specificData) {
                    return specificData.category === 'editing';
                })
                setData(editingData)
              break;
            case 'lighting':
                let lightingData =  LearnData.filter(function(specificData) {
                    return specificData.category === 'lighting';
                })
                setData(lightingData)
              break;
            case 'vfx':
                let vfxData =  LearnData.filter(function(specificData) {
                    return specificData.category === 'vfx';
                })
                setData(vfxData)
              break;
            default:
                setData(LearnData)
          }
    }, [category])

    function urlFor(source) {
        return imageUrlBuilder(client).image(source)
    }

    return (
        <>
            <BannerAlt image={urlFor(content.learnBannerImage)} color={colors.green}>
                {content.learnBannerTitle}
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
                        {content.learnDescription}
                    </P1>
                </Fade>
                <Box1 marginTop={75} marginBottom={25}>
                    <H3>Pick a category:</H3>
                </Box1>
                <CustomBox1 width={600} marginBottom={50}>
                    <Flex wrap={'flex-start'}>
                        <CategoryLink onClick={() => setCategory('all')} active={category === 'all'}>
                            All
                        </CategoryLink>
                        <CategoryLink onClick={() => setCategory('photography')} active={category === 'photography'}>
                            Photography
                        </CategoryLink>
                        <CategoryLink onClick={() => setCategory('video')} active={category === 'video'}>
                            Video
                        </CategoryLink>
                        <CategoryLink onClick={() => setCategory('audio')} active={category === 'audio'}>
                            Audio
                        </CategoryLink>
                        <CategoryLink onClick={() => setCategory('editing')} active={category === 'editing'}>
                            Editing
                        </CategoryLink>
                        <CategoryLink onClick={() => setCategory('lighting')} active={category === 'lighting'}>
                            Lighting
                        </CategoryLink>
                        <CategoryLink onClick={() => setCategory('vfx')} active={category === 'vfx'}>
                            VFX
                        </CategoryLink>
                    </Flex>
                </CustomBox1>
                <Box1 marginBottom={75}>
                    {  
                        category === 'lighting' || category === 'vfx'
                        ? <P1>Coming Soon!</P1>
                        : data.map((resource, index) => {
                            if (index % 2) {
                                return null
                            } else {
                                return (
                                    <Col2 key={index}>
                                        <Col2Left align={'center'} justify={'center'}>
                                            <Fade>
                                                <ResourceVideo
                                                    title={resource.title}
                                                    src={resource.url}
                                                    frameBorder="0" allow="autoplay; fullscreen" allowFullScreen
                                                />
                                            </Fade>
                                        </Col2Left>
                                        {data[index+1] !== undefined && <Col2Right align={'center'} justify={'center'}>
                                            <Fade delay={200}>
                                                <ResourceVideo
                                                    title={data[index+1].title}
                                                    src={data[index+1].url}
                                                    frameBorder="0" allow="autoplay; fullscreen" allowFullScreen
                                                />
                                            </Fade>
                                        </Col2Right>}
                                    </Col2>
                                )
                            }
                        })
                    }
                </Box1>
            </Container>
        </>
    )
}

export default Learn

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

const ResourceVideo = styled.iframe`
    margin-bottom: 2rem;
    width: 30rem;
    height: 17rem;

    ${respondTo.xs`
        width: 38rem;
        height: 22rem;
    `}

    ${respondTo.sm`
        width: 48rem;
        height: 28rem;
    `}

    ${respondTo.md`
        width: 38rem;
        height: 22rem;
    `}

    ${respondTo.lg`
        width: 48rem;
        height: 28rem;
    `}
`
