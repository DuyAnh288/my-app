import axios from "axios";

const URL_IMAGE_HD = "https://image.tmdb.org/t/p/original";

export default function getMovie(path) {

  return axios({
    method: "get",
    url: `${path}`,
  })
    .then((res) => {
      var movie = {
        movieID: res.data.id,
        movieName: res.data.title,
        movieImage: URL_IMAGE_HD + res.data.poster_path,
        movieReleaseDate: res.data.release_date,
      };
      return movie;
    })
    .catch((err) => console.log(err));
}

export function getListMovie(path) {

  return axios({
    method: "get",
    url: `${path}`,
  })
    .then((res) => {
      var listMovies = [];
      for (var data of res.data.results) {
        if (data.title && data.release_date) {
          var movie = {
            movieID: data.id,
            movieName: data.title,
            movieImage: URL_IMAGE_HD + data.poster_path,
            movieReleaseDate: data.release_date,
          };
        }
        listMovies.push(movie);
      }
      return listMovies;
    })
    .catch((err) => console.log(err));
}