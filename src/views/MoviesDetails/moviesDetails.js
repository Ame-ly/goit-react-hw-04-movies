import React, { Component } from 'react';
import Loader from '../../components/Loader/Loader';
import Api from '../../API/themoviedb';
import InfoNav from '../../components/InfoNav';
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
    const {
      base_url,
      original_title,
      poster_path,
      overview,
      genres,
      vote_average,
      release_date,
    } = this.state;

    return (
      <>
        <button type="button" onClick={this.onBackBtnClick}>
          Back
        </button>
        {this.state.poster_path ? (
          <>
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
        ) : (
          <Loader />
        )}
      </>
    );
  }
}

export default moviesDetails;
