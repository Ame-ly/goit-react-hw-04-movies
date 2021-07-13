import React, { Component } from 'react';
import Api from '../../API/themoviedb';
import InfoNav from '../../components/InfoNav'


// import { NavLink, Route } from 'react-router-dom';
import MovieInfo from '../../components/MovieInfo';

import routes from '../../routes';



class moviesDetails extends Component {
  state = {
    base_url: 'https://image.tmdb.org/t/p/w500',
    id: null,
    poster_path: null,
    original_title: null,
    overview: null,
    release_date: null,
    vote_average: null,
    genres: null,

  };

  componentDidMount() {
    const movieId = this.props.match.params.moviesId;
    Api.fetchMoviesById(movieId).then(r =>
      this.setState({
        ...r,
      }),
    );
  }

  onBackBtnClick = () => {
    const { location, history } = this.props;
    history.push(location?.state?.from || routes.home);
  };

  render() {
    // const movieId = Number(this.props.match.params.moviesId);
    const {
      base_url,
      original_title,
      poster_path,
      overview,
      genres,
      vote_average,
      release_date,
    } = this.state;
    // const { match } = this.props;

    // const { from } = this?.props?.location?.state || {
    //   from: { pathname: '/' },
    // };

    return (
      <>
        <button type="button" onClick={this.onBackBtnClick}>
          Back
        </button>
        <MovieInfo
          baseUrl={base_url}
          title={original_title}
          url={poster_path}
          descr={overview}
          genres={genres}
          vote={vote_average}
          release_date={release_date}
        />
        <InfoNav />
      </>
    );
  }
}

export default moviesDetails;
