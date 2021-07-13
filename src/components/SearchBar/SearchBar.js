import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  state = {
    searchQuery: '',
    movies: [],
  };

  onInputChange = e => {
    this.setState({
      searchQuery: e.target.value,
    });
  };

  onFormSubmit = e => {
    e.preventDefault();

    const { searchQuery } = this.state;

    this.props.onSubmit(searchQuery);
  };
  render() {
    const { searchQuery } = this.state;
    return (
      <form action="submit" onSubmit={this.onFormSubmit}>
        <button type="submit">Search Movies</button>
        <input
          type="input"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          value={searchQuery}
          onChange={this.onInputChange}
        />
      </form>
    );
  }
}

SearchBar.propTypes = {
  onFormSubmit: PropTypes.func,
};
export default SearchBar;
