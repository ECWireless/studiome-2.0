import React from 'react';
import { NavLink } from 'react-router-dom';

// Large Sidebar SVGs
import { ReactComponent as CloseIcon} from '../assets/navigation/SVGs/largeSidebar/cross.svg';

import { ReactComponent as RentalIcon } from '../assets/navigation/SVGs/largeSidebar/camera.svg';
import { ReactComponent as ServiceIcon } from '../assets/navigation/SVGs/largeSidebar/video-camera.svg';
import { ReactComponent as MembershipsIcon } from '../assets/navigation/SVGs/largeSidebar/profile.svg';
import { ReactComponent as CheckoutIcon } from '../assets/navigation/SVGs/largeSidebar/cart.svg';

import { ReactComponent as GeneralIcon } from '../assets/navigation/SVGs/largeSidebar/info.svg';
import { ReactComponent as TeamIcon } from '../assets/navigation/SVGs/largeSidebar/users.svg';
import { ReactComponent as WorkIcon } from '../assets/navigation/SVGs/largeSidebar/film.svg';

// import { ReactComponent as LearnIcon } from '../assets/navigation/SVGs/largeSidebar/bookmark.svg';
// import { ReactComponent as ImagesIcon } from '../assets/navigation/SVGs/largeSidebar/images.svg';
// import { ReactComponent as EventsIcon } from '../assets/navigation/SVGs/largeSidebar/calendar.svg';
// import { ReactComponent as SwagIcon } from '../assets/navigation/SVGs/largeSidebar/swag.svg';

export default function LargeSidebar(props) {
    return (
        <div className={props.largeSidebarClass}>
            <div className="large-sidebar__top">
                <h1 className="large-sidebar__top-heading">StudioME</h1>
                <CloseIcon className='large-sidebar__close-icon'
                    onClick={props.toggleLargeSidebar}
                />
            </div>
            <div className="large-sidebar__container">
                {/*Book*/}
                <NavLink
                    onClick={props.onLargeSidebarSelection.bind(this, 'rentals')}
                    activeClassName="large-sidebar-active"
                    className="large-sidebar__header"
                    to="/" exact style={{textDecoration: 'none'}}
                >
                    <p>Book</p>
                </NavLink>
                <NavLink
                    onClick={props.onLargeSidebarSelection.bind(this, 'rentals')}
                    activeClassName="large-sidebar-section-active"
                    className="large-sidebar__section"
                    to="/#rentals" exact style={{textDecoration: 'none'}}
                >
                    <RentalIcon className='large-sidebar__button-icon' />
                    <p>Rental & DIY</p>
                </NavLink>
                <NavLink
                    onClick={props.onLargeSidebarSelection.bind(this, 'services')}
                    activeClassName="large-sidebar-section-active"
                    className="large-sidebar__section"
                    to="/#full-service" exact style={{textDecoration: 'none'}}
                >
                    <ServiceIcon className='large-sidebar__button-icon' />
                    <p>Full Service</p>
                </NavLink>
                <NavLink
                    onClick={props.onLargeSidebarSelection.bind(this, 'memberships')}
                    activeClassName="large-sidebar-section-active"
                    className="large-sidebar__section"
                    to="/#memberships" exact style={{textDecoration: 'none'}}
                >
                    <MembershipsIcon className='large-sidebar__button-icon' />
                    <p>Memberships</p>
                </NavLink>
                <a 
                    className="large-sidebar__section"
                    href="https://studiome.me/cart/"
                    style={{textDecoration: 'none'}}
                >
                    <CheckoutIcon className='large-sidebar__button-icon' />
                    <p>Checkout</p>
                </a>

                {/*About*/}
                <NavLink
                    onClick={props.onLargeSidebarSelection.bind(this, 'general')} 
                    activeClassName="large-sidebar-active"
                    className="large-sidebar__header"
                    to="/about" exact style={{textDecoration: 'none'}}
                >
                    <p>About</p>
                </NavLink>
                <NavLink
                    onClick={props.onLargeSidebarSelection.bind(this, 'general')} 
                    activeClassName="large-sidebar-section-active"
                    className="large-sidebar__section"
                    to="/about/#general" exact style={{textDecoration: 'none'}}
                >
                    <GeneralIcon className='large-sidebar__button-icon' />
                    <p>General</p>
                </NavLink>
                <NavLink
                    onClick={props.onLargeSidebarSelection.bind(this, 'team')}
                    activeClassName="large-sidebar-section-active"
                    className="large-sidebar__section"
                    to="/about/#team" exact style={{textDecoration: 'none'}}
                >
                    <TeamIcon className='large-sidebar__button-icon' />
                    <p>Team</p>
                </NavLink>
                <NavLink
                    onClick={props.onLargeSidebarSelection.bind(this, 'work')}
                    activeClassName="large-sidebar-section-active"
                    className="large-sidebar__section"
                    to="/about/#work" exact style={{textDecoration: 'none'}}
                >
                    <WorkIcon className='large-sidebar__button-icon' />
                    <p>Our Work</p>
                </NavLink>

                {/*The Community*/}
                {/* <NavLink
                    onClick={props.onLargeSidebarSelection.bind(this, '')}
                    activeClassName="large-sidebar-active"
                    className="large-sidebar__header"
                    to="/community" exact style={{textDecoration: 'none'}}
                >
                    <p>The Community</p>
                </NavLink>
                <NavLink
                    onClick={props.onLargeSidebarSelection.bind(this, '')}
                    activeClassName="large-sidebar-section-active"
                    className="large-sidebar__section"
                    to="/community/events" exact style={{textDecoration: 'none'}}
                >
                    <EventsIcon className='large-sidebar__button-icon' />
                    <p>Event Hosting</p>
                </NavLink>
                <NavLink
                    onClick={props.onLargeSidebarSelection.bind(this, '')}
                    activeClassName="large-sidebar-section-active"
                    className="large-sidebar__section"
                    to="/community/gallery" exact style={{textDecoration: 'none'}}
                >
                    <ImagesIcon className='large-sidebar__button-icon' />
                    <p>Gallery</p>
                </NavLink>
                <NavLink
                    onClick={props.onLargeSidebarSelection.bind(this, '')}
                    activeClassName="large-sidebar-section-active"
                    className="large-sidebar__section"
                    to="/community/learn" exact style={{textDecoration: 'none'}}
                >
                    <LearnIcon className='large-sidebar__button-icon' />
                    <p>Learn</p>
                </NavLink>
                <NavLink
                    onClick={props.onLargeSidebarSelection.bind(this, '')}
                    activeClassName="large-sidebar-section-active"
                    className="large-sidebar__section"
                    to="/community/swag" exact style={{textDecoration: 'none'}}
                >
                    <SwagIcon className='large-sidebar__button-icon' />
                    <p>Swag</p>
                </NavLink> */}

                {/*Contact*/}
                <NavLink
                    onClick={props.onLargeSidebarSelection.bind(this, 'contact')}
                    activeClassName="large-sidebar-active"
                    className="large-sidebar__header"
                    to="/about/#contact" exact style={{textDecoration: 'none'}}
                >
                    <p>Contact</p>
                </NavLink>
            </div>
        </div>
    )
}