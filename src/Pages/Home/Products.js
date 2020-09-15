import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as actions from '../../redux/actions';

// Components
import ProductsModal from '../../components/ProductModal';
import ProductRentals from './Products/ProductRentals';
import ProductServices from './Products/ProductServices';
import ProductMemberships from './Products/ProductMemberships';
import Button from '../../components/Button'

// Photos
import PhotoSelfGuided from '../../assets/home/products/Studio-E-large.jpg';
import PhotoMPStudio from '../../assets/home/products/MP-Studio-large.jpg';
import PhotoPodcastLounge from '../../assets/home/products/Podcast-large.jpg';
import PhotoAudioRoom from '../../assets/home/products/Audio-Room-large.jpg';
import PhotoEquipment from '../../assets/home/products/Camera-large.jpg';
import PhotoWorkstation from '../../assets/home/products/Workstation-large.jpg';

class Products extends Component {

    state = {
        // Modal Functionality
        modalToggle: false,
        modalClass: 'product-modal',
        backdropClass: 'main-backdrop',

        // Modal Details
        heading: '',
        description: '',
        photo: null,
        subheading: '',
        option1: '',
        url1: '',
        option2: '',
        url2: '',
        option3: '',
        url3: '',

        // Loading
        loading: false,
    }

    componentDidMount() {
        this.setState({
            ...this.state,
            loading: false,
        })
    }

    onModalToggle = (product) => {
        if (!this.state.modalToggle) {
            this.setState({
                ...this.state,
                modalClass: "product-modal product-modal__popup",
                modalToggle: true,
                backdropClass: 'main-backdrop main-backdrop__fadeIn',
            })
        } else if (this.state.modalToggle) {
            this.setState({
                ...this.state,
                modalClass: "product-modal product-modal__popdown",
                modalToggle: false,
                backdropClass: 'main-backdrop main-backdrop__fadeOut',
            })
        }

        this.onProductToggle(product);
    }

    onProductToggle = (product) => {
        switch(product) {
            case 1:
                this.setState({
                    heading: "Self-Guided Studio",
                    description: 'The Self-Guided Studio is an easy-to-operate, all-inclusive space that’s perfect for interviews, training videos, social media videos and teleprompted scripts.',
                    photo: PhotoSelfGuided,
                    subheading: "Pick a duration to view:",
                    option1: "2 Hours",
                    url1: "https://studiome.me/product/self-guided-studio-e-2-hour-package/",
                    option2: "6 Hours",
                    url2: "https://studiome.me/product/self-guided-studio-e-6-hour-package/",
                    option3: "10 Hours",
                    url3: "https://studiome.me/product/self-guided-studio-e-10-hour-package/",
                })
                break;

            case 2:
                this.setState({
                    heading: "Multi-Purpose Studio",
                    description: 'At 410 square feet, the multi-purpose studio comes with up to 6 LED panel lighting on moveable stands and the option to choose from four 12′ seamless paper backdrops.',
                    photo: PhotoMPStudio,
                    subheading: "Pick a duration to view:",
                    option1: "2 Hours",
                    url1: "https://studiome.me/product/multi-purpose-studio-2-hour-package/",
                    option2: "6 Hours",
                    url2: "https://studiome.me/product/multi-purpose-studio-6-hour-package/",
                    option3: "10 Hours",
                    url3: "https://studiome.me/product/multi-purpose-studio-10-hour-package/",
                })
                break;
            case 3:
                this.setState({
                    heading: "Podcast Lounge",
                    description: 'The Podcast Lounge is your dedicated hub for professional-quality audio and video podcasting.',
                    photo: PhotoPodcastLounge,
                    subheading: "Pick a duration to view:",
                    option1: "Hourly",
                    url1: "https://studiome.me/product/podcast-lounge-hourly/",
                    option2: "Daily",
                    url2: "https://studiome.me/product/podcast-lounge-full-day/",
                    option3: '',
                    url3: '',
                })
                break;
            case 4:
                this.setState({
                    heading: "Audio Studio",
                    description: 'The soundproof audio studio is perfect for your podcasts, audiobook recordings, voice recordings, audio editing and screen captures and is available for hourly ($39/hour) and daily rental ($299/day).',
                    photo: PhotoAudioRoom,
                    subheading: "Pick a duration to view:",
                    option1: "Hourly",
                    url1: "https://studiome.me/product/soundproof-audio-studio-hourly/",
                    option2: "Daily",
                    url2: "https://studiome.me/product/soundproof-audio-studio-full-day/",
                    option3: '',
                    url3: '',
                })
                break;
            case 5:
                this.setState({
                    heading: "Equipment",
                    description: 'StudioME offers a variety of competitively priced rental equipment, ranging from DSLRs, Condensor Mics, Shotgun Mics, Monitors, and LED Lights.',
                    photo: PhotoEquipment,
                    subheading: "Pick a category to view:",
                    option1: "Camera",
                    url1: "",
                    option2: "Lighting",
                    url2: "",
                    option3: 'Audio',
                    url3: "",
                })
                break;
            case 6:
                this.setState({
                    heading: "Edit Workstation",
                    description: 'Our Editing Stations come with the Adobe Creative Cloud, Final Cut Pro X, iMovie and free access to our professional music and sound effects libraries.',
                    photo: PhotoWorkstation,
                    subheading: "Pick a duration to view:",
                    option1: "Hourly",
                    url1: "https://studiome.me/product/editing-workstation-1-hour/",
                    option2: "Daily",
                    url2: "https://studiome.me/product/editing-workstation-full-day/",
                    option3: '',
                    url3: '',
                })
                break;
            default: return;
        }
    }

