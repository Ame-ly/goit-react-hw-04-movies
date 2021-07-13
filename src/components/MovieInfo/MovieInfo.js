import React from 'react';
import PropTypes from 'prop-types';

const MovieInfo = ({
  baseUrl,
  title,
  url,
  descr,
  genres,
  vote,
  release_date,
}) => {
  return (
    <div>
      <h2>
        {title}
        {release_date && <span>({release_date})</span>}
      </h2>
      {url && <img src={`${baseUrl}${url}`} alt={title} />}
      <p>{descr}</p>

      <p> Vote: {vote}</p>
      <h3>Genres</h3>
      <ul>{genres && genres.map(i => <li key={i.id}>{i.name}</li>)}</ul>
    </div>
  );
};

MovieInfo.propTypes = {
  baseUrl: PropTypes.string,
  url: PropTypes.string,
  title: PropTypes.string,
  release_date: PropTypes.string,
  vote: PropTypes.number,
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ),
};

export default MovieInfo;
