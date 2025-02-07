import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Components
import Spinner from '../components/Spinner';

// Pages
const Home = React.lazy(() => import ('../Pages/Home'));
const Equipment = React.lazy(() => import ('../Pages/Home/Products/Equipment'));

const About = React.lazy(() => import ('../Pages/About'));

// const Community = React.lazy(() => import ('../Pages/Community'));
// const Events = React.lazy(() => import ('../Pages/Community/Events'));
// const Learn = React.lazy(() => import ('../Pages/Community/Learn'));
// const Gallery = React.lazy(() => import ('../Pages/Community/Gallery'));
// const Swag = React.lazy(() => import ('../Pages/Community/Swag'));
const Virtual = React.lazy(() => import ('../Pages/Virtual'));

export default function Router(props) {
    return (
        <React.Fragment>
            <Switch>
                <Route path="/" exact
                    render={() => 
                        <React.Suspense fallback={<Spinner />}>
                            <Home
                                sidebarSelection={props.sidebarSelection}
                                onQuickButtonFix={props.onQuickButtonFix}
                            />
                        </React.Suspense>} 
                />
                <Route path="/checkout" exact />
                <Route path="/about" exact
                    render={() => 
                        <React.Suspense fallback={<Spinner />}>
                            <About
                                onQuickButtonFix={props.onQuickButtonFix}
                                sidebarSelection={props.sidebarSelection}
                            />
                        </React.Suspense>} 
                />

                {/* <Route path="/community" exact
                    render={() => 
                        <React.Suspense fallback={<Spinner />}>
                            <Community />
                        </React.Suspense>} 
                /> */}
                {/* <Route path="/community/events" exact
                    render={() => 
                        <React.Suspense fallback={<Spinner />}>
                            <Events />
                        </React.Suspense>} 
                />
                <Route path="/community/learn" exact
                    render={() => 
                        <React.Suspense fallback={<Spinner />}>
                            <Learn />
                        </React.Suspense>} 
                />
                <Route path="/community/gallery" exact
                    render={() => 
                        <React.Suspense fallback={<Spinner />}>
                            <Gallery />
                        </React.Suspense>} 
                />
                <Route path="/community/swag" exact
                    render={() => 
                        <React.Suspense fallback={<Spinner />}>
                            <Swag />
                        </React.Suspense>} 
                /> */}

                <Route path="/equipment" exact
                    render={() => 
                        <React.Suspense fallback={<Spinner />}>
                            <Equipment />
                        </React.Suspense>} 
                />

                <Route path="/equipment/:id"
                    render={() => 
                        <React.Suspense fallback={<Spinner />}>
                            <Equipment />
                        </React.Suspense>} 
                />
                <Route path="/virtual" exact
                    render={() => 
                        <React.Suspense fallback={<Spinner />}>
                            <Virtual />
                        </React.Suspense>} 
                />
                <Redirect to="/" exact />
            </Switch>
        </React.Fragment>
    )
}
