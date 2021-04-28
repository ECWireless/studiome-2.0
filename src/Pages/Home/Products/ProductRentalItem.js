import React from 'react'
import styled from 'styled-components'

// Assets
import {  ReactComponent as CameraSvg } from '../../../assets/icons/camera.svg';
import { ReactComponent as MicSvg } from '../../../assets/icons/mic.svg';
import { ReactComponent as VideoCameraSvg } from '../../../assets/icons/video-camera.svg';

// Components
import { shadows } from '../../../components/theme'
import { ButtonPrimary } from '../../../components/Button'
import { Flex } from '../../../components/Containers'
import { P2 } from '../../../components/Typography'

export default function ProductItem(props) {
	let icons = null;

	switch (props.name) {
		case 'Self-Guided Studio':
			icons = <VideoCameraSvg />;
			break;
		case 'Multi-Purpose Studio':
			icons = (
				<>
					<VideoCameraSvg />
					<CameraSvg />
				</>
			);
			break;
		case 'Podcast Lounge':
			icons = (
				<>
					<VideoCameraSvg />
					<MicSvg />
				</>
			);
			break;
		case 'Audio Studio':
			icons = <MicSvg />;
			break;
		case 'Edit Workstation':
			icons = (
				<>
					<VideoCameraSvg />
					<CameraSvg />
					<MicSvg />
				</>
			);
			break;
		default:
			icons = null;
			break;
	}

	return (
		<StyledProductItemCard onClick={props.impression}>
			<StyledProductItemPhoto onClick={props.onModalToggle}
				style={{backgroundImage: `url(${props.image})`, backgroundPosition: 'center', backgroundSize: 'cover'}}
			>
				<Flex>
					<StyledIconsContainer>
						{icons}
					</StyledIconsContainer>
				</Flex>
			</StyledProductItemPhoto>
			<StyledProductItemTextContainer>
				<Flex style={{height: '100%'}} align={'center'} justify={'space-between'}>
					<P2>{props.name}</P2>
					<ButtonPrimary size={'md'} onClick={props.onModalToggle}>View</ButtonPrimary>
				</Flex>
			</StyledProductItemTextContainer>
		</StyledProductItemCard>
	)
}

const StyledIconsContainer = styled.div`
	bottom: 4px;
	fill: #fff;
	left: 8px;
	position: absolute;

	svg {
		margin-left: 8px;
	}
`;

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
	position: relative;
	transition: .5s opacity ease;
	width: 100%;

	&:hover {
			opacity: .8;
			cursor: pointer;
	}
`
