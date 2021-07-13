import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const MoviesList = ({ movies, location }) => {
  return movies.map(({ id, title }) => (
    <li key={id}>
      <Link
        className="LinkList"
        to={{
          pathname: `/movies/${id}`,
          state: {
            from: location,
          },
        }}
      >
        {title}
      </Link>
    </li>
  ));
};
MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ),
};

export default withRouter(MoviesList);
