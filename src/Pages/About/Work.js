import React from 'react';

// Components
import Banner from '../../components/Banner'
import Button from '../../components/Button'

// Images
import BannerImage from '../../assets/about/work/OurWork.jpg'

export default function Work() {
    return (
        <>
            <Banner color="green" text="Our Work" textColor="grey" image={BannerImage}/>
            <div className="container-new">
                <p id="about__3-paragraph-1" className="center p-xl">In the 3 years since opening the studio, our team has produced and edited over 1,000 videos. Our work spans from animations, to promos, to e-learning videos, to commercials. And our expertise lies in our ability to produce these varying projects quickly and easily.</p>
                <WorkExample
                    link='https://player.vimeo.com/video/250807267'
                    text='Get a tour of AlphaLab, and learn what makes it a nationally ranked software accelerator.'
                />
                <div className="about__3-work-border about__3-work-border--1" />
                <WorkExample
                    link='https://player.vimeo.com/video/225163302'
                    text='Go behind the scenes on a shoot for Carnegie Science Center at StudioME.'
                />
                <div className="about__3-work-border about__3-work-border--2" />
                <WorkExample
                    link='https://player.vimeo.com/video/228383734'
                    text='David Alan creates custom clothing to fit your creative expression. Here, he uses StudioME to film interview-style promos for his business.'
                />
                <div className="about__3-work-border about__3-work-border--3" />
                <div className="flex">
                    <a
                        id="about__3-work-button-link"
                        target="_blank"
                        href="https://vimeo.com/showcase/5174503"
                        rel="noopener noreferrer"
                    >
                        <Button text="More Examples" size="l" />
                    </a>
                </div>
            </div>
        </>
    )
}

const WorkExample = (props) => {
    return (
        <div className="col-2">
            <div className="col-2-1">
                <iframe
                    id="about__3-work-video"
                    src={props.link}
                    title="example-1" frameBorder="0"
                    allow="autoplay; fullscreen" allowFullScreen>
                </iframe>
            </div>
            <div className="col-2-2">
                <p id="about__3-work-description" className="center p-l">
                    {props.text}
                </p>
            </div>
        </div>
    )
}
