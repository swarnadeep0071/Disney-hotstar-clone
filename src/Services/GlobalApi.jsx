import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "a7e65f789f38fb6c655748e5f6b36e42";
//https://api.themoviedb.org/3/trending/all/day?api_key=a7e65f789f38fb6c655748e5f6b36e42

const movieByGenreBaseURL = `${movieBaseUrl}/discover/movie?api_key=${api_key}`;
const getTrendingVideos = axios.get(
  movieBaseUrl + "/trending/all/day?api_key=" + api_key
);

const getMovieByGenreId = (id) =>
  axios.get(movieByGenreBaseURL + "&with_genres=" + id);

export default {
  getTrendingVideos,
  getMovieByGenreId,
};
