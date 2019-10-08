import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Components
import Spinner from '../components/Spinner';

// Pages
const Home = React.lazy(() => import ('../Pages/Home'));
const About = React.lazy(() => import ('../Pages/About'));


export default function Router(props) {
    return (
        <React.Fragment>
            <Switch>
                <Route path="/" exact
                    render={() => 
                        <React.Suspense fallback={<Spinner />}>
                            <Home
                                sidebarSelection={props.sidebarSelection}
                            />
                        </React.Suspense>} 
                />
                <Route path="/checkout" exact />
                <Route path="/about" exact
                    render={() => 
                        <React.Suspense fallback={<Spinner />}>
                            <About />
                        </React.Suspense>} 
                />
                <Route path="/projects" exact>Our Projects Page</Route>
                <Route path="/contact" exact>Contact Page</Route>
                <Redirect to="/" exact />
            </Switch>
        </React.Fragment>
    )
}
