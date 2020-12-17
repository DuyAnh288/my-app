import React, { Component } from "react";
import BannerBottomContent from "./BannerBottomContent";
import axios from "axios";

const URL_IMAGE_HD = "https://image.tmdb.org/t/p/original";

class BannerBottom extends Component {
  constructor(props) {
    super(props);
    this.timer = null;
    this.count = 0;
    this.state = {
      content: [],
      slide: 0,
    };
  }
  //Lấy data từ APi sử dựng axios
  componentDidMount() {
    axios({
      method: "get",
      url:
        "https://api.themoviedb.org/3/trending/all/day?api_key=1e2d3e04a46a4b641682a83ebd1b0bf1",
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
        this.setState({
          content: listMovies,
        });
      })
      .catch((err) => console.log(err));
  }

  componentDidUpdate(prevProps, prevState) {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.count += 1;
      if (this.state.content.length * 222 - this.count * 222 > 1110) {
        this.setState({ slide: this.count * -222 });
      } else {
        this.count = 0;
        this.setState({ slide: this.count * -222 });
      }
    }, 3000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    return (
      <div className="banner-bottom">
        <div className="container">
          <div className="w3_agile_banner_bottom_grid">
            <div
              className="owl-carousel owl-theme"
              style={{ opacity: 1, display: "block" }}
            >
              <div className="owl-wrapper-outer">
                <div
                  className="owl-wrapper"
                  style={{
                    width: this.state.content.length * 222,
                    left: 0,
                    display: "block",
                    transition: "all 1000ms ease 0s",
                    transform: `translate3d(${this.state.slide}px, 0px, 0px)`,
                  }}
                >
                  {this.state.content.map((movie, index) => (
                    <BannerBottomContent
                      key={index}
                      movieName={movie.movieName}
                      movieReleaseDate={movie.movieReleaseDate}
                      movieImage={movie.movieImage}
                      movieID={movie.movieID}
                    />
                  ))}
                  <div className="owl-controls clickable">
                    <div className="owl-pagination">
                      <div className="owl-page active">
                        <span className=""></span>
                      </div>
                      <div className="owl-page">
                        <span className=""></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BannerBottom;
