import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="about__intro-container">
                    <div className="about__intro-banner" />
                    <div className="about__intro-banner-container">
                        <h1 className="about__intro-heading">About Us</h1>
                        <div className="about__intro-border" />
                    </div>
                </div>

                <div className="about__intro-story-container">
                    <p className="about__intro-opener">StudioME is a user-friendly space for media production. We've ditched the old model of high-cost, low-efficiency production. With our streamlined approach, we've achieved millions of views for our clients ranging from solopreneurs to international corporations. Our one-of-a-kind space offers start-to-finish full-service production or rental and DIY options with access to our specialized studio spaces, gear and editing workstations. For our clients who need to create scalable media content on a regular basis, we offer unique monthly memberships.</p>
                    <h2 className="about__intro-heading-1">How it all began:</h2>
                    <p className="about__intro-story-1">StudioME opened it's doors in late 2016 by co-founders, Keith Parish and Joe Leachko. Noticing the changing media landscape, they created StudioME to be a more efficient resource for media production. They took the traditional studio model and redesigned it to offer more user-friendly, DIY services for new content creators as well as more efficient, cost-effective solutions for media professionals.</p>
                    <p className="about__intro-story-2">Keith Parish has been involved in video production since the age of 13 and has produced videos in over 40 states and 5 countries. Joe Leachko comes from an experiential marketing and architectural design background.</p>
                    <button className="about__intro-button-rentals">Rental Packages</button>
                    <button className="about__intro-button-quote">Custom Quote</button>
                </div>

                <div className="about__intro-store-container">
                    <iframe 
						title="1"
						className="about__intro-store-video"
						src='https://player.vimeo.com/video/197530141'
						width="887" 
						height="506" 
						frameBorder="0" 
						webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen>
					</iframe>
                    <h3 className="about__intro-store-heading-1">Located in East Liberty:</h3>
                    <p className="about__intro-store-paragraph-1">5819 Penn Avenue</p>
                    <p className="about__intro-store-paragraph-2">Pittsburgh, PA 15206</p>
                    <h3 className="about__intro-store-heading-2">Operating Hours:</h3>
                    <p className="about__intro-store-paragraph-3">Monday - Saturday</p>
                    <p className="about__intro-store-paragraph-4">8am - 6pm</p>
                    <button className="about__intro-store-button">Virtual Tour</button>
                </div>

                <div className="about__intro-perks-container">
                    <h2 className="about__intro-perks-heading-1">How We're Different</h2>
                    <ul className="about__intro-perks-list-1">
						<li><span style={{color: '#8DCDC1'}}>✓</span> Innovative, user-friendly space</li>
						<li><span style={{color: '#8DCDC1'}}>✓</span> From custom to assisted DIY production solutions</li>
						<li><span style={{color: '#8DCDC1'}}>✓</span> Customer-focused environment</li>
						<li><span style={{color: '#8DCDC1'}}>✓</span> Professional support staff</li>
						<li><span style={{color: '#8DCDC1'}}>✓</span> Ultra-efficient Self-guided Studio easily operated from an app</li>
						<li><span style={{color: '#8DCDC1'}}>✓</span> Specialized studios, reducing waste and saving budget</li>
						<li><span style={{color: '#8DCDC1'}}>✓</span> Access to media-related resources with free MEmbership</li>
					</ul>
                    <h2 className="about__intro-perks-heading-2">Perfect For</h2>
                    <ul className="about__intro-perks-list-2">
						<li><span style={{color: '#B6CE61'}}>•</span>  Content Creators</li>
						<li><span style={{color: '#B6CE61'}}>•</span>  Podcasters</li>
						<li><span style={{color: '#B6CE61'}}>•</span>  Educators / Training</li>
						<li><span style={{color: '#B6CE61'}}>•</span>  Entrepreneurs / Solopreneurs</li>
						<li><span style={{color: '#B6CE61'}}>•</span>  Kickstarters</li>
						<li><span style={{color: '#B6CE61'}}>•</span>  Social Media</li>
						<li><span style={{color: '#B6CE61'}}>•</span>  Vloggers / Youtubers</li>
						<li><span style={{color: '#B6CE61'}}>•</span>  Artist / Musicians</li>
						<li><span style={{color: '#B6CE61'}}>•</span>  Actors / Voice Talent</li>
					</ul>
                    <h2 className="about__intro-perks-heading-3">How Rental Packages Work</h2>
                    <div className="about__intro-perks-list-3">
                        <p>
                            <span style={{color: '#EA6E44'}}>1 –</span> Book studio time, workstations and equipment using the BOOK ME tab or Contact Us to schedule
                        </p>
                        <br />
                        <p>
                            <span style={{color: '#EA6E44'}}>2 –</span> Once you book, we will follow up with you to provide additional information about your booking
                        </p>
                        <br />
                        <p>
                            <span style={{color: '#EA6E44'}}>3 –</span> Our friendly studio manager will have everything prepped and ready for you. First-time users receive a brief 10 minute tour
                        </p>
                        <br />
                    </div>
                    <iframe 
						title="1"
						className="about__intro-perks-video"
						src="https://player.vimeo.com/video/224770179"
						width="887" 
						height="506" 
						frameBorder="0" 
						webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen>
					</iframe>
                    <button className="about__intro-perks-button">Ready to Book?</button>
                </div>
        </React.Fragment>
        )
    }
}
