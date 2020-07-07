import React from 'react';
import { NavLink } from 'react-router-dom';

// Photos
import Studio1 from '../../assets/home/services/studios/Audio-Room-small.jpg';
import Studio2 from '../../assets/home/services/studios/podcast-small.jpg';
import Studio3 from '../../assets/home/services/studios/MP-Studio-Main.jpg';
import Studio4 from '../../assets/home/services/studios/Studio-E-small.jpg';

import Equipment1 from '../../assets/home/services/equipment/Equipment-1.jpg';
import Equipment2 from '../../assets/home/services/equipment/Equipment-2.jpg';
import Equipment3 from '../../assets/home/services/equipment/Equipment-3.jpg';
import Equipment4 from '../../assets/home/services/equipment/Equipment-4.jpg';

import Workstation1 from '../../assets/home/services/workstation/workstation-1-small.jpg';
import Workstation2 from '../../assets/home/services/workstation/workstation-2-small.jpg';
import Workstation3 from '../../assets/home/services/workstation/workstation-3-small.jpg';
import Workstation4 from '../../assets/home/services/workstation/workstation-4-small.jpg';

export default function Services(props) {
    return (
        <>
            <div id="services__banner-container" className="flex-column">
                <h1 id="services__banner-heading" className="h1 white">Our Services</h1>
                <div id="services__banner-border" className="line-m line-m--orange" />
            </div>
            
            <div id="services" className="container-new">
                

                {/* <h3 className="home__services-heading-1 h3 l">Studio Space</h3>
                <p className="home__services-paragraph-1 p-l">Our studio spaces make it as easy as possible to produce video, photo, and audio content. They are designed for headshots, social media videos, kickstarter videos, podcasts, and more.</p>
                <div className="home__services-container-1">
                    <div className="home__services-photo-1 home__services-photo-1--1" style={{backgroundImage: `url(${Studio1})`}} />
                    <div className="home__services-photo-1 home__services-photo-1--2" style={{backgroundImage: `url(${Studio2})`}} />
                    <div className="home__services-photo-1 home__services-photo-1--3" style={{backgroundImage: `url(${Studio3})`}} />
                    <div className="home__services-photo-1 home__services-photo-1--4" style={{backgroundImage: `url(${Studio4})`}} />
                </div>
                
                <h3 className="home__services-heading-2 h3 l">Equipment Rentals</h3>
                <p className="home__services-paragraph-2 p-l">We offer camera bodies, lenses, and other gear for all of your photography and videography needs.</p>
                <div className="home__services-container-2">
                    <div className="home__services-photo-2 home__services-photo-2--1" style={{backgroundImage: `url(${Equipment1})`}} />
                    <div className="home__services-photo-2 home__services-photo-2--2" style={{backgroundImage: `url(${Equipment2})`}} />
                    <div className="home__services-photo-2 home__services-photo-2--3" style={{backgroundImage: `url(${Equipment3})`}} />
                    <div className="home__services-photo-2 home__services-photo-2--4" style={{backgroundImage: `url(${Equipment4})`}} />
                </div>
                <h3 className="home__services-heading-3 h3 l">Editing Workstations</h3>
                <p className="home__services-paragraph-3 p-l">Workstations are available for post-production and video FX. The stations include a powerful 27″ iMac, packed with the entire Adobe Cloud, Final Cut X, and iMovie. Stations also include free access to our professional music and sound effects libraries.</p>
                <div className="home__services-container-3">
                    <div className="home__services-photo-3 home__services-photo-3--1" style={{backgroundImage: `url(${Workstation4})`}} />
                    <div className="home__services-photo-3 home__services-photo-3--2" style={{backgroundImage: `url(${Workstation1})`}} />
                    <div className="home__services-photo-3 home__services-photo-3--3" style={{backgroundImage: `url(${Workstation2})`}} />
                    <div className="home__services-photo-3 home__services-photo-3--4" style={{backgroundImage: `url(${Workstation3})`}} />
                </div>
                <NavLink
                    className="home__services-book-link"
                    onClick={props.onQuickButtonFix.bind(this, 'rentals')}
                    to="/" exact
                >
                    <button
                        className="home__services-book"
                        
                        >Book now!
                    </button>
                </NavLink> */}
            </div>
        </>
    )
}
