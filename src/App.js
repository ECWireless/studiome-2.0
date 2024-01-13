import React, { useCallback, useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import * as actions from './redux/actions';
import { client } from './client'

import './sass/main.scss';
import "scroll-behavior-polyfill";

import { flowRight as compose } from 'lodash';

// Components
import Header from './Navigation/Header';
import LargeSidebar from './Navigation/LargeSidebar';
import SmallSidebar from './Navigation/SmallSidebar';
import Router from './Navigation/Router';
import Footer from './Navigation/Footer';
// import MembershipNotify from './components/MembershipNotify';
// import TempClosingModal from './components/TempClosingModal';

// Handlers
import {
	onScrollHome
} from './handlers/RefHandlers';
import { OfficeClosedModal } from './components/OfficeClosedModal';

const App = ({
	rentalButton,
	serviceButton,
	membershipsButton,
}) => {
	const [largeSidebar, setLargeSidebar] = useState(false);
	const [largeSidebarClass, setLargeSidebarClass] = useState('large-sidebar');
	const [sidebarSelection, setSidebarSelection] = useState(null);
	const [backdropClass, setBackdropClass] = useState('');
	const [, setMembershipNotify] = useState(true);
	const [location,] = useState(null);

	const [showOfficeClosedModal, setShowOfficeClosedModal] = useState(false);

	useEffect(() => {
		let location = window.location.href;
		location = location.split('#')

		if (location[1] === 'rentals' ) {
			rentalButton();
			setSidebarSelection('products');
		} else if (location[1] === 'services') {
			serviceButton();
			setSidebarSelection('products');
		} else if (location[1] === 'memberships') {
			membershipsButton();
			setMembershipNotify(false);
		}

		setTimeout(() => {
			client.fetch('*[_type == "officeClosureNotice" && slug.current == "v1"][0]').then(pageProps => {
				if (pageProps?.officeClosureNoticeToggle) {
					setShowOfficeClosedModal(true);
					setBackdropClass('main-backdrop main-backdrop__fadeIn')
				}
			})
		}, 3000);
	}, [membershipsButton, rentalButton, serviceButton])


	const productsToggle = useCallback(() => {
		setLargeSidebar(!largeSidebar);

		if (!largeSidebar) {
			setLargeSidebarClass('large-sidebar large-sidebar__active');
			setBackdropClass('backdrop backdrop__fadeIn');
		} else {
			setLargeSidebarClass('large-sidebar');
			setBackdropClass('backdrop backdrop__fadeOut');
		}
	}, [largeSidebar]);

	const onLargeSidebarSelection = useCallback((selected) => {
		if (selected === 'rentals' ) {
			rentalButton();
			setSidebarSelection('products');
		} else if (selected === 'services') {
			serviceButton();
			setSidebarSelection('products');
		} else if (selected === 'memberships') {
			membershipsButton();
			setSidebarSelection('products');
			setMembershipNotify(false);
		} else if (selected === 'membershipsNotify') {
			membershipsButton();
			setSidebarSelection('products');
			setMembershipNotify(false);
		}

		if (window.matchMedia('(max-width: 600px)').matches && selected !== 'membershipsNotify') {
			productsToggle()
		};
	}, [membershipsButton, productsToggle, rentalButton, serviceButton]);

	const onQuickButtonFix = useCallback((selected) => {
		if (selected === 'rentals') {
			rentalButton();
			setSidebarSelection('products');
		}
	}, [rentalButton]);

	const onSmallSidebarSelection = useCallback((selected) => {
		setLargeSidebar(false);

		if (selected === 'general') {
			setSidebarSelection('general');
		} else if (selected === 'contact') {
			setSidebarSelection('contact');
		}
	}, []);

	const toggleLargeSidebar = useCallback(() => {
		setLargeSidebar(!largeSidebar);
		setSidebarSelection(null);

		if (!largeSidebar) {
			setLargeSidebarClass('large-sidebar large-sidebar__active');
			setBackdropClass('backdrop backdrop__fadeIn');
		} else {
			setLargeSidebarClass('large-sidebar');
			setBackdropClass('backdrop backdrop__fadeOut');
		}
	}, [largeSidebar]);

	let footer = <Footer onLargeSidebarSelection={onLargeSidebarSelection} />;

	if (window.matchMedia('(max-width: 600px)').matches) {
		footer = '';
	};

	return (
		<BrowserRouter>
			<div className={
				largeSidebar 
				? "large-sidebar-container" 
				: "small-sidebar-container"
			}>
				{/* {membershipNotify 
					&& <MembershipNotify
						onLargeSidebarSelection={onLargeSidebarSelection}
						closeMembershipNotify={closeMembershipNotify}
					/>
				} */}
				{/* <TempClosingModal onQuickButtonFix={onQuickButtonFix} /> */}
				<Header
					toggleLargeSidebar={toggleLargeSidebar}
					onScrollHome={onScrollHome}
				/>

				<SmallSidebar
					onSmallSidebarSelection={onSmallSidebarSelection}
					onScrollHome={onScrollHome}
				/> 
				
				<LargeSidebar
					onScrollHome={onScrollHome}
					onLargeSidebarSelection={onLargeSidebarSelection}
					toggleLargeSidebar={toggleLargeSidebar}
					largeSidebarClass={largeSidebarClass}
				/>
				
				<OfficeClosedModal open={showOfficeClosedModal} onClose={() => {
					setShowOfficeClosedModal(false)
					setBackdropClass('main-backdrop main-backdrop__fadeOut')
				}} />

				<div className="main">
					<div className={backdropClass} onClick={() => {
						if (showOfficeClosedModal) {
							setShowOfficeClosedModal(false);
							setBackdropClass('main-backdrop main-backdrop__fadeOut')
						} else {
							toggleLargeSidebar()
						}
					}} />

					<Router
						location={location}
						onQuickButtonFix={onQuickButtonFix}
						onLargeSidebarSelection={onLargeSidebarSelection}
						sidebarSelection={sidebarSelection}
					/>
				</div>

				{footer}
				<div className="footer"></div>
			</div>
		</BrowserRouter>
	);
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
	connect( mapStateToProps, mapDispatchToProps )
)(App);