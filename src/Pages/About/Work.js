import React from 'react';

// Components
import Banner from '../../components/Banner'
import Button from '../../components/Button'

export default function Work({
    workBannerTitle,
    workBannerImage,
    workDescription,
    workVideo1URL,
    workVideo1Description,
    workVideo2URL,
    workVideo2Description,
    workVideo3URL,
    workVideo3Description,
}) {
    return (
        <>
            <Banner color="green" text={workBannerTitle} textColor="grey" image={workBannerImage}/>
            <div className="container-new">
                <p id="about__3-paragraph-1" className="center p-xl">
                    {workDescription}
                </p>
                <WorkExample
                    link={workVideo1URL}
                    text={workVideo1Description}
                />
                <div className="about__3-work-border about__3-work-border--1" />
                <WorkExample
                    link={workVideo2URL}
                    text={workVideo2Description}
                />
                <div className="about__3-work-border about__3-work-border--2" />
                <WorkExample
                    link={workVideo3URL}
                    text={workVideo3Description}
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
