import React from 'react'

const Banner = (props) => {
    return (
        <div style={{backgroundImage: `url(${props.image})`}} className="flex-column banner-container">
            <h1 className={`h1 ${props.textColor === "grey" ? "grey" : "white"} uppercase`}>{props.text}</h1>
            <div style={{margin: '2rem auto'}} className={`line-m line-m--${props.color}`} />
        </div>
    )
}

export const BannerAlt = (props) => {
    return (
        <div style={{backgroundImage: `url(${props.image})`}} className="flex-column banner-container">
            <div className="banner-background" style={{zIndex: 1}} />
            <h1 className="h1 uppercase banner-alt-text" style={{zIndex: 2}}>{props.text}</h1>
            <div style={{margin: '2rem auto', zIndex: 2 }} className={`line-m line-m--${props.color}`} />
        </div>
    )
}

export default Banner
