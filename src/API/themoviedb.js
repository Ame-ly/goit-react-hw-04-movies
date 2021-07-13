// https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher

import axios from 'axios';

const API_KEY = '6020deb849e26bbc6d34ec25b74d9ecf';
const BASE_URL = 'https://api.themoviedb.org/3/';

const Api = {
  fetchPopularMovies() {
    return axios
      .get(`${BASE_URL}trending/movie/week?api_key=${API_KEY}`)
      .then(r => r.data.results);
  },
  fetchMoviesByQuery(query) {
    return axios
      .get(
        `${BASE_URL}search/movie?query=${query}&api_key=${API_KEY}&language=en-US&page=1&include_adult=false`,
      )
      .then(r => r.data.results);
  },
  fetchMoviesById(id) {
    return axios
      .get(`${BASE_URL}movie/${id}?api_key=${API_KEY}&language=en-US`)
      .then(r => r.data);
  },
  fetchMoviesCastById(id) {
    return axios
      .get(`${BASE_URL}movie/${id}/credits?api_key=${API_KEY}&language=en-US`)
      .then(r => r.data.cast);
  },
  fetchMoviesReviewById(id) {
    return axios
      .get(
        `${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
      )
      .then(r => r.data.results);
  },
};

export default Api;
