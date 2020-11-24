import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import imageUrlBuilder from '@sanity/image-url'
import { client } from '../client'

function urlFor (source) {
    return imageUrlBuilder(client).image(source)
}

export default class Community extends Component {
    state = {}

    componentDidMount() {
        window.scroll({
            top: 0,
        });

        client.fetch('*[_type == "community" && slug.current == "v1"][0]').then(pageProps => {
            this.setState({
                ...this.state,
                ...pageProps
            })
        })
    }
    
    render() {
        return (
            // Main Page
            <div className="community">
                <div className="community__banner" style={{ backgroundImage: `url(${urlFor(this.state.mainBannerImage)})`}} />
                <div className="community__banner-container">
                    <h1 className="community__heading h1">{this.state.mainBannerTitle}</h1>
                    <div className="community__border" />
                </div>

                <p className="community__description p-l">
                    {this.state.mainDescription}
                </p>

                <NavLink
                    to="/community/events" exact style={{textDecoration: 'none'}}
                    className="community__card community__card--1"
                >
                    <div className="community__card-banner">
                        <h3 className="h3 d">Event Hosting</h3>
                        <div className="community__card-line" />
                    </div>
                </NavLink>
                <NavLink
                    to="/community/gallery" exact style={{textDecoration: 'none'}}
                    className="community__card community__card--2"
                >
                    <div className="community__card-banner">
                        <h3 className="h3 d">Gallery</h3>
                        <div className="community__card-line" />
                    </div>
                </NavLink>
                <NavLink
                    to="/community/learn" exact style={{textDecoration: 'none'}}
                    className="community__card community__card--3"
                >
                    <div className="community__card-banner">
                        <h3 className="h3 d">Learn</h3>
                        <div className="community__card-line" />
                    </div>
                </NavLink>
                <NavLink
                    to="/community/swag" exact style={{textDecoration: 'none'}}
                    className="community__card community__card--4"
                >
                    <div className="community__card-banner">
                        <h3 className="h3 d">Swag</h3>
                        <div className="community__card-line" />
                    </div>
                </NavLink>
            </div>     
        )
    }
}
