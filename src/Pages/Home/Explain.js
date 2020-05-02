import React from 'react';

import { ReactComponent as Icon1 } from '../../assets/home/mission/connection.svg';
import { ReactComponent as Icon2 } from '../../assets/home/mission/display.svg';
import { ReactComponent as Icon3 } from '../../assets/home/mission/video-camera.svg';
import { ReactComponent as Icon4 } from '../../assets/home/mission/volume-mute2.svg';
import { ReactComponent as Icon5 } from '../../assets/home/mission/mug.svg';
import { ReactComponent as Icon6 } from '../../assets/home/mission/man-woman.svg';
import { ReactComponent as Icon7 } from '../../assets/home/mission/printer.svg';
import { ReactComponent as Icon8 } from '../../assets/home/mission/video.svg';

export default function Mission() {
    return (
        <div className="home__explain">
            <div className="home__explain-banner" />
            <div className="home__explain-banner-container">
                <h1 className="home__explain-heading h1 white">What we do</h1>
                <div className="home__explain-border" />
            </div>

            <p className="home__explain-explanation p-xl l">From first-timers to professionals, StudioME offers user-friendly studio spaces, equipment rentals, editing workstations, and custom production services for all media creators. The StudioME model was created with the challenge to deliver high quality content using brand new approaches to an outdated, over-priced model. Keeping our promise of "Media Made Easy," we make it as simple as possible to go from concept to creation.</p>

            <div className="home__explain-perks-border" />
            <h3 className="home__explain-offer h3 l">What we offer.</h3>

            <div className="home__explain-container home__explain-container--1">
                <Icon1 className="home__explain-icon--1" />
                <p className="home__explain-text p-s">High Speed Internet</p>
            </div>
            <div className="home__explain-container home__explain-container--2">
                <div className="home__explain-item">
                    <Icon2 className="home__explain-icon--1" />
                    <p className="home__explain-text p-s">Retina Display Workstations</p>
                </div>
            </div>
            <div className="home__explain-container home__explain-container--3">
                <Icon3 className="home__explain-icon--1" />
                <p className="home__explain-text p-s">Rentable Camera Gear</p>
            </div>
            <div className="home__explain-container home__explain-container--4">
                <Icon4 className="home__explain-icon--1" />
                <p className="home__explain-text p-s">Quiet Studio Space</p>
            </div>

            <div className="home__explain-container home__explain-container--5">
                <Icon5 className="home__explain-icon--2" />
                <p className="home__explain-text p-s">Coffee, Tea, & Water Stations</p>
            </div>
            <div className="home__explain-container home__explain-container--6">
                <Icon6 className="home__explain-icon--2" />
                <p className="home__explain-text p-s">Dressing Rooms</p>
            </div>
            <div className="home__explain-container home__explain-container--7">
                <Icon7 className="home__explain-icon--2" />
                <p className="home__explain-text p-s">Printing & Photocopying</p>
            </div>
            <div className="home__explain-container home__explain-container--8">
                <Icon8 className="home__explain-icon--2" />
                <p className="home__explain-text p-s">Professional Media Assistance</p>
            </div>
        </div>
    )
}
