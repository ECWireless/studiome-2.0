import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import * as actions from './redux/actions';

import './sass/main.scss';
import "scroll-behavior-polyfill";

import { graphql } from 'react-apollo';
import { flowRight as compose } from 'lodash';

// Components
import Header from './Navigation/Header';
import LargeSidebar from './Navigation/LargeSidebar';
import SmallSidebar from './Navigation/SmallSidebar';
import Router from './Navigation/Router';
import Footer from './Navigation/Footer';
// import MembershipNotify from './components/MembershipNotify';
// import TempClosingModal from './components/TempClosingModal';

// Queries
import { addImpression } from './analytics/queries';

// Handlers
import {
	onScrollHome
} from './handlers/RefHandlers';

class App extends React.Component {
	state = {
		largeSidebar: false,
		largeSidebarClass: 'large-sidebar',
		sidebarSelection: null,

		backdropClass: '',

		membershipNotify: true,

		location: null,
	}

	componentDidMount() {
		this.props.addImpression({
			variables: {
				date: new Date().toISOString().slice(0, 10),
				productId: "5e20d83d8b8aa9033d26adab"
			}
		})


		let location = window.location.href;
		location = location.split('#')

		if (location[1] === 'rentals' ) {
			this.props.rentalButton();
			this.setState({
				...this.state,
				sidebarSelection: 'products',
			})
		} else if (location[1] === 'services') {
			this.props.serviceButton();
			this.setState({
				...this.state,
				sidebarSelection: 'products',
			})
		} else if (location[1] === 'memberships') {
			this.props.membershipsButton();
			this.setState({
				...this.state,
				sidebarSelection: 'products',
				membershipNotify: false,
			})
		}
	}

	onLargeSidebarSelection = (selected) => {

		if (selected === 'rentals' ) {
			this.props.rentalButton();
			this.setState({
				...this.state,
				sidebarSelection: 'products',
			})
		} else if (selected === 'services') {
			this.props.serviceButton();
			this.setState({
				...this.state,
				sidebarSelection: 'products',
			})
		} else if (selected === 'memberships') {
			this.props.membershipsButton();
			this.setState({
				...this.state,
				sidebarSelection: 'products',
				membershipNotify: false,
			})
		} else if (selected === 'membershipsNotify') {
			this.props.membershipsButton();
			this.setState({
				...this.state,
				sidebarSelection: 'products',
				membershipNotify: false,
			})
		}

		if (window.matchMedia('(max-width: 600px)').matches && selected !== 'membershipsNotify') {
			this.productsToggle()
		};
	}

	onQuickButtonFix = (selected) => {
		if (selected === 'rentals') {
			this.props.rentalButton();
			this.setState({
				...this.state,
				sidebarSelection: 'products',
			})
		}
	}

	onSmallSidebarSelection = (selected) => {
		this.setState({
			...this.state,
			largeSidebar: false,
		})

		if (selected === 'general') {
			this.setState({
				...this.state,
				sidebarSelection: 'general',
			})
		} else if (selected === 'contact') {
			this.setState({
				...this.state,
				sidebarSelection: 'contact',
			})
		}
	}

	toggleLargeSidebar = () => {
		this.props.addImpression({
			variables: {
				date: new Date().toISOString().slice(0, 10),
				productId: "5e31fed06b3dcd0004ae936a"
			}
		})
		
		this.setState({
			largeSidebar: !this.state.largeSidebar,
			sidebarSelection: null,
		})

		if (!this.state.largeSidebar) {
			this.setState({
				largeSidebarClass: 'large-sidebar large-sidebar__active',
				backdropClass: 'backdrop backdrop__fadeIn',
			})
		} else {
			this.setState({
				largeSidebarClass: 'large-sidebar',
				backdropClass: 'backdrop backdrop__fadeOut',
			})
		}
	}

	productsToggle = () => {
		this.setState({
			largeSidebar: !this.state.largeSidebar,
		})

		if (!this.state.largeSidebar) {
			this.setState({
				largeSidebarClass: 'large-sidebar large-sidebar__active',
				backdropClass: 'backdrop backdrop__fadeIn',
			})
		} else {
			this.setState({
				largeSidebarClass: 'large-sidebar',
				backdropClass: 'backdrop backdrop__fadeOut',
			})
		}
	}

	closeMembershipNotify = () => {
		this.setState({
			...this.state,
			membershipNotify: false,
		})
	}

	render() {
		let footer = <Footer onLargeSidebarSelection={this.onLargeSidebarSelection} />;

		if (window.matchMedia('(max-width: 600px)').matches) {
			footer = '';
		};

		return (
			<BrowserRouter>
				<div className={
					!this.state.largeSidebar 
					? "small-sidebar-container" 
					: "large-sidebar-container"
				}>
					{/* {this.state.membershipNotify 
						&& <MembershipNotify
							onLargeSidebarSelection={this.onLargeSidebarSelection}
							closeMembershipNotify={this.closeMembershipNotify}
						/>
					} */}
					{/* <TempClosingModal onQuickButtonFix={this.onQuickButtonFix} /> */}
					<Header
						toggleLargeSidebar={this.toggleLargeSidebar}
						onScrollHome={onScrollHome}
					/>

					<SmallSidebar
						onSmallSidebarSelection={this.onSmallSidebarSelection}
						onScrollHome={onScrollHome}
					/> 
					
					<LargeSidebar
						onScrollHome={onScrollHome}
						onLargeSidebarSelection={this.onLargeSidebarSelection}
						toggleLargeSidebar={this.toggleLargeSidebar}
						largeSidebarClass={this.state.largeSidebarClass}
					/>

					<div className="main">
						<div className={this.state.backdropClass} onClick={this.toggleLargeSidebar} />

						<Router
							location={this.state.location}
							onQuickButtonFix={this.onQuickButtonFix}
							onLargeSidebarSelection={this.onLargeSidebarSelection}
							sidebarSelection={this.state.sidebarSelection}
						/>
					</div>

					{footer}
					<div className="footer"></div>
				</div>
			</BrowserRouter>
		);
	}
}

const mapStateToProps = state => {
	return {
        rentalsButtonClass: state.rentalsButtonClass,
        servicesButtonClass: state.servicesButtonClass,
        membershipsButtonClass: state.membershipsButtonClass,
        rentalToggle: state.rentalToggle,
        servicesToggle: state.servicesToggle,
        membershipsToggle: state.membershipsToggle,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		rentalButton: () => dispatch(actions.rentalButton()),
		serviceButton: () => dispatch(actions.serviceButton()),
		membershipsButton: () => dispatch(actions.membershipsButton()),
	};
};

export default compose(
	connect( mapStateToProps, mapDispatchToProps ),
	graphql(addImpression, { name: "addImpression" })
)(App);