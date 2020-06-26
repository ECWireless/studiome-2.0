import React from 'react';

import { ReactComponent as Icon1 } from '../../assets/home/what-we-do/connection.svg';
import { ReactComponent as Icon2 } from '../../assets/home/what-we-do/display.svg';
import { ReactComponent as Icon3 } from '../../assets/home/what-we-do/video-camera.svg';
import { ReactComponent as Icon4 } from '../../assets/home/what-we-do/volume-mute2.svg';
import { ReactComponent as Icon5 } from '../../assets/home/what-we-do/mug.svg';
import { ReactComponent as Icon6 } from '../../assets/home/what-we-do/man-woman.svg';
import { ReactComponent as Icon7 } from '../../assets/home/what-we-do/printer.svg';
import { ReactComponent as Icon8 } from '../../assets/home/what-we-do/video.svg';

export default function WhatWeDo() {
    return (
        <div id="what-we-do" className="container">
            <div id="what-we-do__banner" />
            <div id="what-we-do__banner-container">
                <h1 id="what-we-do__banner-heading" className="h1 white">What we do</h1>
                <div id="what-we-do__banner-border" className="line-m line-m--orange" />
            </div>

            <p id="what-we-do__explanation" className="p-xl l">From first-timers to professionals, StudioME provides media creators access to user-friendly studio spaces, equipment rentals, editing workstations, and custom production services. The StudioME model was created with the challenge to deliver high quality content using brand new approaches to an outdated, over-priced model. Keeping our promise of "Media Made Easy," we make it as simple as possible to go from concept to creation.</p>

            <div id="what-we-do__border" />
            <h3 id="what-we-do__offer" className="h3 l">What we offer.</h3>

            <div className="what-we-do__container what-we-do__container--1">
                <Icon1 className="what-we-do__icon--1" />
                <p id="what-we-do__text" className="p-s">Livestream Broadcast</p>
            </div>
            <div className="what-we-do__container what-we-do__container--2">
                <Icon2 className="what-we-do__icon--1" />
                <p id="what-we-do__text" className="p-s">Retina Display Workstations</p>
            </div>
            <div className="what-we-do__container what-we-do__container--3">
                <Icon3 className="what-we-do__icon--1" />
                <p id="what-we-do__text" className="p-s">Rentable Camera Gear</p>
            </div>
            <div className="what-we-do__container what-we-do__container--4">
                <Icon4 className="what-we-do__icon--1" />
                <p id="what-we-do__text" className="p-s">Quiet Studio Space</p>
            </div>

            <div className="what-we-do__container what-we-do__container--5">
                <Icon5 className="what-we-do__icon--2" />
                <p id="what-we-do__text" className="p-s">Coffee, Tea, & Water Stations</p>
            </div>
            <div className="what-we-do__container what-we-do__container--6">
                <Icon6 className="what-we-do__icon--2" />
                <p id="what-we-do__text" className="p-s">Dressing Rooms</p>
            </div>
            <div className="what-we-do__container what-we-do__container--7">
                <Icon7 className="what-we-do__icon--2" />
                <p id="what-we-do__text" className="p-s">Printing & Photocopying</p>
            </div>
            <div className="what-we-do__container what-we-do__container--8">
                <Icon8 className="what-we-do__icon--2" />
                <p id="what-we-do__text" className="p-s">Professional Media Assistance</p>
            </div>
        </div>
    )
}
