import React from 'react';
import { NavLink } from 'react-router-dom';
import StudioRendering from '../../assets/about/intro/studiome_rendering.png'

// Components
import Banner from '../../components/Banner'
import Button from '../../components/Button'

// Images
import BannerImage from '../../assets/about/intro/Banner-3.jpg'

export default function Intro(props) {
    return (
        <>
            <Banner color="green" text="About Us" image={BannerImage}/>

            <div className="container-new">
                <h2 id="about__1-heading-1" className="h2">How it all began:</h2>
                <p id="about__1-paragraph-1" className="p-xl">StudioME opened its doors in 2016 by co-founders, Keith Parish and Joe Leachko.  Noticing a changing media landscape, they took on the challenge of redesigning the traditional studio to better serve the modern media creator. This new type of media creator demands quality, fast and affordable media production, whether a professional producer, marketing guru, entrepreneur, educational leader or just someone who wants to share their story on social media. The StudioME Model offers more efficient solutions in a user-friendly space to help take content to the next level in quality.</p>
                <p id="about__1-paragraph-1" className="p-xl">Keith Parish has been involved in video production since the age of 13 and has produced videos in over 40 states and 5 countries. Joe Leachko comes from an experiential marketing and architectural design background.</p>
                <div className="flex" id="about__1-button-container">
                    <NavLink
                        onClick={props.onQuickButtonFix.bind(this, 'rentals')}
                        to="/" exact
                    >
                        
                        <Button size="l" text={'Rental Packages'} />
                    </NavLink>
                    <a
                        target="_blank"
                        href="https://forms.gle/ziysrwi8PtFhJbi57"
                        rel="noopener noreferrer"
                    >
                        <Button size="l" text={'Custom Quote'} />
                    </a>
                </div>
            </div>

            <div className="container-new">
                <div className="flex-column">
                    <iframe 
                        title="1"
                        id="about__1-video"
                        src='https://player.vimeo.com/video/197530141'
                        frameBorder="0" 
                        webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen>
                    </iframe>
                </div>
                <div className="col-2" style={{textAlign: 'center', marginTop: '4rem'}}>
                    <div className="col-2-1">
                        <h3 className="h3" style={{marginBottom: '2rem'}}>Located in East Liberty:</h3>
                        <p className="p-l" style={{marginBottom: '.5rem'}}>5819 Penn Avenue</p>
                        <p className="p-l">Pittsburgh, PA 15206</p>
                    </div>
                    <div className="col-2-2" id="about__1-hours-heading">
                        <h3 className="h3" style={{marginBottom: '2rem'}}>Operating Hours:</h3>
                        <p className="p-l" style={{marginBottom: '.5rem'}}>Monday - Saturday</p>
                        <p className="p-l">8am - 6pm</p>
                    </div>
                </div>
                <div className="flex">
                    <img src={StudioRendering} alt="Studio Rendering" id="about__1-rendering" />
                </div>
                <div className="flex">
                <a
                    style={{margin: '0 auto'}}
                    target="_blank"
                    href="https://studiome.me/virtual-tour/"
                    rel="noopener noreferrer"
                >
                    <Button size="l" text="Virtual Tour" />
                </a>
                </div>
            </div>

            <div id="about__1-perks-container" className="container-new">
                <h2 id="about__1-perks-heading" className="uppercase center h2 teal">How We're Different</h2>
                <ul id="about__1-list" className="list p-l">
                    <li><span style={{color: '#8DCDC1'}}>✓</span> Innovative, user-friendly space</li>
                    <li><span style={{color: '#8DCDC1'}}>✓</span> From custom to assisted DIY production solutions</li>
                    <li><span style={{color: '#8DCDC1'}}>✓</span> Customer-focused environment</li>
                    <li><span style={{color: '#8DCDC1'}}>✓</span> Professional support staff</li>
                    <li><span style={{color: '#8DCDC1'}}>✓</span> Ultra-efficient Self-guided Studio easily operated from an app</li>
                    <li><span style={{color: '#8DCDC1'}}>✓</span> Specialized studios, reducing waste and saving budget</li>
                    <li><span style={{color: '#8DCDC1'}}>✓</span> Access to media-related resources with free MEmbership</li>
                </ul>
                <h2 id="about__1-perks-heading" className="uppercase center h2 orange">Perfect For</h2>
                <ul id="about__1-list" className="list p-l">
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
            </div>
        </>
    )
}
