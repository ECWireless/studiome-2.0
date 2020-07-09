import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

// Components
import Button from '../../components/Button';
import Spinner from '../../components/Spinner';

export default class Swag extends Component {

    state = {
        products: [],
        isLoading: true,
    }

    componentDidMount() {
        window.scroll({
            top: 0,
        });
        this.onFetchEquipment();
    }

    onFetchEquipment = (selected) => {
        this.setState({
            ...this.state,
            isLoading: true,
        })
        return fetch(`https://studiome.me/wp-json/wc/v3/products?category=58&consumer_key=ck_eb79db710bcbf62dcae2b878f4af0b921d17606a&consumer_secret=cs_d5e3d7d6a51dae722c9028bf3b3196e570632c55`)
		.then(response => response.json())
		.then(responseJson => {
            let productsArray = responseJson;
            let products = [];

            for (let i = 0; i < productsArray.length; i++) {
                products.push(productsArray[i])
            }

            this.setState({
                ...this.state,
                products: products,
                isLoading: false,
            })
        })
    }

    render() {

        let content = <div style={{gridColumn: '1 / -1'}}><Spinner /></div>

        if (!this.state.isLoading) {
            content = (
                <div className="swag__container">
                    {this.state.products.map((product,index) => (
                        <a
                            target="_blank" rel="noopener noreferrer"
                            href={product.permalink}
                            style={{textDecoration: 'none'}}
                            className="swag__component" key={index}
                        >
                            <div className="swag__component-photo" style={{backgroundImage: `url(${product.images[0].src})`}} alt="Equipment-Photo" />
                            <h6 className="swag__component-heading h6 b">{product.name}</h6>
                        </a>
                    ))}
                </div>
            )
        }
        
        return (
            <div className="swag">
            <div className="swag__banner" />
            <div className="swag__banner-container">
                <h1 className="swag__heading h1">Swag</h1>
                <div className="swag__border" />
            </div>

            <NavLink className="swag__back-button" exact to="/community">
                <Button arrow text={"Back"} size={"m"} />
            </NavLink>

            <p className="swag__description p-xl">With a focus on artists in our community, our swag is designed to celebrate photographers, videographers, podcasters, and media creators in the Pittsburgh area.</p>

            {content}
        </div>
        )
    }
}
