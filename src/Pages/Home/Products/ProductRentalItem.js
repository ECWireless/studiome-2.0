import React from 'react'
import styled from 'styled-components'

// Components
import { shadows } from '../../../components/theme'
import { ButtonPrimary } from '../../../components/Button'
import { Flex } from '../../../components/Containers'
import { P2 } from '../../../components/Typography'

export default function ProductItem(props) {
    return (
        <StyledProductItemCard onClick={props.impression}>
            <StyledProductItemPhoto onClick={props.onModalToggle}
                style={{backgroundImage: `url(${props.image})`, backgroundPosition: 'center', backgroundSize: 'cover'}}
            />
            <StyledProductItemTextContainer>
                <Flex style={{height: '100%'}} align={'center'} justify={'space-between'}>
                    <P2>{props.name}</P2>
                    <ButtonPrimary size={'md'} onClick={props.onModalToggle}>View</ButtonPrimary>
                </Flex>
            </StyledProductItemTextContainer>
        </StyledProductItemCard>
    )
}

const StyledProductItemCard = styled.div`
    justify-self: center;
    align-self: flex-start;
    width: 25rem;
    height: 33rem;
    box-shadow: ${shadows.card};
    border-radius: 5px;
    overflow: hidden;
    animation: onRentalFadeIn .7s ease-out;
`

const StyledProductItemTextContainer = styled.div`
    height: 8rem;
    width: 100%;
    padding: 0 2rem;

`

const StyledProductItemPhoto = styled.div`
    height: 25rem;
    width: 100%;
    transition: .5s opacity ease;

    &:hover {
        opacity: .8;
        cursor: pointer;
    }
`
