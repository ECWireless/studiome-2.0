import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components/macro';

import { shadows } from '../../../components/theme'
import respondTo from '../../../components/Breakpoints'
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
  const history = useHistory();
  const [category, setCategory] = React.useState(0)
  return (
    <div>
      <div onClick={() => setCategory(category === 1 ? 0 : 1)}>
        <MainProductCard active={category === 1} image={productsPodcastLoungeImage} title={'Studios'} />
      </div>
      {category === 1 && (
        <Flex wrap={true}>
          <Box3 marginTop={50} style={{ width: '100%' }}>
            <ProductRentalItem
              fullWidth
              style={{ animation: 'none'}}
              name={productsStudioETitle}
              image={productsStudioEImage}
              onModalToggle={() => onModalToggle(1)}
            />
          </Box3>
          <Box3 marginTop={25} style={{ width: '100%' }}>
            <ProductRentalItem
              fullWidth
              name={productsMPStudioTitle}
              image={productsMPStudioImage}
              onModalToggle={() => onModalToggle(2)}
            />
          </Box3>
          <Box3 marginTop={25} style={{ width: '100%' }}>
            <ProductRentalItem
              fullWidth
              name={productsPodcastLoungeTitle}
              image={productsPodcastLoungeImage}
              onModalToggle={() => onModalToggle(3)}
            />
          </Box3>
          <Box3 marginTop={25} style={{ width: '100%' }}>
            <ProductRentalItem
              fullWidth
              name={productsAudioStudioTitle}
              image={productsAudioStudioImage}
              onModalToggle={() => onModalToggle(4)}
            />
          </Box3>
        </Flex>
      )}

      <div onClick={() => setCategory(category === 2 ? 0 : 2)}>
        <MainProductCard active={category === 2} image={productsEquipmentImage} title={'Equipment'} />
      </div>
      {category === 2 && (
        <Flex wrap={true}>
          <Box3 marginTop={50}>
            <ProductRentalItem
              name={'Cameras'}
              image={'https://cdn.sanity.io/images/lagsmzsb/production/594894ac4c56f9673bcd05a4101abb04474c90ac-350x350.jpg'}
              onModalToggle={() => history.push('/equipment/cameras')}
            />
          </Box3>
          <Box3 marginTop={50}>
            <ProductRentalItem
              name={'Lighting'}
              image={'https://cdn.sanity.io/images/lagsmzsb/production/66d285688ac7dcee3ef610a30c0ec4e64581a7db-350x350.jpg'}
              onModalToggle={() => history.push('/equipment/lighting')}
            />
          </Box3>
          <Box3 marginTop={50}>
            <ProductRentalItem
              name={'Audio'}
              image={'https://cdn.sanity.io/images/lagsmzsb/production/4af813dc23ff637ce51d469fc8f6aaa15d29884b-350x350.jpg'}
              onModalToggle={() => history.push('/equipment/audio')}
            />
          </Box3>
        </Flex>
      )}

      <div onClick={() => setCategory(category === 3 ? 0 : 3)}>
        <MainProductCard active={category === 3} image={productsWorkstationImage} title={'Workstations'} />
      </div>
      {category === 3 && (
        <Flex wrap={true}
          css={`
            justify-content: center;
            ${respondTo.sm`
              justify-content: flex-start;
            `}
          `}
        >
          <Box3 marginTop={50}
            css={`
              margin-right: 0px;
              ${respondTo.sm`
                margin-right: 50px;
              `}
            `}
          >
            <a href="https://studiome.me/product/editing-workstation-1-hour/" target="_blank" rel="noopener noreferrer" css={`text-decoration: none;`}>
              <ProductRentalItem
                name={'Hourly'}
                image={'https://cdn.sanity.io/images/lagsmzsb/production/dd8b386231db7d533a8789a3ded4b7e2eb0cce61-400x400.jpg'}
                onModalToggle={() => null}
              />
            </a>
          </Box3>
          <Box3 marginTop={50}>
            <a href="https://studiome.me/product/editing-workstation-full-day/" target="_blank" rel="noopener noreferrer" css={`text-decoration: none;`}>
              <ProductRentalItem
                  name={'Daily'}
                  image={'https://cdn.sanity.io/images/lagsmzsb/production/b721fb4b05d43a26a09ec9d2e04876e05fb22fad-400x400.jpg'}
                  onModalToggle={() => null}
                />
              </a>
          </Box3> 
        </Flex>
      )}
    </div>
  )
}

export default ProductRentals;

const MainProductCard = ({ active, image, title }) => {
  return (
    <Box3 marginTop={50} css={`width: 100%;`}>
      <StyledProductCategoryCard css={`background-image: url(${image});`}>
        <StyledBanner>
          <H3 css={`text-align: center; text-transform: uppercase;`}>
            {title}
          </H3>
          <P3 css={`text-align: center;`}>Click to {active ? 'collapse' : 'view'}</P3>
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
