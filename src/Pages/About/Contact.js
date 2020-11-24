import React, { Component } from 'react'

// Components
import { BannerAlt } from '../../components/Banner'
import Button from '../../components/Button'
import Snackbar from '../../components/Snackbar'
import SubmitRing from '../../components/SubmitRing'

// SVGs
import { ReactComponent as Facebook } from '../../assets/about/contact/facebook.svg';
import { ReactComponent as Instagram } from '../../assets/about/contact/instagram.svg';
import { ReactComponent as Twitter } from '../../assets/about/contact/twitter.svg';
import { ReactComponent as YouTube } from '../../assets/about/contact/youtube.svg';
import { ReactComponent as Vimeo } from '../../assets/about/contact/vimeo.svg';

export default class Contact extends Component {
    state = {
        email: '',
        name: '',
        number: '',
        message: '',

        loading: false,
        submitted: false,
        success: false,
    }

    setEmail = (e) => {
        this.setState({email: e.target.value})
    }

    setName = (e) => {
        this.setState({name: e.target.value})
    }

    setNumber = (e) => {
        this.setState({number: e.target.value})
    }

    setMessage = (e) => {
        this.setState({message: e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log('submit')
        
        this.setState({ loading: true })
        fetch('https://studiome-backend.herokuapp.com/mail',{
            // fetch('http://localhost:8000/mail',{
            method: "POST",
            body: JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(
            (response) => (response.json())
        ).then((response)=>{
            if (response.status === 'success'){
                this.resetForm();
                this.setState({ submitted: true, success: true, loading: false, })
            } else if(response.status === 'fail'){
                this.setState({ submitted: true, success: false, loading: false })
            }
        })
        .catch(() => this.setState({ submitted: true, success: false }))
    }

    onCloseSnackbar = () => {
        this.setState({ submitted: false })
    }

    resetForm(){
        this.setState({name: '', email: '', number: '', message: ''})
    }

    render() {
        return (
            <>
                <BannerAlt color="green" text={this.props.contactBannerTitle} textColor="grey" image={this.props.contactBannerImage}/>
                <div className="container-new">
                    <div className="flex" id="about__4-icon-container">
                        <a
                            target="_blank" rel="noopener noreferrer"
                            href="https://www.facebook.com/studiomepgh/"
                            id="about__4-icon-link"
                        >
                            <Facebook className="about__4-icon about__4-icon--1" />
                        </a>

                        <a
                            target="_blank" rel="noopener noreferrer"
                            href="https://www.instagram.com/studiome_llc/"
                            id="about__4-icon-link"
                        >
                            <Instagram className="about__4-icon about__4-icon--2" />
                        </a>

                        <a
                            target="_blank" rel="noopener noreferrer"
                            href="https://twitter.com/StudioME_llc/"
                            id="about__4-icon-link"
                        >
                            <Twitter className="about__4-icon about__4-icon--3" />
                        </a>

                        <a
                            target="_blank" rel="noopener noreferrer"
                            href="https://www.youtube.com/channel/UC-qyGIloES4TL4CPxWBmrDA/"
                            id="about__4-icon-link"
                        >
                            <YouTube className="about__4-icon about__4-icon--4" />
                        </a>

                        <a
                            target="_blank" rel="noopener noreferrer"
                            href="https://vimeo.com/studiomellc/"
                            id="about__4-icon-link"
                        >
                            <Vimeo className="about__4-icon about__4-icon--4" />
                        </a>
                    </div>
                    
                    <div className="col-2" id="about__4-container">
                        <div className="col-2-1" id="about__4-map-container">
                            <div className="flex-column">
                                <iframe
                                    id="about__4-contact-map"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3035.577984058043!2d-79.9295610838317!3d40.46247657935969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8834f273cde9d741%3A0x425c4b6140239b61!2sStudioME!5e0!3m2!1sen!2sus!4v1549830213825"
                                    frameBorder="0"
                                    allowFullScreen
                                    title="map"
                                ></iframe>
                                <p className="p-xl" id="about__4-email" style={{padding: 0}}>Email: StudioMELLC@gmail.com</p>
                                <p className="p-xl" id="about__4-phone" style={{padding: 0}}>Phone: (412) 404-2868</p>
                                <h2 className="h2" id="about__4-heading-1">Interested in an internship?</h2>
                                <h3 className="h3 l" id="about__4-heading-2">
                                    <a
                                        target="_blank" rel="noopener noreferrer"
                                        className="orange"
                                        id="about__4-link"
                                        href="https://studiome.me/video-production-internships/"
                                    >Video Production</a>
                                </h3>
                                <h3 className="h3 l" id="about__4-heading-3">
                                    <a
                                        target="_blank" rel="noopener noreferrer"
                                        className="orange"
                                        id="about__4-link"
                                        href="https://studiome.me/marketing-social-media-internships/"
                                    >Marketing / Social Media</a>
                                </h3>
                            </div>
                        </div>
                        <div className="col-2-2" id="about__4-contact-form-container">
                            <form className="flex-column card" id="about__4-contact-form" onSubmit={this.onSubmit}>
                                <h2 className="h2">Contact Form</h2>
                                <div className="line-m line-m--green" id="about__4-form-line" />

                                <label htmlFor="about__4-form-input-email" id="about__4-form-label-email" className="form__label">Email Address:</label>
                                <input
                                    type="email" placeholder="Your email" id="about__4-form-input-email" className="form__input p-l"
                                    value={this.state.email} onChange={this.setEmail.bind(this)}
                                />

                                <label htmlFor="about__4-form-input-name" id="about__4-form-label-name" className="form__label">Full Name:</label>
                                <input type="text" placeholder="Your name" id="about__4-form-input-name" className="form__input p-l"
                                    value={this.state.name} onChange={this.setName.bind(this)}
                                />

                                <label htmlFor="about__4-form-input-number" id="about__4-form-label-number" className="form__label">Phone Number:</label>
                                <input type="tel" placeholder="Your number" id="about__4-form-input-number" className="form__input p-l"
                                    value={this.state.number} onChange={this.setNumber.bind(this)}
                                />

                                <label htmlFor="about__4-form-input-message" id="about__4-form-label-message" className="form__label p-l">Message:</label>
                                <textarea required type="text" id="about__4-form-input-message" className="form__textarea p-m"
                                    value={this.state.message} onChange={this.setMessage.bind(this)}
                                />

                                <div id="about__4-form-button-container">
                                    <Button size="l" type="submit">
                                        {this.state.loading ? <SubmitRing /> : 'submit'}
                                    </Button>
                                </div>
                                { this.state.submitted && <Snackbar success={this.state.success} onCloseSnackbar={this.onCloseSnackbar} /> }
                            </form>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
