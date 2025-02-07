import React from 'react';
import { NavLink } from 'react-router-dom';
import StudioRendering from '../../assets/about/intro/studiome_rendering_2.png'

// Components
import Banner from '../../components/Banner'
import Button from '../../components/Button'
import { Box2 } from '../../components/Boxes'
import { Col2, Col2Right, Col2Left } from '../../components/Containers'

export default function Intro({
    onQuickButtonFix,

    introBannerTitle,
    introBannerImage,
    introSubheading,
    introParagrah1,
    introParagrah2,
    introVideoURL,
    introLocationHeading,
    introLocationAddress1,
    introLocationAddress2,
    introHoursHeading,
    introHoursDays,
    introHoursTime,
    // introDifferentHeading,
    // introDifference1,
    // introDifference2,
    // introDifference3,
    // introDifference4,
    // introDifference5,
    // introDifference6,
    // introDifference7,
    // introPerfectHeading,
    // introPerfectFor1,
    // introPerfectFor2,
    // introPerfectFor3,
    // introPerfectFor4,
    // introPerfectFor5,
    // introPerfectFor6,
    // introPerfectFor7,
    // introPerfectFor8,
    // introPerfectFor9,
}) {
    return (
        <>
            <Banner color="green" text={introBannerTitle} image={introBannerImage}/>

            <div className="container-new">
                <h2 id="about__1-heading-1" className="h2">
                    {introSubheading}
                </h2>
                <p id="about__1-paragraph-1" className="p-xl">
                    {introParagrah1}
                </p>
                <p id="about__1-paragraph-1" className="p-xl">
                    {introParagrah2}
                </p>
                <div className="flex" id="about__1-button-container">
                    <NavLink
                        onClick={onQuickButtonFix.bind(this, 'rentals')}
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
                        src={introVideoURL}
                        frameBorder="0" 
                        webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen>
                    </iframe>
                </div>
                <Col2 style={{width: '60%', margin: '0 auto'}}>
                    <Box2 marginTop={75}>
                        <Col2Left align={'center'} justify={'cetner'}>
                            <h3 className="h3" style={{marginBottom: '2rem'}}>
                                {introLocationHeading}
                            </h3>
                            <p className="p-l" style={{marginBottom: '.5rem'}}>
                                {introLocationAddress1}
                            </p>
                            <p className="p-l">
                                {introLocationAddress2}
                            </p>
                        </Col2Left>
                    </Box2>
                    <Box2 marginTop={75}>
                        <Col2Right align={'center'} justify={'cetner'}>
                            <h3 className="h3" style={{marginBottom: '2rem'}}>
                                {introHoursHeading}
                            </h3>
                            <p className="p-l" style={{marginBottom: '.5rem'}}>
                                {introHoursDays}
                            </p>
                            <p className="p-l">
                                {introHoursTime}
                            </p>
                        </Col2Right>
                    </Box2>
                </Col2>
                <div className="flex">
                    <img src={StudioRendering} alt="Studio Rendering" id="about__1-rendering" />
                </div>
                {/* <div className="flex">
                    <a
                        style={{margin: '0 auto'}}
                        target="_blank"
                        href="https://studiome.me/virtual-tour/"
                        rel="noopener noreferrer"
                    >
                        <Button size="l" text="Virtual Tour" />
                    </a>
                </div> */}
            </div>

            {/* <div id="about__1-perks-container" className="container-new">
                <h2 id="about__1-perks-heading" className="uppercase center h2 teal">
                    {introDifferentHeading}
                </h2>
                <ul id="about__1-list" className="list p-l">
                    <li><span style={{color: '#8DCDC1'}}>✓</span> {introDifference1}</li>
                    <li><span style={{color: '#8DCDC1'}}>✓</span> {introDifference2}</li>
                    <li><span style={{color: '#8DCDC1'}}>✓</span> {introDifference3}</li>
                    <li><span style={{color: '#8DCDC1'}}>✓</span> {introDifference4}</li>
                    <li><span style={{color: '#8DCDC1'}}>✓</span> {introDifference5}</li>
                    <li><span style={{color: '#8DCDC1'}}>✓</span> {introDifference6}</li>
                    <li><span style={{color: '#8DCDC1'}}>✓</span> {introDifference7}</li>
                </ul>
                <h2 id="about__1-perks-heading" className="uppercase center h2 orange">
                    {introPerfectHeading}
                </h2>
                <ul id="about__1-list" className="list p-l">
                    <li><span style={{color: '#B6CE61'}}>•</span>  {introPerfectFor1}</li>
                    <li><span style={{color: '#B6CE61'}}>•</span>  {introPerfectFor2}</li>
                    <li><span style={{color: '#B6CE61'}}>•</span>  {introPerfectFor3}</li>
                    <li><span style={{color: '#B6CE61'}}>•</span>  {introPerfectFor4}</li>
                    <li><span style={{color: '#B6CE61'}}>•</span>  {introPerfectFor5}</li>
                    <li><span style={{color: '#B6CE61'}}>•</span>  {introPerfectFor6}</li>
                    <li><span style={{color: '#B6CE61'}}>•</span>  {introPerfectFor7}</li>
                    <li><span style={{color: '#B6CE61'}}>•</span>  {introPerfectFor8}</li>
                    <li><span style={{color: '#B6CE61'}}>•</span>  {introPerfectFor9}</li>
                </ul> 
            </div> */}
        </>
    )
}
