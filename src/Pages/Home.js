import React, { Component, createRef } from 'react';
import imageUrlBuilder from '@sanity/image-url'
import { client } from '../client'

import Hero from './Home/Hero';
import Products from './Home/Products';
// import Examples from './Home/Examples';
// import WhatWeDo from './Home/WhatWeDo';
// import Services from './Home/Services';

import Contact from './About/Contact';

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

        client.fetch('*[_type == "about" && slug.current == "v1"][0]').then(pageProps => {
            this.setState({
                ...this.state,
                contactBannerTitle: pageProps.contactBannerTitle,
                contactBannerImage: pageProps.contactBannerImage,
            })
        })
    }

    componentDidUpdate() {
        if (this.props.sidebarSelection === 'products') {
            this.onProductsHandler();
        }
    }

    render() {

        return (
            <div className="home">
                <Hero
                    onProductsHandler={this.onProductsHandler}

                    heroVideo={this.state.heroVideo}
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
                    productsTheMeetupTitle={this.state.productsTheMeetupTitle}
                    productsTheMeetupDescription={this.state.productsTheMeetupDescription}
                    productsTheMeetupImage={urlFor(this.state.productsTheMeetupImage)}
                    productsEquipmentTitle={this.state.productsEquipmentTitle}
                    productsEquipmentDescription={this.state.productsEquipmentDescription}
                    productsEquipmentImage={urlFor(this.state.productsEquipmentImage)}
                    // productsWorkstationTitle={this.state.productsWorkstationTitle}
                    // productsWorkstationDescription={this.state.productsWorkstationDescription}
                    // productsWorkstationImage={urlFor(this.state.productsWorkstationImage)}
                    productsVirtualSolutionsText={this.state.productsVirtualSolutionsText}
                />
                {/* <Examples /> */}
                {/* <WhatWeDo
                    whatWeDoBannerTitle={this.state.whatWeDoBannerTitle}
                    whatWeDoBannerImage={urlFor(this.state.whatWeDoBannerImage)}
                    whatWeDoDescription={this.state.whatWeDoDescription}
                /> */}
                {/* <Services
                    onQuickButtonFix={this.props.onQuickButtonFix}

                    servicesBannerTitle={this.state.servicesBannerTitle}
                    servicesBannerImage={urlFor(this.state.servicesBannerImage)}
                    services1Title={this.state.services1Title}
                    services1Description={this.state.services1Description}
                    services1Image1={urlFor(this.state.services1Image1)}
                    services1Image2={urlFor(this.state.services1Image2)}
                    services1Image3={urlFor(this.state.services1Image3)}
                    services1Image4={urlFor(this.state.services1Image4)}

                    services2Title={this.state.services2Title}
                    services2Description={this.state.services2Description}
                    services2Image1={urlFor(this.state.services2Image1)}
                    services2Image2={urlFor(this.state.services2Image2)}
                    services2Image3={urlFor(this.state.services2Image3)}
                    services2Image4={urlFor(this.state.services2Image4)}

                    services3Title={this.state.services3Title}
                    services3Description={this.state.services3Description}
                    services3Image1={urlFor(this.state.services3Image1)}
                    services3Image2={urlFor(this.state.services3Image2)}
                    services3Image3={urlFor(this.state.services3Image3)}
                    services3Image4={urlFor(this.state.services3Image4)}
                /> */}
                <Contact
                    contactBannerTitle={this.state.contactBannerTitle}
                    contactBannerImage={urlFor(this.state.contactBannerImage)}
                />
            </div>
        )
    }
}
