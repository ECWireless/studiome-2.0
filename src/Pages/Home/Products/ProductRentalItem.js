import React from 'react'
import styled from 'styled-components/macro'

import {  ReactComponent as CameraSvg } from '../../../assets/icons/camera.svg';
import { ReactComponent as MicSvg } from '../../../assets/icons/mic.svg';
import { ReactComponent as VideoCameraSvg } from '../../../assets/icons/video-camera.svg';

import { shadows } from '../../../components/theme'
import { ButtonPrimary } from '../../../components/Button'
import { Flex } from '../../../components/Containers'
import { P2 } from '../../../components/Typography'

export default function ProductItem({
	fullWidth,
	name,
	onModalToggle,
	image,
}) {
	let icons = null;

	switch (name) {
		case 'The Media Space':
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
		case 'The Speak Easy Lounge':
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
		<StyledProductItemCard fullWidth={fullWidth}>
			<StyledProductItemPhoto
				disabled={name === 'New Podcast Space Coming Soon!'}
				fullWidth={fullWidth}
				onClick={name === 'New Podcast Space Coming Soon!' ? () => null : onModalToggle}
				style={{
					backgroundImage: `url(${image})`,
					backgroundPosition: 'center',
					backgroundSize: 'cover',
				}}
			>
				<Flex>
					<StyledIconsContainer>
						{icons}
					</StyledIconsContainer>
				</Flex>
			</StyledProductItemPhoto>
			<StyledProductItemTextContainer>
				<Flex style={{height: '100%'}} align={'center'} justify={'space-between'}>
					<P2 css={`margin-right: 4px`}>{name}</P2>
					<ButtonPrimary disabled={name === 'New Podcast Space Coming Soon!'} size={'md'} onClick={onModalToggle}>View</ButtonPrimary>
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
	animation: onRentalFadeIn .7s ease-out;
	justify-self: center;
	align-self: flex-start;
	width: 25rem;
	height: 33rem;
	box-shadow: ${shadows.card};
	border-radius: 5px;
	overflow: hidden;

	${props => props.fullWidth && `
		height: 40rem;
		width: 100%;
	`}
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

	${props => props.fullWidth && `
		height: 32rem;
	`}

	&:hover {
		cursor: pointer;
		opacity: .8;

		${props => props.disabled && `
			cursor: not-allowed;
			opacity: 1;
		`}
	}
`
