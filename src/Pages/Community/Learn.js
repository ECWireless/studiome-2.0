import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

// Components
import Button from '../../components/Button';
import GIF from '../../assets/community/routine-maintenance.gif';

export default class Learn extends Component {

    componentDidMount() {
        window.scroll({
            top: 0,
        });
    }

    render() {
        return (
            <div className="temp-community">
                <NavLink className="temp-community__back-button" exact to="/community">
                    <Button arrow text={"Back"} size={"m"} />
                </NavLink>

                <h1 className="temp-community__temp-heading">Gallery coming soon!</h1>
                <img className="temp-community__gif" src={GIF} alt="test"/>
            </div>
        )
    }
}
