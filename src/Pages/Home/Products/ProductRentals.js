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
            <React.Fragment>
                <ProductRentalItem
                    style={{ animation: 'none'}}
                    name={this.props.productsStudioETitle}
                    image={this.props.productsStudioEImage}
                    index={1}
                    onModalToggle={this.props.onModalToggle.bind(this, 1)}
                    impression={this.addImpression.bind(this, '5e28a7e6a8e24c0004493f02')}
                />
    
                <ProductRentalItem
                    index={2}
                    name={this.props.productsMPStudioTitle}
                    image={this.props.productsMPStudioImage}
                    onModalToggle={this.props.onModalToggle.bind(this, 2)}
                    impression={this.addImpression.bind(this, '5e28a7f9a8e24c0004493f03')}
                />
    
                <ProductRentalItem
                    index={3}
                    name={this.props.productsPodcastLoungeTitle}
                    image={this.props.productsPodcastLoungeImage}
                    onModalToggle={this.props.onModalToggle.bind(this, 3)}
                    impression={this.addImpression.bind(this, '5e28a808a8e24c0004493f04')}
                />
    
                <ProductRentalItem
                    index={4}
                    name={this.props.productsAudioStudioTitle}
                    image={this.props.productsAudioStudioImage}
                    onModalToggle={this.props.onModalToggle.bind(this, 4)}
                    impression={this.addImpression.bind(this, '5e28bdfea8e24c0004493f3b')}
                />
    
                <ProductRentalItem
                    index={5}
                    name={this.props.productsEquipmentTitle}
                    image={this.props.productsEquipmentImage}
                    onModalToggle={this.props.onModalToggle.bind(this, 5)}
                    impression={this.addImpression.bind(this, '5e28a85da8e24c0004493f05')}
                />
    
                <ProductRentalItem
                    index={6}
                    name={this.props.productsWorkstationTitle}
                    image={this.props.productsWorkstationImage}
                    onModalToggle={this.props.onModalToggle.bind(this, 6)}
                    impression={this.addImpression.bind(this, '5e28a866a8e24c0004493f06')}
                />
            </React.Fragment>
        )
    }
}

export default compose(
	graphql(addImpression, { name: "addImpression" })
)(ProductRentals);