import React from 'react'

const Banner = (props) => {
    return (
        <div style={{backgroundImage: `url(${props.image})`}} className="flex-column banner-container">
            <h1 className="h1 white uppercase">{props.text}</h1>
            <div style={{margin: '2rem auto'}} className={`line-m line-m--${props.color}`} />
        </div>
    )
}

export default Banner
