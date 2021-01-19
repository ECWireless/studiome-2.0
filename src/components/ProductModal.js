import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';
import * as actions from '../redux/actions';

// Components
import Spinner from '../components/Spinner';

// SVGs
import { ReactComponent as Close } from '../assets/home/products/cross.svg';

class ProductModal extends Component {
    onCameraSelect = () => {
        this.props.loadingToggle();
        this.props.cameraButton();
    }

    onLightingSelect = () => {
        this.props.loadingToggle();
        this.props.lightingButton();
    }

    onAudioSelect = () => {
        this.props.loadingToggle();
        this.props.audioButton();
    }

    render() {
        let content = '';

        if (this.props.option3 === '') {
            content = (
                <div className={this.props.class}>
                    <div className="product-modal__close-container">
                        <Close onClick={this.props.toggle} className="product-modal__close" />
                    </div>
                    <h2 className="product-modal__heading h2 h2--teal b">{this.props.heading}</h2>
                    <div className="product-modal__border" />
                    <p className="product-modal__description p-l">{this.props.description}</p>
                    <div className="product-modal__photo" style={{ backgroundImage: `url(${this.props.photo})` }} />
                    <p className="product-modal__duration p-l">{this.props.subheading}</p>
                    <a
                        className="product-modal__alt-placement-1"
                        href={this.props.url1}
                        onClick={this.props.loadingToggle}
                    >
                        <button className="product-modal__button">{this.props.option1}</button>
                    </a>
                    <a
                        className="product-modal__alt-placement-2"
                        href={this.props.url2}
                        onClick={this.props.loadingToggle}
                    >
                        <button className="product-modal__button">{this.props.option2}</button>
                    </a>
                </div>
            )
        } else if (this.props.option3 !== '' && this.props.heading !== 'Equipment') {
            content = (
                <div className={this.props.class}>
                    <div className="product-modal__close-container">
                        <Close onClick={this.props.toggle} className="product-modal__close" />
                    </div>
                    <h2 className="product-modal__heading h2 h2--teal b">{this.props.heading}</h2>
                    <div className="product-modal__border" />
                    <p className="product-modal__description p-l">{this.props.description}</p>
                    <div className="product-modal__photo" style={{ backgroundImage: `url(${this.props.photo})` }} />
                    <p className="product-modal__duration p-l">{this.props.subheading}</p>
                    <a
                        className="product-modal__placement-1"
                        href={this.props.url1}
                        onClick={this.props.loadingToggle}
                    >
                        <button className="product-modal__button">{this.props.option1}</button>
                    </a>
                    <a
                        className="product-modal__placement-2"
                        href={this.props.url2}
                        onClick={this.props.loadingToggle}
                    >
                        <button className="product-modal__button">{this.props.option2}</button>
                    </a>
                    <a
                        className="product-modal__placement-3"
                        href={this.props.url3}
                        onClick={this.props.loadingToggle}
                    >
                        <button className="product-modal__button">{this.props.option3}</button>
                    </a>
                </div>
            )
        } else if (this.props.option3 !== '' && this.props.heading === 'Equipment') {
            content = (
                <div className={this.props.class}>
                    <div className="product-modal__close-container">
                        <Close onClick={this.props.toggle} className="product-modal__close" />
                    </div>
                    <h2 className="product-modal__heading h2 h2--teal b">{this.props.heading}</h2>
                    <div className="product-modal__border" />
                    <p className="product-modal__description p-l">{this.props.description}</p>
                    <div className="product-modal__photo" style={{ backgroundImage: `url(${this.props.photo})` }} />
                    <p className="product-modal__duration p-l">{this.props.subheading}</p>
                    <NavLink
                        onClick={this.onCameraSelect}
                        className="product-modal__placement-1"
                        to="/equipment" exact
                        category={'907'}
                    >
                        <button className="product-modal__button">{this.props.option1}</button>
                    </NavLink>
                    <NavLink
                        onClick={this.onLightingSelect}
                        className="product-modal__placement-2"
                        to="/equipment" exact
                        category={'965'}
                    >
                        <button className="product-modal__button">{this.props.option2}</button>
                    </NavLink>
                    <NavLink
                        onClick={this.onAudioSelect}
                        className="product-modal__placement-3"
                        to="/equipment" exact
                        category={'963'}
                    >
                        <button className="product-modal__button">{this.props.option3}</button>
                    </NavLink>
                </div>
            )
        }

        return (
            <div>
                {!this.props.loading ? content : (
                    <div className={this.props.class}>
                        <div className="product-modal__close-container">
                            <Close onClick={this.props.toggle} className="product-modal__close" />
                        </div>
                        <h2 className="product-modal__heading h2 h2--teal" >Loading...</h2>
                        <div className="product-modal__border" />
                        <div className="product-modal__loader"><Spinner /></div>
                    </div>
                )}
            </div> 
        )
    }
}

const mapDispatchToProps = dispatch => {
	return {
		cameraButton: () => dispatch(actions.cameraButton()),
		lightingButton: () => dispatch(actions.lightingButton()),
		audioButton: () => dispatch(actions.audioButton()),
	};
};

export default connect( null, mapDispatchToProps )(ProductModal);
