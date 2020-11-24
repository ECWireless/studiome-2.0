import React, { Component, createRef } from 'react';
import imageUrlBuilder from '@sanity/image-url'
import { client } from '../client'

// Sections
import Hero from './Home/Hero';
import Products from './Home/Products';
import WhatWeDo from './Home/WhatWeDo';
import Services from './Home/Services';

function urlFor (source) {
    return imageUrlBuilder(client).image(source)
}

export default class Home extends Component {

    state = {
        myRefProducts: createRef()
    }

    onProductsHandler = () => {
        window.scroll({
            top: this.state.myRefProducts.current.offsetTop,
            behavior: 'smooth'
        });
    }

    componentDidMount() {
        if (this.props.sidebarSelection === 'products') {
            this.onProductsHandler();
        }

        client.fetch('*[_type == "home" && slug.current == "v1"][0]').then(pageProps => {
            this.setState({
                ...this.state,
                ...pageProps
            })
        })
    }

    render() {
        console.log(this.state)

        return (
            <div className="home">
                <Hero
                    onProductsHandler={this.onProductsHandler}

                    heroMobileTagline={this.state.heroMobileTagline}
                    heroMobileDescription={this.state.heroMobileDescription}
                    heroDesktopDescription={this.state.heroDesktopDescription}
                    heroProductsIndicatorText={this.state.heroProductsIndicatorText}
                />
                <div style={{position: 'relative', top: '-75px'}} ref={this.state.myRefProducts} />
                <Products
                    productsStudioETitle={this.state.productsStudioETitle}
                    productsStudioEDescription={this.state.productsStudioEDescription}
                    productsStudioEImage={urlFor(this.state.productsStudioEImage)}
                    productsMPStudioTitle={this.state.productsMPStudioTitle}
                    productsMPStudioDescription={this.state.productsMPStudioDescription}
                    productsMPStudioImage={urlFor(this.state.productsMPStudioImage)}
                    productsPodcastLoungeTitle={this.state.productsPodcastLoungeTitle}
                    productsPodcastLoungeDescription={this.state.productsPodcastLoungeDescription}
                    productsPodcastLoungeImage={urlFor(this.state.productsPodcastLoungeImage)}
                    productsAudioStudioTitle={this.state.productsAudioStudioTitle}
                    productsAudioStudioDescription={this.state.productsAudioStudioDescription}
                    productsAudioStudioImage={urlFor(this.state.productsAudioStudioImage)}
                    productsEquipmentTitle={this.state.productsEquipmentTitle}
                    productsEquipmentDescription={this.state.productsEquipmentDescription}
                    productsEquipmentImage={urlFor(this.state.productsEquipmentImage)}
                    productsWorkstationTitle={this.state.productsWorkstationTitle}
                    productsWorkstationDescription={this.state.productsWorkstationDescription}
                    productsWorkstationImage={urlFor(this.state.productsWorkstationImage)}
                    productsVirtualSolutionsText={this.state.productsVirtualSolutionsText}
                />
                <WhatWeDo />
                <Services onQuickButtonFix={this.props.onQuickButtonFix} />
            </div>
        )
    }
}
