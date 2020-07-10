import React from 'react'

// Banner
import Banner from '../../components/Banner';
import BannerImage from '../../assets/about/team/Team-Banner-small.jpg';

export default function Team() {
    return (
        <>
            <Banner color="green" text="Team" textColor="grey" image={BannerImage}/>
            <div className="container-new" style={{margin: '0 auto'}}>

                {/* Row 1 */}
                <div className="col-2" id="about__2-row-container">
                    <div className="col-2-1" id="about__2-left-container">
                        <div className="about__team-card-container about__team-card-container--1">
                            <div className="about__team-card about__team-card--front">
                                <div className="about__team-card-picture about__team-card-picture--1">
                                    &nbsp;
                                </div>
                                <h3 className="about__team-card-name h3 white d">
                                    <span className="about__team-card-name-span about__team-card-name-span--1">Keith Parish</span>
                                </h3>
                            </div>
                            <div className="about__team-card about__team-card--back about__team-card--back--1">
                                <h2 className="about__team-card-role h2 white">Co-Founder</h2>
                                <p className="about__team-card-info-1 p-m white">Keith’s passion for video has led him across the country and beyond, producing and directing projects ranging from television shows to documentaries.</p>
                                <p className="about__team-card-info-2 p-m white">Keith graduated from the University of Pittsburgh with a degree in marketing and film studies. His background in marketing and experience in television allows him to understand not only the technical and visual aspects of production, but also the business purpose and message behind each production.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-2-2" id="about__2-right-container">
                        <div className="about__team-card-container about__team-card-container--2">
                            <div className="about__team-card about__team-card--front">
                                <div className="about__team-card-picture about__team-card-picture--2">
                                    &nbsp;
                                </div>
                                <h3 className="about__team-card-name h3 white d">
                                    <span className="about__team-card-name-span about__team-card-name-span--2">Joe Leachko</span>
                                </h3>
                            </div>
                            <div className="about__team-card about__team-card--back about__team-card--back--2">
                                <h2 className="about__team-card-role h2 white">Co-Founder</h2>
                                <p className="about__team-card-info-1 p-m white">Joe has an extensive corporate creative portfolio of large scale branded environment solutions for various clients ranging from mid-size to Fortune 500.</p>
                                <p className="about__team-card-info-2 p-m white">He has led creative teams and managed large-budget projects. His creativity, leadership and management ability allows him to create effective messaging/content to help companies take their brand to the next level in employee and client engagement.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Row 2 */}
                <div className="col-2" id="about__2-row-container">
                    <div className="col-2-1" id="about__2-left-container">
                        <div className="about__team-card-container about__team-card-container--3">
                            <div className="about__team-card about__team-card--front">
                                <div className="about__team-card-picture about__team-card-picture--3">
                                    &nbsp;
                                </div>
                                <h3 className="about__team-card-name h3 white d">
                                    <span className="about__team-card-name-span about__team-card-name-span--3">Chelsea Ashley</span>
                                </h3>
                            </div>
                            <div className="about__team-card about__team-card--back about__team-card--back--3">
                                <h1 className="about__team-card-role h2 white">Studio Manager</h1>
                                <p className="about__team-card-info-1 p-m white">Chelsea attended Edinboro University of Pennsylvania where she graduated with a degree in applied media arts. She has experience shooting and editing various types of media, from narrative shorts to promotional videos. She enjoys helping individuals and businesses convey their message creatively through video and online media.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-2-2" id="about__2-right-container">
                        <div className="about__team-card-container about__team-card-container--4">
                            <div className="about__team-card about__team-card--front">
                                <div className="about__team-card-picture about__team-card-picture--4">
                                    &nbsp;
                                </div>
                                <h3 className="about__team-card-name h3 white d">
                                    <span className="about__team-card-name-span about__team-card-name-span--1">Jake Schick</span>
                                </h3>
                            </div>
                            <div className="about__team-card about__team-card--back about__team-card--back--1">
                                <h1 className="about__team-card-role h2 white">Studio Manager</h1>
                                <p className="about__team-card-info-1 p-m white">Jake Schick is an award-winning video producer, director and editor who loves to create digital media for business, education, and entertainment. Producing video content has always been something Jake has been intrigued by. Jake has long term plans to continue to grow his skills in media production.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Row 3 */}
                <div className="col-2" id="about__2-row-container-2">
                    <div className="col-2-1" id="about__2-left-container">
                        <div className="about__team-card-container about__team-card-container--5">
                            <div className="about__team-card about__team-card--front">
                                <div className="about__team-card-picture about__team-card-picture--5">
                                    &nbsp;
                                </div>
                                <h3 className="about__team-card-name h3 white d">
                                    <span className="about__team-card-name-span about__team-card-name-span--2">Alex Grant</span>
                                </h3>
                            </div>
                            <div className="about__team-card about__team-card--back about__team-card--back--2">
                                <h1 className="about__team-card-role h2 white">Director of Photography</h1>
                                <p className="about__team-card-info-1 p-m white">Alex graduated from Ohio University with a degree in communications, focusing his study in multimedia production. He previously produced digital media for Carnegie Mellon University’s National Robotics Engineering Center. With experience working in higher education, professional sports, and the entertainment industry, Alex can adapt his style to any project.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-2-2" id="about__2-right-container">
                        <div className="about__team-card-container about__team-card-container--6">
                            <div className="about__team-card about__team-card--front">
                                <div className="about__team-card-picture about__team-card-picture--6">
                                    &nbsp;
                                </div>
                                <h3 className="about__team-card-name h3 white d">
                                    <span className="about__team-card-name-span about__team-card-name-span--3">Mike Diguglielmo</span>
                                </h3>
                            </div>
                            <div className="about__team-card about__team-card--back about__team-card--back--3">
                                <h1 className="about__team-card-role h2 white">Project Manager</h1>
                                <p className="about__team-card-info-1 p-m white">Mike studied journalism at the University of Pittsburgh at Johnstown. As president of the WUPJ-TV campus television station, he helped to revitalize the once-defunct club into a relevant organization that produced a popular weekly news and entertainment program.</p>
                                <p className="about__team-card-info-2 p-m white">Mike attended Point Park University for graduate school, earning a master’s degree in Journalism and Mass Communication. He focused his studies on advertising and video production, working with several of Pittsburgh’s top agencies and studios.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
