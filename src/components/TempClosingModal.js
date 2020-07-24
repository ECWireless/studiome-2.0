import React, { Component, Fragment } from 'react';
import styled, { css } from 'styled-components'
import respondTo from './Breakpoints'

// Components
import { Box2, Box3 } from '../components/Boxes'
import { Container, Flex } from '../components/Containers'

export default class TempClosingModal extends Component {
    state = {
        modalToggle: false,
        modalClass: 'product-modal',
        backdropClass: 'main-backdrop main-backdrop__fadeIn',
    }

    componentDidMount() {
        setTimeout(function() {
            this.setState({modalToggle: true})
        }.bind(this), 4000)
      }

    onModalToggle = () => {
        this.setState({
            ...this.state,
            modalToggle: false,
            backdropClass: 'main-backdrop main-backdrop__fadeOut'
        })
    }

    onBookButton = () => {
        this.onModalToggle();
        this.props.onQuickButtonFix('rentals');
    }

    render() {
        return (
            <Fragment>
                {this.state.modalToggle && <div className={this.state.backdropClass} onClick={this.onModalToggle} /> }
                {this.state.modalToggle && <div className="temp-closing-modal">
                    <Container>
                        <Box3 marginTop={20}>
                            <Flex justify={'flex-end'}>
                                <ButtonContainer className="temp-closing-modal__close-button" onClick={this.onModalToggle}>
                                    <CloseSVG
                                        version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                    >
                                        <title>close</title>
                                        <path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path>
                                    </CloseSVG>
                                </ButtonContainer>
                            </Flex>
                        </Box3>
                    </Container>
                    <Container>
                        <Box3 marginTop={10}>
                            <Flex align={'center'} justify={'center'}>
                                <AttentionSVG
                                    version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"
                                >
                                    <title>attention</title>
                                    <path d="M16 3c-3.472 0-6.737 1.352-9.192 3.808s-3.808 5.72-3.808 9.192c0 3.472 1.352 6.737 3.808 9.192s5.72 3.808 9.192 3.808c3.472 0 6.737-1.352 9.192-3.808s3.808-5.72 3.808-9.192c0-3.472-1.352-6.737-3.808-9.192s-5.72-3.808-9.192-3.808zM16 0v0c8.837 0 16 7.163 16 16s-7.163 16-16 16c-8.837 0-16-7.163-16-16s7.163-16 16-16zM14 22h4v4h-4zM14 6h4v12h-4z"></path>
                                </AttentionSVG>
                                <Box2 marginLeft={40}><h1 className="h1 white uppercase">COVID Care</h1></Box2>
                            </Flex>
                        </Box3>
                        <Flex direction={'column'} align={'center'} justify={'center'}>
                            <Box3 marginTop={40}>
                                <p className="p-xl center white bold">Your safety is our top priority. We've taken the following steps in our studio.
                                    to reduce the risk of spreading Covid:
                                </p>
                            </Box3>
                            <Box3 marginTop={30}>
                                <ul>
                                    <li className="p-l left white">Studio space and equipment will be sanitized between each use.</li>
                                    <li className="p-l left white">Maximum of 5 people are allowed in each studio at a time.</li>
                                    <li className="p-l left white">Masks will be required when not on camera.</li>
                                    <li className="p-l left white">Hand sanitizers and soap will be readily available to our guests.</li>
                                </ul>
                            </Box3>
                        </Flex>
                    </Container>
                </div> }
            </Fragment>
        )
    }
}

const ButtonContainer = styled.button`
    width: 5rem;
    height: 5rem;
    background: #EA6E44;
    border: none;
    border-radius: 50%;
    fill: #fff;

    transition: all .3s ease;

    &:hover {
        background: #fff;
        cursor: pointer;
        fill: #8DCBC0;
    }
`

const CloseSVG = styled.svg`
    width: 4rem;
    height: 4rem;
    fill: inherit;
`

const AttentionSVG = styled.svg`
    width: 5rem;
    height: 5rem;
    fill: #fff;

    ${respondTo.xs`
    `}

    ${respondTo.sm`
        width: 5rem;
        height: 5rem;
    `}
`
