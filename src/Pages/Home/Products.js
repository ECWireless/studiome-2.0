import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as actions from '../../redux/actions';

// Components
import { Box3 } from '../../components/Boxes'
import respondTo from '../../components/Breakpoints'
import Button, { ButtonSecondary } from '../../components/Button'
import { Container, Flex } from '../../components/Containers'
import ProductsModal from '../../components/ProductModal';
import ProductRentals from './Products/ProductRentals';
import ProductServices from './Products/ProductServices';
import { colors, shadows } from '../../components/theme';
import { H3 } from '../../components/Typography';
import ProductMemberships from './Products/ProductMemberships';

export const Products = (props) => {
    // Modal Functionality
    const [modalToggle, setModalToggle] = useState(false);
    const [modalClass, setModalClass] = useState('product-modal');
    const [backdropClass, setBackdropClass] = useState('main-backdrop');

    // Modal Details
    const [heading, setHeading] = useState('');
    const [description, setDescription] = useState('');
    const [photo, setPhoto] = useState(null);
    const [subheading, setSubheading] = useState('');
    const [option1, setOption1] = useState('');
    const [url1, setUrl1] = useState('');
    const [option2, setOption2] = useState('');
    const [url2, setUrl2] = useState('');
    const [option3, setOption3] = useState('');
    const [url3, setUrl3] = useState('');

    // Loading
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        setLoading(false)
    }, [])

    const onModalToggle = (product) => {
        if (!modalToggle) {
            setModalClass('product-modal product-modal__popup')
            setModalToggle(true)
            setBackdropClass('main-backdrop main-backdrop__fadeIn')
        } else if (modalToggle) {
            setModalClass('product-modal product-modal__popdown')
            setModalToggle(false)
            setBackdropClass('main-backdrop main-backdrop__fadeOut')
        }

        onProductToggle(product);
    }

    const onProductToggle = (product) => {
      switch(product) {
        case 1:
          setHeading(props.productsStudioETitle)
          setDescription(props.productsStudioEDescription)
          setPhoto(props.productsStudioEImage)
          setSubheading('Pick a duration to view:')
          setOption1('Hourly')
          setUrl1('https://studiome.me/product/the-media-space-hourly-package/')
          setOption2('Daily')
          setUrl2('https://studiome.me/product/the-media-space-10-hour-package/')
          break;

        case 2:
          setHeading(props.productsMPStudioTitle)
          setDescription(props.productsMPStudioDescription)
          setPhoto(props.productsMPStudioImage)
          setSubheading('Pick a duration to view:')
          setOption1('Hourly')
          setUrl1('https://studiome.me/product/speak-easy-lounge-1-hour/')
          setOption2('Daily')
          setUrl2('https://studiome.me/product/the-speak-easy-lounge-full-day/')
          break;
        case 3:
          setHeading(props.productsPodcastLoungeTitle)
          setDescription(props.productsPodcastLoungeDescription)
          setPhoto(props.productsPodcastLoungeImage)
          setSubheading('Pick a duration to view:')
          setOption1('Hourly')
          setUrl1('https://studiome.me/product/podcast-lounge-hourly/')
          setOption2('Daily')
          setUrl2('https://studiome.me/product/podcast-lounge-full-day/')
          setOption3('')
          setUrl3('')
          break;
        case 4:
          setHeading(props.productsAudioStudioTitle)
          setDescription(props.productsAudioStudioDescription)
          setPhoto(props.productsAudioStudioImage)
          setSubheading('Pick a duration to view:')
          setOption1('Hourly')
          setUrl1('https://studiome.me/product/soundproof-audio-studio-hourly/')
          setOption2('Daily')
          setUrl2('https://studiome.me/product/soundproof-audio-studio-full-day/')
          setOption3('')
          setUrl3('')
          break;
        case 5:
          setHeading(props.productsEquipmentTitle)
          setDescription(props.productsEquipmentDescription)
          setPhoto(props.productsEquipmentImage)
          setSubheading('Pick a category to view:')
          setOption1('Camera')
          setUrl1('')
          setOption2('Lighting')
          setUrl2('')
          setOption3('Audio')
          setUrl3('')
          break;
        case 6:
          setHeading(props.productsWorkstationTitle)
          setDescription(props.productsWorkstationDescription)
          setPhoto(props.productsWorkstationImage)
          setSubheading('Pick a category to view:')
          setOption1('Hourly')
          setUrl1('https://studiome.me/product/editing-workstation-1-hour/')
          setOption2('Daily')
          setUrl2('https://studiome.me/product/editing-workstation-full-day/')
          setOption3('')
          setUrl3('')
          break;
        default: return;
      }
    }

    const onLoadingToggle = () => {
        setLoading(true)

        setTimeout(() => {
            setLoading(false)
        }, 3000);
    }

    return (
        <Container>
            <StyledProductsContainer>
                <Flex justify={'space-between'}>
                    <ButtonSecondary
                        className={props.rentalsButtonClass}
                        onClick={props.rentalButton}
                    >
                        Rentals
                    </ButtonSecondary>
                    <ButtonSecondary
                        className={props.servicesButtonClass}
                        onClick={props.serviceButton}
                    >
                        Services
                    </ButtonSecondary>
                    <ButtonSecondary
                        className={props.membershipsButtonClass}
                        onClick={props.membershipsButton}
                    >
                        Memberships
                    </ButtonSecondary>
                </Flex>

                <ProductsModal
                    toggle={onModalToggle}
                    class={modalClass}

                    heading={heading}
                    description={description}
                    photo={photo}
                    subheading={subheading}

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

                {props.rentalToggle && <ProductRentals
                    onModalToggle={onModalToggle}
                    productsStudioETitle={props.productsStudioETitle}
                    productsStudioEImage={props.productsStudioEImage}
                    productsMPStudioTitle={props.productsMPStudioTitle}
                    productsMPStudioImage={props.productsMPStudioImage}
                    productsPodcastLoungeTitle={props.productsPodcastLoungeTitle}
                    productsPodcastLoungeImage={props.productsPodcastLoungeImage}
                    productsAudioStudioTitle={props.productsAudioStudioTitle}
                    productsAudioStudioImage={props.productsAudioStudioImage}
                    productsEquipmentTitle={props.productsEquipmentTitle}
                    productsEquipmentImage={props.productsEquipmentImage}
                    productsWorkstationTitle={props.productsWorkstationTitle}
                    productsWorkstationImage={props.productsWorkstationImage}
                />}
                {props.servicesToggle && <ProductServices />}
                {props.membershipsToggle && <ProductMemberships />}

                <Box3 marginTop={50} marginBottom={50}>
                    <StyledVirtualContainer>
                        <Flex direction={'column'} align={'center'}>
                            <Box3 marginTop={25}>
                                <H3 uppercase center>{props.productsVirtualSolutionsText}</H3>
                            </Box3>
                            <Box3 marginTop={50} marginBottom={25}>
                                <NavLink
                                    to="/virtual" exact
                                >
                                    <Button size={'l'}>Learn More</Button>
                                </NavLink>
                            </Box3>
                        </Flex>
                    </StyledVirtualContainer>
                </Box3>
            </StyledProductsContainer>
        </Container>
    )
}

const StyledProductsContainer = styled.div`
    width: 28rem;
    margin: 0 auto;

    ${respondTo.xs`
        width: 30rem;
    `}
    
    ${respondTo.sm`
        width: 55rem;
    `}

    ${respondTo.md`
        width: 80rem;
    `}

    ${respondTo.lg`
        width: 90rem;
    `}
`

const StyledVirtualContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    background: #fff;
    border: 2px solid ${colors.orange};
    border-radius: 15px;
    box-shadow: ${shadows.button};
`

const mapStateToProps = state => {
	return {
        rentalsButtonClass: state.rentalsButtonClass,
        servicesButtonClass: state.servicesButtonClass,
        membershipsButtonClass: state.membershipsButtonClass,
        rentalToggle: state.rentalToggle,
        servicesToggle: state.servicesToggle,
        membershipsToggle: state.membershipsToggle,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		rentalButton: () => dispatch(actions.rentalButton()),
		serviceButton: () => dispatch(actions.serviceButton()),
		membershipsButton: () => dispatch(actions.membershipsButton()),
	};
};

export default connect( mapStateToProps, mapDispatchToProps )(Products);
