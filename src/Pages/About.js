import React, { Component, createRef } from 'react';
import imageUrlBuilder from '@sanity/image-url'
import { client } from '../client'

// Sections
import Intro from './About/Intro';
// import Team from './About/Team';
// import Work from './About/Work';
import Contact from './About/Contact';

function urlFor (source) {
    return imageUrlBuilder(client).image(source)
}

class About extends Component {
    state = {
        myRefTeam: createRef(),
        myRefWork: createRef(),
        myRefContact: createRef(),
    }

    componentDidMount() {
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

        client.fetch('*[_type == "about" && slug.current == "v1"][0]').then(pageProps => {
            this.setState({
                ...this.state,
                ...pageProps
            })
        })
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

                    introBannerTitle={this.state.introBannerTitle}
                    introBannerImage={urlFor(this.state.introBannerImage)}
                    introSubheading={this.state.introSubheading}
                    introParagrah1={this.state.introParagrah1}
                    introParagrah2={this.state.introParagrah2}
                    introVideoURL={this.state.introVideoURL}
                    introLocationHeading={this.state.introLocationHeading}
                    introLocationAddress1={this.state.introLocationAddress1}
                    introLocationAddress2={this.state.introLocationAddress2}
                    introHoursHeading={this.state.introHoursHeading}
                    introHoursDays={this.state.introHoursDays}
                    introHoursTime={this.state.introHoursTime}
                    // introDifferentHeading={this.state.introDifferentHeading}
                    // introDifference1={this.state.introDifference1}
                    // introDifference2={this.state.introDifference2}
                    // introDifference3={this.state.introDifference3}
                    // introDifference4={this.state.introDifference4}
                    // introDifference5={this.state.introDifference5}
                    // introDifference6={this.state.introDifference6}
                    // introDifference7={this.state.introDifference7}
                    // introPerfectHeading={this.state.introPerfectHeading}
                    // introPerfectFor1={this.state.introPerfectFor1}
                    // introPerfectFor2={this.state.introPerfectFor2}
                    // introPerfectFor3={this.state.introPerfectFor3}
                    // introPerfectFor4={this.state.introPerfectFor4}
                    // introPerfectFor5={this.state.introPerfectFor5}
                    // introPerfectFor6={this.state.introPerfectFor6}
                    // introPerfectFor7={this.state.introPerfectFor7}
                    // introPerfectFor8={this.state.introPerfectFor8}
                    // introPerfectFor9={this.state.introPerfectFor9}
                />
                {/* <div style={{position: 'relative', top: '-75px'}} ref={this.state.myRefTeam} />
                <Team
                    teamBannerTitle={this.state.teamBannerTitle}
                    teamBannerImage={urlFor(this.state.teamBannerImage)}
                    teamMember1Name={this.state.teamMember1Name}
                    teamMember1Image={urlFor(this.state.teamMember1Image)}
                    teamMember1Title={this.state.teamMember1Title}
                    teamMember1Paragraph1={this.state.teamMember1Paragraph1}
                    teamMember1Paragraph2={this.state.teamMember1Paragraph2}
                    teamMember2Name={this.state.teamMember2Name}
                    teamMember2Image={urlFor(this.state.teamMember2Image)}
                    teamMember2Title={this.state.teamMember2Title}
                    teamMember2Paragraph1={this.state.teamMember2Paragraph1}
                    teamMember2Paragraph2={this.state.teamMember2Paragraph2}
                    teamMember3Name={this.state.teamMember3Name}
                    teamMember3Image={urlFor(this.state.teamMember3Image)}
                    teamMember3Title={this.state.teamMember3Title}
                    teamMember3Paragraph1={this.state.teamMember3Paragraph1}
                    teamMember3Paragraph2={this.state.teamMember3Paragraph2}
                    teamMember4Name={this.state.teamMember4Name}
                    teamMember4Image={urlFor(this.state.teamMember4Image)}
                    teamMember4Title={this.state.teamMember4Title}
                    teamMember4Paragraph1={this.state.teamMember4Paragraph1}
                    teamMember4Paragraph2={this.state.teamMember4Paragraph2}
                    teamMember5Name={this.state.teamMember5Name}
                    teamMember5Image={urlFor(this.state.teamMember5Image)}
                    teamMember5Title={this.state.teamMember5Title}
                    teamMember5Paragraph1={this.state.teamMember5Paragraph1}
                    teamMember5Paragraph2={this.state.teamMember5Paragraph2}
                    teamMember6Name={this.state.teamMember6Name}
                    teamMember6Image={urlFor(this.state.teamMember6Image)}
                    teamMember6Title={this.state.teamMember6Title}
                    teamMember6Paragraph1={this.state.teamMember6Paragraph1}
                    teamMember6Paragraph2={this.state.teamMember6Paragraph2}
                /> */}
                {/* <div style={{position: 'relative', top: '-75px'}} ref={this.state.myRefWork} />
                <Work
                    workBannerTitle={this.state.workBannerTitle}
                    workBannerImage={urlFor(this.state.workBannerImage)}
                    workDescription={this.state.workDescription}
                    workVideo1URL={this.state.workVideo1URL}
                    workVideo1Description={this.state.workVideo1Description}
                    workVideo2URL={this.state.workVideo2URL}
                    workVideo2Description={this.state.workVideo2Description}
                    workVideo3URL={this.state.workVideo3URL}
                    workVideo3Description={this.state.workVideo3Description}
                /> */}
                <div style={{position: 'relative', top: '-75px'}} ref={this.state.myRefContact} />
                <Contact
                    contactBannerTitle={this.state.contactBannerTitle}
                    contactBannerImage={urlFor(this.state.contactBannerImage)}
                />
            </React.Fragment>
        )
    }
}

export default About;