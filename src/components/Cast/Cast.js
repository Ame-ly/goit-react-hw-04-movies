import React, { Component } from 'react';
import Api from '../../API/themoviedb';

class Cast extends Component {
  state = {
    baseUrl: 'https://image.tmdb.org/t/p/w500',
    incognito:
      'https://cdn.pixabay.com/photo/2017/04/15/04/36/incognito-2231825_960_720.png',
    casts: null,
  };
  componentDidMount() {
    const movieId = this.props.id;

    Api.fetchMoviesCastById(movieId).then(r => this.setState({ casts: r }));
  }

  render() {
    const { casts, baseUrl, incognito } = this.state;

    return (
      <ul className="Cast">
        {casts &&
          casts.map(({ id, profile_path, name, character }) => (
            <li key={id}>
              {
                <img
                  src={profile_path ? `${baseUrl}${profile_path}` : incognito}
                  alt={name}
                  width="200"
                />
              }
              <p>{name}</p>
              <p>{character}</p>
            </li>
          ))}
      </ul>
    );
  }
}

export default Cast;
