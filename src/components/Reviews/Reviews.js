import React, { Component } from 'react';
import Api from '../../API/themoviedb';

class Reviews extends Component {
  state = {
    reviews: null,
  };

  componentDidMount() {
    const { id } = this.props;
    const movieId = id;
    Api.fetchMoviesReviewById(movieId).then(r => {
      console.log(r);
      this.setState({ reviews: r });
    });
  }

  render() {
    const { reviews } = this.state;

    return (
      <ul>
        {reviews && reviews.length > 0
          ? reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h3>{author}</h3>
              <p>{content}</p>
            </li>
          ))
          : "We don't have any reviews for this movie."}
      </ul>
    );
  }
}

export default Reviews;
