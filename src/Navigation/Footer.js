import React from 'react';
import { NavLink } from 'react-router-dom';

// SVGs
import { ReactComponent as Facebook } from '../assets/about/contact/facebook.svg';
import { ReactComponent as Instagram } from '../assets/about/contact/instagram.svg';
import { ReactComponent as Twitter } from '../assets/about/contact/twitter.svg';
import { ReactComponent as YouTube } from '../assets/about/contact/youtube.svg';
import { ReactComponent as Vimeo } from '../assets/about/contact/vimeo.svg';

export default function Footer(props) {
    return (
        <div className="footer">
            <div className="footer__container">

                {/* PRODUCT */}
                <div className="footer__product">
                    <h4 className="footer__product-heading h4">Product</h4>
                    <hr className="footer__product-border"/>
                    <a
                        target="_blank" rel="noopener noreferrer"
                        href="https://studiome.me/product/self-guided-studio-e-2-hour-package/"
                        className="footer__product-link">
                        <p>The Media Space</p>
                    </a>
                    <a
                        target="_blank" rel="noopener noreferrer"
                        href="https://studiome.me/product/podcast-lounge-hourly/"
                        className="footer__product-link">
                        <p className="footer__product-link3">Podcast Lounge</p>
                    </a>
                    <a
                        target="_blank" rel="noopener noreferrer"
                        href="https://studiome.me/product/soundproof-audio-studio-hourly/"
                        className="footer__product-link">
                        <p className="footer__product-link4">Audio Studio</p>
                    </a>
                    {/* <a
                        target="_blank" rel="noopener noreferrer"
                        href="https://studiome.me/product/editing-workstation-2-hour/"
                        className="footer__product-link">
                        <p className="footer__product-link5">Edit Stations</p>
                    </a> */}
                    {/* <a
                        target="_blank" rel="noopener noreferrer"
                        href="https://studiome.me/book-me/camera-rental/"
                        className="footer__product-link">
                        <p className="footer__product-link6">Camera Equipment</p>
                    </a>
                    <a
                        target="_blank" rel="noopener noreferrer"
                        href="https://studiome.me/book-me/lighting-rental/"
                        className="footer__product-link">
                        <p className="footer__product-link7">Lighting Equipment</p>
                    </a>
                    <a
                        target="_blank" rel="noopener noreferrer"
                        href="https://studiome.me/book-me/audio-rental/"
                        className="footer__product-link">
                        <p className="footer__product-link8">Audio Equipment</p>
                    </a> */}
                    <a
                        target="_blank" rel="noopener noreferrer"
                        href="https://docs.google.com/forms/d/e/1FAIpQLScgxBrBmFA8wMtJqLP33HSelBzJq3OMkNyDSo3uDU8y_2N9dw/viewform"
                        className="footer__product-link">
                        <p className="footer__product-link9">Full-Service</p>
                    </a>
                </div>

                {/* COMPANY */}
                <div className="footer__company">
                    <h4 className="footer__company-heading h4">Company</h4>
                    <hr className="footer__company-border"/>
                    <NavLink
                        onClick={props.onLargeSidebarSelection.bind(this, 'general')}
                        className="footer__company-link"
                        to="/about" exact style={{textDecoration: 'none'}}
                    >
                        <p>StudioME's Origin Story</p>
                    </NavLink>
                    <NavLink
                        onClick={props.onLargeSidebarSelection.bind(this, 'team')}
                        className="footer__company-link"
                        to="/about/#team" exact style={{textDecoration: 'none'}}
                    >
                        <p>Team</p>
                    </NavLink>

                    <NavLink
                        onClick={props.onLargeSidebarSelection.bind(this, 'work')}
                        className="footer__company-link"
                        to="/about/#work" exact style={{textDecoration: 'none'}}
                    >
                        <p>Our Work</p>
                    </NavLink>
                </div>

                {/* CONTACT */}
                <div className="footer__contact">
                    <h4 className="footer__contact-heading h4">Contact</h4>
                    <hr className="footer__contact-border"/>
                    <p className="footer__contact-address1">5819 Penn Avenue</p>
                    <p className="footer__contact-address2">Pittsburgh, PA 15206</p>
                    <a
                        target="_blank" rel="noopener noreferrer"
                        href="tel: +14124042868"
                        className="footer__contact-link1">
                        <p>(412) 404-2868</p>
                    </a>
                    <a
                        target="_blank" rel="noopener noreferrer"
                        href="mailto:studiomellc@gmail.com"
                        className="footer__contact-link2">
                        <p>studiomellc@gmail.com</p>
                    </a>
                </div>

                {/* SOCIAL */}
                <div className="footer__social">
                    <h4 className="footer__social-heading h4">Social</h4>
                    <hr className="footer__social-border"/>
                    <a
                        target="_blank" rel="noopener noreferrer"
                        href="https://www.facebook.com/studiomepgh/"
                        className="footer__social-icon-link">
                        <Facebook className="footer__social-icon" />
                    </a>

                    <a
                        target="_blank" rel="noopener noreferrer"
                        href="https://www.instagram.com/studiome_llc/"
                        className="footer__social-icon-link">
                        <Instagram className="footer__social-icon" />
                    </a>

                    <a
                        target="_blank" rel="noopener noreferrer"
                        href="https://twitter.com/StudioME_llc/"
                        className="footer__social-icon-link">
                        <Twitter className="footer__social-icon" />
                    </a>

                    <a
                        target="_blank" rel="noopener noreferrer"
                        href="https://www.youtube.com/channel/UC-qyGIloES4TL4CPxWBmrDA/"
                        className="footer__social-icon-link">
                        <YouTube className="footer__social-icon" />
                    </a>

                    <a
                        target="_blank" rel="noopener noreferrer"
                        href="https://vimeo.com/studiomellc/"
                        className="footer__social-icon-link">
                        <Vimeo className="footer__social-icon" />
                    </a>
                </div>
            </div>
        </div>
    )
}
