import React, { Component } from 'react';
import MoviesList from '../../components/MoviesList';
import SearchBar from '../../components/SearchBar';
import queryString from 'query-string';
import Api from '../../API/themoviedb';

class MoviesView extends Component {
  state = {
    searchQuery: '',
    movies: [],
  };

  componentDidMount() {
    const { query } = this.getQueryFromProps(this.props);

    if (query) {
      this.setState({ searchQuery: query });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery } = this.state;
    if (searchQuery !== prevState.searchQuery) {
      this.fetchMovies();
      this.props.history.push({
        search: `query=${searchQuery}`,
      });
    }
  }

  fetchMovies() {
    const { searchQuery } = this.state;
    Api.fetchMoviesByQuery(searchQuery).then(r =>
      this.setState({
        movies: r,
      }),
    );
  }

  getQueryFromProps = props => {
    const location = props.location.search;
    return queryString.parse(location);
  };

  onQueryChange = query => {
    this.setState({
      searchQuery: query,
    });
  };

  render() {
    const { movies } = this.state;
    return (
      <>
        <SearchBar onSubmit={this.onQueryChange} />
        <MoviesList movies={movies} />
      </>
    );
  }
}

export default MoviesView;
