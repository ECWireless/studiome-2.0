import React, { Component } from 'react'
import Lottie from 'react-lottie';
import styled from 'styled-components';
import respondTo from '../../components/Breakpoints';


import Spinner from '../../components/Spinner';

import { ReactComponent as ChevronArrow } from '../../assets/home/products/chevron-thin-down.svg';
import videoSVG from '../../assets/home/hero/video.json';
import FiveStar from '../../assets/home/hero/five-star.png';

export default class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {isStopped: false, isPaused: false};
  }
  
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: videoSVG,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    return (
      <section id="hero" className="container">
        <React.Suspense fallback={<Spinner />}>
          <div id="hero__video-container">
            <video src={`https://cdn.sanity.io/files/lagsmzsb/production/${this.props?.heroVideo?.asset._ref.split('-')[1]}.mp4`} id="hero__video" autoPlay loop muted playsInline />
            <RatingBadgeContainer>
              <img src={FiveStar} alt="Five Star Rating" />
            </RatingBadgeContainer>
          </div>
        </React.Suspense>

        <div id="hero__video-svg">
          <Lottie options={defaultOptions}
            isStopped={this.state.isStopped}
            isPaused={this.state.isPaused}
          />
        </div>

        <div id="hero__circle" />
        
        <div id="hero__headings-container">
          <h1 id="hero__heading" className="h1 h1 white">{this.props.heroMobileTagline}</h1>
          <h3 id="hero__subheading" className="h3 h3 white l">{this.props.heroMobileDescription}</h3>
        </div>

        <div id="hero__description-container" className="white">
          <h2 id="hero__studio-description" className="h2 h2 white">{this.props.heroDesktopDescription}</h2>
        </div>

        <div onClick={this.props.onProductsHandler} id="hero__arrow-container">
          <h3 id="hero__arrow-heading" className="h3 l">{this.props.heroProductsIndicatorText}</h3>
          <ChevronArrow id="hero__arrow" />
        </div>
      </section>
    )
  }
}

const RatingBadgeContainer = styled.div`
  display: none;
  position: absolute;
  right: 0;
  top: 60px;

  ${respondTo.md`
    display: block;
  `}

  img {
    width: 300px;
  }
`;
