import React from 'react';
import styled from 'styled-components/macro';

import { shadows } from '../../../components/theme'
import ProductRentalItem from './ProductRentalItem';
import { Box3 } from '../../../components/Boxes'
import { Flex } from '../../../components/Containers'
import { H3, P3 } from '../../../components/Typography'

const ProductRentals = ({
  productsStudioETitle,
  productsStudioEImage,
  productsMPStudioTitle,
  onModalToggle,
  productsMPStudioImage,
  productsPodcastLoungeTitle,
  productsPodcastLoungeImage,
  productsAudioStudioTitle,
  productsAudioStudioImage,
  productsEquipmentTitle,
  productsEquipmentImage,
  productsWorkstationTitle,
  productsWorkstationImage,
}) => {
  return (
    <Flex wrap={true}>
      <MainProductCard image={productsPodcastLoungeImage} title={'Studios'} />
      <MainProductCard image={productsEquipmentImage} title={'Equipment'} />
      <MainProductCard image={productsWorkstationImage} title={'Workstations'} />
      {/* <Box3 marginTop={50}>
        <ProductRentalItem
          style={{ animation: 'none'}}
          name={productsStudioETitle}
          image={productsStudioEImage}
          onModalToggle={() => onModalToggle(1)}
        />
      </Box3>

      <Box3 marginTop={50}>
        <ProductRentalItem
          name={productsMPStudioTitle}
          image={productsMPStudioImage}
          onModalToggle={() => onModalToggle(2)}
        />
      </Box3>

      <Box3 marginTop={50}>
        <ProductRentalItem
          name={productsPodcastLoungeTitle}
          image={productsPodcastLoungeImage}
          onModalToggle={() => onModalToggle(3)}
        />
      </Box3>

      <Box3 marginTop={50}>
        <ProductRentalItem
          name={productsAudioStudioTitle}
          image={productsAudioStudioImage}
          onModalToggle={() => onModalToggle(4)}
        />
      </Box3>

      <Box3 marginTop={50}>
        <ProductRentalItem
          name={productsEquipmentTitle}
          image={productsEquipmentImage}
          onModalToggle={() => onModalToggle(5)}
        />
      </Box3>

      <Box3 marginTop={50}>
        <ProductRentalItem
          name={productsWorkstationTitle}
          image={productsWorkstationImage}
          onModalToggle={() => onModalToggle(6)}
        />
      </Box3> */}
    </Flex>
  )
}

export default ProductRentals;

const MainProductCard = ({ image, title }) => {
  return (
    <Box3 marginTop={50} css={`width: 100%;`}>
      <StyledProductCategoryCard css={`background-image: url(${image});`}>
        <StyledBanner>
          <H3 css={`text-align: center; text-transform: uppercase;`}>
            {title}
          </H3>
          <P3 css={`text-align: center;`}>Click to view</P3>
          </StyledBanner>
      </StyledProductCategoryCard>
    </Box3>
  )
}

const StyledProductCategoryCard = styled.div`
  animation: onRentalFadeIn .7s ease-out;
  background-position: center;
  background-size: cover;
	border-radius: 5px;
	box-shadow: ${shadows.card};
  cursor: pointer;
  display: flex;
  flex-direction: column;
	height: 330px;
  justify-content: flex-end;
	overflow: hidden;
  width: 100%;
`;

const StyledBanner = styled.div`
  align-items: center;
  background-color: rgba(255,255,255,.9);
  display: flex;
  flex-direction: column;
  height: 90px;
  justify-content: center;
  width: 100%;
`;
