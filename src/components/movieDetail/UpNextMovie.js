import { useEffect, useState } from "react";
import { getListMovie } from "../APICall/GetMovie";
import { Link } from 'react-router-dom';

export default function UpNextMovie(props) {
  const [listMovies, setListMovie] = useState([]);
  const linkAPI =
    "https://api.themoviedb.org/3/movie/upcoming?api_key=1e2d3e04a46a4b641682a83ebd1b0bf1&language=en-US&page=1";
  useEffect(() => {
    getListMovie(linkAPI).then((Movies) => {
      setListMovie(Movies);
    });
  }, []);
  return (
    <>
      <div className="col-md-4 single-right">
        <h3>Up Next</h3>
        {listMovies.map((movie, index) =>
          index < 6 ? (
            <div key={index} className="single-grid-right">
              <div className="single-right-grids">
                <div className="col-md-4 single-right-grid-left">
                  <Link to={`/detail/${movie.movieID}`}>
                    <img src={movie.movieImage} alt="" />
                  </Link>
                </div>
                <div className="col-md-8 single-right-grid-right">
                  <Link to={`/detail/${movie.movieID}`} className="title">
                    Nullam interdum metus
                  </Link>
                  <p className="author">
                    <a href="#" className="author">
                      {movie.movieName}
                    </a>
                  </p>
                  <p className="views">2,114,200 views</p>
                </div>
                <div className="clearfix"></div>
              </div>
            </div>
          ) : (
            ""
          )
        )}
      </div>
    </>
  );
}
