import React from 'react';
import { NavLink } from 'react-router-dom';

import { ReactComponent as Book } from '../assets/navigation/SVGs/shop.svg';
import { ReactComponent as About } from '../assets/navigation/SVGs/info-with-circle.svg';
// import { ReactComponent as Community } from '../assets/navigation/SVGs/happy.svg';
import { ReactComponent as Contact } from '../assets/navigation/SVGs/phone.svg';

export default function Sidebar(props) {
    return (
        <div className="small-sidebar">
            <NavLink
                onClick={props.onScrollHome}
                activeClassName="small-sidebar-active"
                className="small-sidebar__button"
                to="/" exact style={{textDecoration: 'none'}}
            >
                <Book className='small-sidebar__button-icon' />
                <p>Book</p>
            </NavLink>


            <NavLink
                onClick={props.onSmallSidebarSelection.bind(this, 'general')} 
                activeClassName="small-sidebar-active"
                className="small-sidebar__button"
                to="/about" exact style={{textDecoration: 'none'}}
            >
                <About className='small-sidebar__button-icon' />
                <p>About</p>
            </NavLink>

            {/* <NavLink
                activeClassName="small-sidebar-active"
                className="small-sidebar__button"
                to="/community" exact style={{textDecoration: 'none'}}
            >
                <Community className='small-sidebar__button-icon' />
                <p>Community</p>
            </NavLink> */}

            <NavLink
                onClick={props.onSmallSidebarSelection.bind(this, 'contact')}
                activeClassName="small-sidebar-active"
                className="small-sidebar__button"
                to="/about/#contact" exact style={{textDecoration: 'none'}}
            >
                <Contact className='small-sidebar__button-icon' />
                <p>Contact</p>
            </NavLink>
        </div>
    )
}
