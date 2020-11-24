import React from 'react'

// Components
import Banner from '../../components/Banner';

export default function Team({
    teamBannerTitle,
    teamBannerImage,
    teamMember1Name,
    teamMember1Image,
    teamMember1Title,
    teamMember1Paragraph1,
    teamMember1Paragraph2,
    teamMember2Name,
    teamMember2Image,
    teamMember2Title,
    teamMember2Paragraph1,
    teamMember2Paragraph2,
    teamMember3Name,
    teamMember3Image,
    teamMember3Title,
    teamMember3Paragraph1,
    teamMember4Name,
    teamMember4Image,
    teamMember4Title,
    teamMember4Paragraph1,
    teamMember5Name,
    teamMember5Image,
    teamMember5Title,
    teamMember5Paragraph1,
    teamMember6Name,
    teamMember6Image,
    teamMember6Title,
    teamMember6Paragraph1,
    teamMember6Paragraph2,
}) {
    return (
        <>
            <Banner color="green" textColor="grey" image={teamBannerImage}>
                {teamBannerTitle}
            </Banner>
            <div className="container-new" style={{margin: '0 auto'}}>

                {/* Row 1 */}
                <div className="col-2" id="about__2-row-container">
                    <div className="col-2-1" id="about__2-left-container">
                        <div className="about__team-card-container about__team-card-container--1">
                            <div className="about__team-card about__team-card--front">
                                <div className="about__team-card-picture" style={{backgroundImage: `url(${teamMember1Image})`}}>
                                    &nbsp;
                                </div>
                                <h3 className="about__team-card-name h3 white d">
                                    <span className="about__team-card-name-span about__team-card-name-span--1">
                                        {teamMember1Name}
                                    </span>
                                </h3>
                            </div>
                            <div className="about__team-card about__team-card--back about__team-card--back--1">
                                <h2 className="about__team-card-role h2 white">
                                    {teamMember1Title}
                                </h2>
                                <p className="about__team-card-info-1 p-m white">
                                    {teamMember1Paragraph1}
                                </p>
                                <p className="about__team-card-info-2 p-m white">
                                    {teamMember1Paragraph2}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-2-2" id="about__2-right-container">
                        <div className="about__team-card-container about__team-card-container--2">
                            <div className="about__team-card about__team-card--front">
                                <div className="about__team-card-picture" style={{backgroundImage: `url(${teamMember2Image})`}}>
                                    &nbsp;
                                </div>
                                <h3 className="about__team-card-name h3 white d">
                                    <span className="about__team-card-name-span about__team-card-name-span--2">
                                        {teamMember2Name}
                                    </span>
                                </h3>
                            </div>
                            <div className="about__team-card about__team-card--back about__team-card--back--2">
                                <h2 className="about__team-card-role h2 white">
                                    {teamMember2Title}
                                </h2>
                                <p className="about__team-card-info-1 p-m white">
                                    {teamMember2Paragraph1}
                                </p>
                                <p className="about__team-card-info-2 p-m white">
                                    {teamMember2Paragraph2}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Row 2 */}
                <div className="col-2" id="about__2-row-container">
                    <div className="col-2-1" id="about__2-left-container">
                        <div className="about__team-card-container about__team-card-container--3">
                            <div className="about__team-card about__team-card--front">
                                <div className="about__team-card-picture" style={{backgroundImage: `url(${teamMember3Image})`}}>
                                    &nbsp;
                                </div>
                                <h3 className="about__team-card-name h3 white d">
                                    <span className="about__team-card-name-span about__team-card-name-span--3">
                                        {teamMember3Name}
                                    </span>
                                </h3>
                            </div>
                            <div className="about__team-card about__team-card--back about__team-card--back--3">
                                <h1 className="about__team-card-role h2 white">
                                    {teamMember3Title}
                                </h1>
                                <p className="about__team-card-info-1 p-m white">
                                    {teamMember3Paragraph1}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-2-2" id="about__2-right-container">
                        <div className="about__team-card-container about__team-card-container--4">
                            <div className="about__team-card about__team-card--front">
                                <div className="about__team-card-picture" style={{backgroundImage: `url(${teamMember4Image})`}}>
                                    &nbsp;
                                </div>
                                <h3 className="about__team-card-name h3 white d">
                                    <span className="about__team-card-name-span about__team-card-name-span--1">
                                        {teamMember4Name}
                                    </span>
                                </h3>
                            </div>
                            <div className="about__team-card about__team-card--back about__team-card--back--1">
                                <h1 className="about__team-card-role h2 white">
                                    {teamMember4Title}
                                </h1>
                                <p className="about__team-card-info-1 p-m white">
                                    {teamMember4Paragraph1}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Row 3 */}
                <div className="col-2" id="about__2-row-container-2">
                    <div className="col-2-1" id="about__2-left-container">
                        <div className="about__team-card-container about__team-card-container--5">
                            <div className="about__team-card about__team-card--front">
                                <div className="about__team-card-picture" style={{backgroundImage: `url(${teamMember5Image})`}}>
                                    &nbsp;
                                </div>
                                <h3 className="about__team-card-name h3 white d">
                                    <span className="about__team-card-name-span about__team-card-name-span--2">
                                        {teamMember5Name}
                                    </span>
                                </h3>
                            </div>
                            <div className="about__team-card about__team-card--back about__team-card--back--2">
                                <h1 className="about__team-card-role h2 white">
                                    {teamMember5Title}
                                </h1>
                                <p className="about__team-card-info-1 p-m white">
                                    {teamMember5Paragraph1}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-2-2" id="about__2-right-container">
                        <div className="about__team-card-container about__team-card-container--6">
                            <div className="about__team-card about__team-card--front">
                                <div className="about__team-card-picture" style={{backgroundImage: `url(${teamMember6Image})`}}>
                                    &nbsp;
                                </div>
                                <h3 className="about__team-card-name h3 white d">
                                    <span className="about__team-card-name-span about__team-card-name-span--3">
                                        {teamMember6Name}
                                    </span>
                                </h3>
                            </div>
                            <div className="about__team-card about__team-card--back about__team-card--back--3">
                                <h1 className="about__team-card-role h2 white">
                                    {teamMember6Title}
                                </h1>
                                <p className="about__team-card-info-1 p-m white">{teamMember6Paragraph1}</p>
                                <p className="about__team-card-info-2 p-m white">{teamMember6Paragraph2}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
