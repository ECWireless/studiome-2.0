import React, { Component } from 'react'
import { graphql } from 'react-apollo';
import { NavLink } from 'react-router-dom';

// Queries
import { addImpression } from '../../analytics/queries';

// Components
import Button from '../../components/Button';

class Events extends Component {
    componentDidMount() {
        window.scroll({
            top: 0,
        });

        this.props.addImpression({
			variables: {
				date: new Date().toISOString().slice(0, 10),
				productId: "5e5fc31d5393db0004e43a68"
			}
		})
    }
    
    render() {
        return (
            <div className="events">
                <div className="events__banner" />
                <div className="events__banner-container">
                    <h1 className="events__heading h1">Hosted Events</h1>
                    <div className="events__border" />
                </div>

                <NavLink className="events__back-button" exact to="/community">
                    <Button arrow text={"Back"} size={"m"} />
                </NavLink>

                <p className="events__description p-xl">StudioME believes in easy and community-driven media creation.
                    As part of our mission, we host film classes, professional speakers, and local events.
                </p>

                <h3 className="events__subheading h3 b">Past Events</h3>
                <div className="events__subheading-line" />


                <a
                    href="https://www.eventbrite.com/e/teaching-me-with-dorin-williams-and-studiome-tickets-93586924009"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="events__card"
                >
                    <div className="events__photo" />
                    <p className="events__date p-s orange">Sat, March 14th, 1pm</p>
                    <h3 className="events__title p-m">Teaching Me with Dorin Williams & StudioME</h3>
                </a>
            </div>
        )
    }
}

export default graphql(addImpression, { name: "addImpression" })(Events);