    onLoadingToggle = () => {
        this.setState({
            ...this.state,
            loading: true,
        })

        setTimeout(() => {
            this.setState({
                ...this.state,
                loading: false,
            })
        }, 3000);
    }

    render() {
        return (
            <div id="products" className="container">
                <div id="products__button-container--1">
                    <button
                        className={this.props.rentalsButtonClass}
                        onClick={this.props.rentalButton}
                    >
                        Rentals
                    </button>
                </div>

                <div id="products__button-container--2">
                    <button
                        className={this.props.servicesButtonClass}
                        onClick={this.props.serviceButton}
                    >
                        Services
                    </button>
                </div>

                <div id="products__button-container--3">
                    <button
                        className={this.props.membershipsButtonClass}
                        onClick={this.props.membershipsButton}
                    >
                        Memberships
                    </button>
                </div>


                <ProductsModal
                    toggle={this.onModalToggle}
                    class={this.state.modalClass}

                    heading={this.state.heading}
                    description={this.state.description}
                    photo={this.state.photo}
                    subheading={this.state.subheading}

                    option1={this.state.option1}
                    url1={this.state.url1}
                    option2={this.state.option2}
                    url2={this.state.url2}
                    option3={this.state.option3}
                    url3={this.state.url3}
                    loadingToggle={this.onLoadingToggle}
                    loading={this.state.loading}
                />
                {/* Backdrop */}
                <div className={this.state.backdropClass} onClick={this.onModalToggle} />

                {this.props.rentalToggle && <ProductRentals onModalToggle={this.onModalToggle} />}
                {this.props.servicesToggle && <ProductServices />}
                {this.props.membershipsToggle && <ProductMemberships />}

                <div id="products__conferencing-container">
                    <h2 id="products__conferencing-heading" className="h2 bold uppercase center">Video Conferencing Solutions</h2>
                    <NavLink
                        to="/virtual" exact
                    >
                        <Button d="products__conferencing-button" size={'l'}>Learn More</Button>
                    </NavLink>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
	return {
        rentalsButtonClass: state.rentalsButtonClass,
        servicesButtonClass: state.servicesButtonClass,
        membershipsButtonClass: state.membershipsButtonClass,
        rentalToggle: state.rentalToggle,
        servicesToggle: state.servicesToggle,
        membershipsToggle: state.membershipsToggle,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		rentalButton: () => dispatch(actions.rentalButton()),
		serviceButton: () => dispatch(actions.serviceButton()),
		membershipsButton: () => dispatch(actions.membershipsButton()),
	};
};

export default connect( mapStateToProps, mapDispatchToProps )(Products);