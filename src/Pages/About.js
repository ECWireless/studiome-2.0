import React, { Component, createRef } from 'react';
import { graphql } from 'react-apollo';

// Sections
import Intro from './About/Intro';
import Team from './About/Team';
import Work from './About/Work';
import Contact from './About/Contact';

// Queries
import { addImpression } from '../analytics/queries';

class About extends Component {
    state = {
        myRefTeam: createRef(),
        myRefWork: createRef(),
        myRefContact: createRef(),
    }

    componentDidMount() {
        this.props.addImpression({
            variables: {
                date: new Date().toISOString().slice(0, 10),
                productId: "5e31fec36b3dcd0004ae9369"
            }
        })


        let location = window.location.href;
		location = location.split('#')

        if (location[1] === 'general') {
            window.scroll({
                top: 0,
                behavior: 'smooth',
            })
        } else if (location[1] === 'team') {
            this.onTeamHandler();
        } else if (location[1] === 'work') {
            this.onWorkHandler();
        } else if (location[1] === 'contact') {
            this.onContactHandler();
        } else {
            window.scroll({
                top: 0
            });
        }
    }

    componentDidUpdate() {
        let location = window.location.href;
        location = location.split('#')
        
        if (location[1] === 'general') {
            window.scroll({
                top: 0,
                behavior: 'smooth',
            })
        } else if (location[1] === 'team') {
            this.onTeamHandler();
        } else if (location[1] === 'work') {
            this.onWorkHandler();
        } else if (location[1] === 'contact') {
            this.onContactHandler();
        } else {
            return;
        }
    }

    onTeamHandler = () => {
        window.scroll({
            top: this.state.myRefTeam.current.offsetTop,
            behavior: 'smooth'
        });
    }

    onWorkHandler = () => {
        window.scroll({
            top: this.state.myRefWork.current.offsetTop,
            behavior: 'smooth'
        });
    }

    onContactHandler = () => {
        window.scroll({
            top: this.state.myRefContact.current.offsetTop
        });
    }

    render() {
        return (
            <React.Fragment>
                <Intro
                    onQuickButtonFix={this.props.onQuickButtonFix}
                    onLargeSidebarSelection={this.props.onLargeSidebarSelection}
                />
                <div style={{position: 'relative', top: '-75px'}} ref={this.state.myRefTeam} />
                <Team />
                <div style={{position: 'relative', top: '-75px'}} ref={this.state.myRefWork} />
                <Work />
                <div style={{position: 'relative', top: '-75px'}} ref={this.state.myRefContact} />
                <Contact />
            </React.Fragment>
        )
    }
}

export default graphql(addImpression, {name: "addImpression"})(About);