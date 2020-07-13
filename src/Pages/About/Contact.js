import React from 'react'

// Components
import { BannerAlt } from '../../components/Banner'

// Images
import BannerImage from '../../assets/about/contact/Contact-Blur.jpg'

// SVGs
import { ReactComponent as Facebook } from '../../assets/about/contact/facebook.svg';
import { ReactComponent as Instagram } from '../../assets/about/contact/instagram.svg';
import { ReactComponent as Twitter } from '../../assets/about/contact/twitter.svg';
import { ReactComponent as YouTube } from '../../assets/about/contact/youtube.svg';
import { ReactComponent as Vimeo } from '../../assets/about/contact/vimeo.svg';

export default function Contact() {
    return (
        <>
            <BannerAlt color="green" text="Speak to Our Creative Team" textColor="grey" image={BannerImage}/>
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
                    <div className="col-2-2">
                        <iframe
                            id="about__4-contact-form"
                            title="contact-form"
                            src="https://docs.google.com/forms/d/e/1FAIpQLSfxBd-RTFur3ApCLFBB3-tNxCbdCXO7-L0ugJ9zDZMgYGkrOg/viewform?embedded=true"
                            frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
                    </div>
                </div>
            </div>
        </>
    )
}
