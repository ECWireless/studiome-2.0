import React, { Component } from 'react';

// Apollo
import { graphql } from 'react-apollo';
import { flowRight as compose } from 'lodash';

// Queries
import {
    addImpression,
} from '../../../analytics/queries';

// Product Items
import ProductRentalItem from './ProductRentalItem';

// Components
import { Box3 } from '../../../components/Boxes'
import { Flex } from '../../../components/Containers'

class ProductRentals extends Component {

    addImpression = (id) => {
		this.props.addImpression({
			variables: {
				date: new Date().toISOString().slice(0, 10),
				productId: id
			}
        })
    }
    
    render() {
        return (
            <Flex wrap={true}>
                <Box3 marginTop={50}>
                    <ProductRentalItem
                        style={{ animation: 'none'}}
                        name={this.props.productsStudioETitle}
                        image={this.props.productsStudioEImage}
                        onModalToggle={this.props.onModalToggle.bind(this, 1)}
                        impression={this.addImpression.bind(this, '5e28a7e6a8e24c0004493f02')}
                    />
                </Box3>
    
                <Box3 marginTop={50}>
                    <ProductRentalItem
                        name={this.props.productsMPStudioTitle}
                        image={this.props.productsMPStudioImage}
                        onModalToggle={this.props.onModalToggle.bind(this, 2)}
                        impression={this.addImpression.bind(this, '5e28a7f9a8e24c0004493f03')}
                    />
                </Box3>
    
                <Box3 marginTop={50}>
                    <ProductRentalItem
                        name={this.props.productsPodcastLoungeTitle}
                        image={this.props.productsPodcastLoungeImage}
                        onModalToggle={this.props.onModalToggle.bind(this, 3)}
                        impression={this.addImpression.bind(this, '5e28a808a8e24c0004493f04')}
                    />
                </Box3>
    
                <Box3 marginTop={50}>
                    <ProductRentalItem
                        name={this.props.productsAudioStudioTitle}
                        image={this.props.productsAudioStudioImage}
                        onModalToggle={this.props.onModalToggle.bind(this, 4)}
                        impression={this.addImpression.bind(this, '5e28bdfea8e24c0004493f3b')}
                    />
                </Box3>
    
                <Box3 marginTop={50}>
                    <ProductRentalItem
                        name={this.props.productsEquipmentTitle}
                        image={this.props.productsEquipmentImage}
                        onModalToggle={this.props.onModalToggle.bind(this, 5)}
                        impression={this.addImpression.bind(this, '5e28a85da8e24c0004493f05')}
                    />
                </Box3>
    
                <Box3 marginTop={50}>
                    <ProductRentalItem
                        name={this.props.productsWorkstationTitle}
                        image={this.props.productsWorkstationImage}
                        onModalToggle={this.props.onModalToggle.bind(this, 6)}
                        impression={this.addImpression.bind(this, '5e28a866a8e24c0004493f06')}
                    />
                </Box3>
            </Flex>
        )
    }
}

export default compose(
	graphql(addImpression, { name: "addImpression" })
)(ProductRentals);
