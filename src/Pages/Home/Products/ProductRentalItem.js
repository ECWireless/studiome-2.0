import React from 'react';

export default function ProductItem(props) {
    return (
        <div onClick={props.impression} style={!props.animation ? { animation: 'none', alignSelf: 'center' } : null} className={`products-rental-item__card products-rental-item__card--${props.index}`}>
            <div onClick={props.onModalToggle} className={`products-rental-item__photo`}
                style={{backgroundImage: `url(${props.image})`, backgroundPosition: 'center', backgroundSize: 'cover'}}
            />
            <p className="products-rental-item__name p-l">{props.name}</p>
            <button onClick={props.onModalToggle} className="products-rental-item__button button button--s">View</button>
        </div>
    )
}
