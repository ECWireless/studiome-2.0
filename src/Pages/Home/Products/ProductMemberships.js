import React from 'react';
import styled from 'styled-components'

// Photos
import monthlyMembershipImg from '../../../assets/home/products/memberships/monthly-membership.png';
import annualMembershipImg from '../../../assets/home/products/memberships/annual-membership.png';

// Components
import { Box3 } from '../../../components/Boxes'
import respondTo from '../../../components/Breakpoints'
import { Card } from '../../../components/Cards'
import { Flex } from '../../../components/Containers'
import { colors, shadows } from '../../../components/theme'
import { H2, H3, P2, P3 } from '../../../components/Typography'
import { Line } from '../../../components/Lines'

const ProductMemberships = () => {
	return (
		<Box3 marginTop={50}>
			<StyledMembershipCard>
				<Box3 marginTop={25}>
					<H2 light center>Memberships</H2>
				</Box3>
				<Box3 marginTop={10}>
					<Line width={150} height={3} color={'orange'} />
				</Box3>
				<MemberCardContainer justify={'center'}>
					<MembershipCard
						link={'https://studiome.me/product/50mo-50off-membership/'}
						title={'Pro Membership'}
						description={'50% off for $50 a month (3 months due on sign up)'}
						image={monthlyMembershipImg}
						imageAlt={'monthly membership'}
					/>
					<MembershipCard
						link={'https://studiome.me/product/annual-membership/'}
						title={'Annual Membership'}
						description={'50% off for $499 a year'}
						image={annualMembershipImg}
						imageAlt={'annual membership'}
					/>
				</MemberCardContainer>
				<Box3 marginTop={25}>
					<Line width={50} height={3} color={'orange'} />
				</Box3>
				<Box3 marginTop={25} marginLeft={25} marginRight={25}>
					<P3 center>Click <StyledTextLink
						href="https://studiome.me/get-started/"
						target="_blank"
						rel="noopener noreferrer"
					>here
					</StyledTextLink> to sign up for our free membership.</P3>
				</Box3>
				<Box3 marginTop={10} marginLeft={25} marginRight={25} marginBottom={50}>
					<P3 center>Want to give us feedback on our membership plans? <StyledTextLink
						href="https://forms.gle/9Xor9rmRvPSFWhRA8"
						rel="noopener noreferrer" target="_blank"
					>
						Click Here
					</StyledTextLink>
					</P3>
				</Box3>
			</StyledMembershipCard>
		</Box3>
	);
}

const MembershipCard = ({
	link,
	title,
	description,
	image,
	imageAlt,
}) => {
	return (
		<Box3 marginTop={50}>
			<StyledPackageContainer
				target="_blank" rel="noopener noreferrer"
				href={link}
			>
				<img
					src={image} alt={imageAlt}
					id={'membership-package'}
				/>
				<Box3 marginTop={25}>
					<H3 color={colors.teal} uppercase light center>{title}</H3>
				</Box3>
				<Box3 marginTop={10} marginLeft={25} marginRight={25}>
					<P2 center>{description}</P2>
				</Box3>
			</StyledPackageContainer>
		</Box3>
	);
}

const MemberCardContainer = styled(Flex)`
	${respondTo.md`
		flex-direction: row;
	`}

	flex-direction: column;
`;

const StyledMembershipCard = styled(Card)`
    justify-self: center;
    z-index: 0;
    width: 100%;
    animation: onMembershipsFadeIn .7s ease-out;
`

const StyledPackageContainer = styled.a`
    text-decoration: none;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-direction: column;

    #membership-package {
        margin: 0 auto;
        border: 3px solid ${colors.orange};
        box-shadow: ${shadows.button};
        border-radius: 10px;
        height: 22rem;
        width: 22rem;
        transition: all .3s ease;

        ${respondTo.xs`
            height: 25rem;
            width: 25rem;
        `}

        ${respondTo.sm`
            height: 30rem;
            width: 30rem;
        `}
    }

    &:hover > #membership-package {
        cursor: pointer;
        border: 3px solid ${colors.green};
        box-shadow: ${shadows.card};
    }

    &:active > #membership-package  {
        box-shadow: $shadow-button;
    }
`

const StyledTextLink = styled.a`
    text-decoration: none;
    transition: all .3s ease;
    border-bottom: 2px solid #fff;
    color: ${colors.teal};
    font-weight: bold;

    &:hover {
        border-bottom: 2px solid ${colors.teal};
    }
`

export default ProductMemberships;
