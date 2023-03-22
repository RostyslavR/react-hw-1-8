const BASE_URL = 'https://api.themoviedb.org/3';
const KEY_API = 'dc4940972c268b026150cf7be6f01d11';

export const getTrandingMovies = () =>
  fetch(`${BASE_URL}/trending/movie/day?api_key=${KEY_API}`).then(response =>
    response.json()
  );

export const getMoviesByQuery = query =>
  fetch(`${BASE_URL}/search/movie?query=${query}&api_key=${KEY_API}`).then(
    response => response.json()
  );

export const getMovieById = id =>
  fetch(`${BASE_URL}/movie/${id}?api_key=${KEY_API}`).then(response =>
    response.json()
  );

export const getMovieCreditsById = id =>
  fetch(`${BASE_URL}/movie/${id}/credits?api_key=${KEY_API}`).then(response =>
    response.json()
  );

export const getMovieReviewsById = id =>
  fetch(`${BASE_URL}/movie/${id}/reviews?api_key=${KEY_API}`).then(response =>
    response.json()
  );
