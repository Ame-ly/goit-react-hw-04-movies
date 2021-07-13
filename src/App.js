import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './routes';
import Spinner from './components/Loader/Loader';
import NavBar from './components/NavBar/NavBar';

const HomePage = lazy(() =>
  import('./views/HomePage/HomePage' /* webpackChunkName: "home-page" */),
);
const moviesDetails = lazy(() =>
  import('./views/MoviesDetails/moviesDetails' /* webpackChunkName: "movies-page" */),
);
const MoviesView = lazy(() =>
  import(
    './views/MoviesView/MoviesView' /* webpackChunkName: "movie-info-view" */
  ),
);
const NotFound = lazy(() =>
  import('./views/NotFound/NotFound' /* webpackChunkName: "not-found" */),
);

const App = () => {
  return (
    <>
      <NavBar />
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <Route path={routes.moviesDetails} component={moviesDetails} />
          <Route path={routes.movies} component={MoviesView} />
          <Route exact component={NotFound} />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
