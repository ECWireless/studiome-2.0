import React, { useState} from 'react'
import styled from 'styled-components'
import imageUrlBuilder from '@sanity/image-url'
import { client } from '../client'
import respondTo from '../components/Breakpoints'

// Components
import Banner from '../components/Banner'
import { Box1 } from '../components/Boxes'
import { Container, Col2, Col2Left, Col2Right } from '../components/Containers'
import { Line } from '../components/Lines'
import { H2, H3, P1, P3 } from '../components/Typography'
import ProductRentalItem from '../Pages/Home/Products/ProductRentalItem'
import ProductsModal from '../components/ProductModal'

const Virtual = () => {
    const [content, setContent] = useState({})

    // Modal Functionality
    const [modal, setModal] = useState(false)
    const [modalClass, setModalClass] = useState('product-modal')
    const [backdropClass, setBackdropClass] = useState('main-backdrop')

    // Modal Details
    const [heading, setHeading] = useState('')
    const [subheading, setSubheading] = useState('')
    const [description, setDescription] = useState('')
    const [photo, setPhoto] = useState('')
    const [option1, setOption1] = useState('')
    const [url1, setUrl1] = useState('')
    const [option2, setOption2] = useState('')
    const [url2, setUrl2] = useState('')
    const [option3, setOption3] = useState('')
    const [url3, setUrl3] = useState('')

    // Loading
    const [loading, setLoading] = useState(false)

    React.useEffect(() => {
        window.scroll({
            top: 0,
        })

        client.fetch('*[_type == "virtual" && slug.current == "v1"][0]').then(pageProps => {
            setContent(pageProps)
            console.log(pageProps)
        })
    }, [])

    function onModalToggle(product) {
        if (!modal) {
            setModal(true)
            setModalClass('product-modal product-modal__popup')
            setBackdropClass('main-backdrop main-backdrop__fadeIn')
        } else if (modal) {
            
            setModal(false)
            setModalClass('product-modal product-modal__popdown')
            setBackdropClass('main-backdrop main-backdrop__fadeOut')
        }

        onProductToggle(product);
    }

    function onProductToggle(product) {
        switch(product) {
            case 1:
                setHeading(content.product1Name)
                setDescription(content.product1DescriptionShort)
                setPhoto(urlFor(content.product1Image))
                setSubheading('Pick a duration to view:')
                setOption1('2 Hours')
                setUrl1('https://studiome.me/product/self-guided-studio-e-2-hour-package/')
                setOption2('6 Hours')
                setUrl2('https://studiome.me/product/self-guided-studio-e-6-hour-package/')
                setOption3('10 Hours')
                setUrl3('https://studiome.me/product/self-guided-studio-e-10-hour-package/')
                break;

            case 2:
                setHeading('Podcast Lounge')
                setDescription(content.product2DescriptionShort)
                setPhoto(urlFor(content.product2Image))
                setSubheading('Pick a duration to view:')
                setOption1('Hourly')
                setUrl1('https://studiome.me/product/podcast-lounge-hourly/')
                setOption2('Daily')
                setUrl2('https://studiome.me/product/podcast-lounge-full-day/')
                setOption3('')
                setUrl3('')
                break;

            case 3:
                setHeading('Live Stream Kit')
                setDescription(content.product3DescriptionShort)
                setPhoto(urlFor(content.product3Image))
                setSubheading('Pick a duration to view:')
                setOption1('1 Day')
                setUrl1('https://studiome.me/product/live-stream-kit-off-site-1-day/')
                setOption2('3 Days')
                setUrl2('https://studiome.me/product/live-stream-kit-off-site-3-day/')
                setOption3('7 Days')
                setUrl3('https://studiome.me/product/live-stream-kit-off-site-1-week/')
                break;
            default: return;
        }
    }

    function onLoadingToggle() {
        setLoading(true)

        setTimeout(() => {
            setLoading(false)
        }, 3000);
    }

    function urlFor(source) {
        return imageUrlBuilder(client).image(source)
    }

    return (
        <>
            <ProductsModal
                toggle={onModalToggle}
                class={modalClass}

                heading={heading}
                subheading={subheading}
                description={description}
                photo={photo}

                option1={option1}
                url1={url1}
                option2={option2}
                url2={url2}
                option3={option3}
                url3={url3}
                loadingToggle={onLoadingToggle}
                loading={loading}
            />
            {/* Backdrop */}
            <div className={backdropClass} onClick={onModalToggle} />

            {/* Main Content */}
            <Banner image={urlFor(content.bannerImage)} color={'green'}>
                {content.bannerTitle}
            </Banner>
            <Container>
                <Box1 marginTop={100}>
                    <P1 center>
                        {content.description}
                    </P1>
                </Box1>
                <Box1 marginTop={75} style={{display: 'flex', alignItems: 'center'}}>
                    <Video 
                        title="1"
                        src={content.videoURL}
                        frameBorder="0" 
                        webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen>
                    </Video>
                </Box1>
                <Box1 marginTop={100}>
                    <H2 uppercase center>
                        {content.subheading}
                    </H2>
                </Box1>
                <Col2 flip>
                    <Col2Left align={'center'} justify={'center'}>
                        <Box1 marginTop={75}>
                            <ProductRentalItem
                                animation={false}
                                index={1}
                                name={content.product1Name}
                                image={urlFor(content.product1Image)}
                                onModalToggle={onModalToggle.bind(this, 1)}
                            />
                        </Box1>
                    </Col2Left>
                    <Col2Right align={'center'} justify={'center'}>
                        <Box1 marginTop={75}>
                            <H3 center>{content.product1Name}</H3>
                            <Box1 marginTop={25}>
                                <P3 light center>
                                    {content.product1DescriptionLong}
                                </P3>
                            </Box1>
                        </Box1>
                    </Col2Right>
                </Col2>
                <Box1 marginTop={75}>
                    <Line width={500} height={5} color={'blue'} />
                </Box1>

                <Col2>
                    <Col2Left align={'center'} justify={'center'}>
                        <Box1 marginTop={75}>
                            <H3 center>
                                {content.product2Name}
                            </H3>
                            <Box1 marginTop={25}>
                                <P3 light center>
                                    {content.product2DescriptionLong}
                                </P3>
                            </Box1>
                        </Box1>
                    </Col2Left>
                    <Col2Right align={'center'} justify={'center'}>
                        <Box1 marginTop={75}>
                            <ProductRentalItem
                                animation={false}
                                index={3}
                                name={content.product2Name}
                                image={urlFor(content.product2Image)}
                                onModalToggle={onModalToggle.bind(this, 2)}
                            />
                        </Box1>
                    </Col2Right>
                </Col2>
                <Box1 marginTop={75}>
                    <Line width={500} height={5} color={'orange'} />
                </Box1>

                <Col2 flip>
                    <Col2Left align={'center'} justify={'center'}>
                        <Box1 marginTop={75}>
                            <ProductRentalItem
                                animation={false}
                                index={7}
                                name={content.product3Name}
                                image={urlFor(content.product3Image)}
                                onModalToggle={onModalToggle.bind(this, 3)}
                            />
                        </Box1>
                    </Col2Left>
                    <Col2Right align={'center'} justify={'center'}>
                        <Box1 marginTop={75}>
                            <H3 center>
                                {content.product3Name}
                            </H3>
                            <Box1 marginTop={25}>
                                <P3 light center>
                                    {content.product3DescriptionLong}
                                </P3>
                            </Box1>
                        </Box1>
                    </Col2Right>
                </Col2>
                <Box1 marginTop={75} marginBottom={100}>
                    <Line width={500} height={5} color={'green'} />
                </Box1>
            </Container>
        </>
    )
}

const Video = styled.iframe`
    width: 286px;
    height: 163px;
    margin: 0 auto;
    transition: all .5s;
    border: .5rem solid #EA6E44;

    &:hover {
        border: .5rem solid #B6CE61;
    }

    ${respondTo.xs`
        width: 358px;
        height: 180px;
    `}
    
    ${respondTo.sm`
        width: 511px;
        height: 292px;
        border: .8rem solid #EA6E44;

        &:hover {
            border: .8rem solid #B6CE61;
        }
    `}

    ${respondTo.md`
        width: 710px;
        height: 405px;
    `}

    ${respondTo.lg`
        width: 887px;
        height: 506px;
    `}
`

export default Virtual
