import { Route, NavLink, withRouter } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import Spinner from '../../components/Loader';
// import Cast from "../../components/Cast";
// import Reviews from "../../components/Reviews";

// import styles from "./AdditionalInfo.module.scss";
const Cast = lazy(() => import('../../components/Cast/Cast'));
const Reviews = lazy(() => import('../../components/Reviews/Reviews'));
const InfoNav = ({ match, location }) => {
    const movieId = Number(match.params.moviesId);
    return (
        <div>
            <h3>Information</h3>
            <ul className="Nav">
                <li>
                    <NavLink
                        className="LinkList"
                        activeClassName="NavLink__active"
                        to={{
                            pathname: `${match.url}/cast`,
                            state: { from: location?.state?.from },
                        }}
                    >
                        Cast
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className="LinkList"
                        activeClassName="NavLink__active"
                        to={{
                            pathname: `${match.url}/reviews`,
                            state: { from: location?.state?.from },
                        }}
                    >
                        Review
                    </NavLink>
                </li>
            </ul>
            <Suspense fallback={<Spinner />}>
                <Route
                    path={`${match.path}/cast`}
                    render={() => <Cast id={movieId} />}
                />
                <Route
                    path={`${match.path}/reviews`}
                    render={() => <Reviews id={movieId} />}
                />
            </Suspense>
        </div>
    );
};

export default withRouter(InfoNav);
