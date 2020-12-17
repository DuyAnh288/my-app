import React, { Component } from "react";
import BannerTopContent from "./BannerTopContent";
import BannerTopList from "./BannerTopList";
import axios from "axios";

const URL_IMAGE_HD = "https://image.tmdb.org/t/p/original";

class BannerTop extends Component {
  constructor(props) {
    super(props);
    this.timer = null;
    this.state = {
      content: [],
      currentIndex: 0,
    };
  }

  //Lấy data từ APi sử dựng axios
  componentDidMount() {
    axios({
      method: "get",
      url:
        "https://api.themoviedb.org/3/movie/upcoming?api_key=1e2d3e04a46a4b641682a83ebd1b0bf1&language=en-US&page=1",
    })
      .then((res) => {
        var listMovies = [];
        for (var data of res.data.results) {
          var movie = {
            movieID: data.id,
            movieName: data.original_title,
            movieImage: URL_IMAGE_HD + data.backdrop_path,
            movieDescription: data.overview,
          };
          listMovies.push(movie);
        }
        this.setState({
          content: listMovies,
        });
      })
      .catch((err) => console.log(err));
  }

  componentDidUpdate() {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.nextBackIndex(1, "next");
    }, 6000);
  }

  componentWillUnmount(){
    clearTimeout(this.timer);
  }

  nextBackIndex(x, action) {
    if (
      this.state.currentIndex === this.state.content.length - 1 &&
      action === "next"
    ) {
      this.setState({
        currentIndex: 0,
      });
    } else if (this.state.currentIndex === 0 && action === "back") {
      this.setState({
        currentIndex: this.state.content.length - 1,
      });
    } else {
      this.setState({
        currentIndex: this.state.currentIndex + x,
      });
    }
  }

  selectContent(index) {
    this.setState({
      currentIndex: index,
    });
  }

  render() {
    return (
      <div className="slidey-row row">
        <BannerTopContent
          movieName={this.state.content[this.state.currentIndex]?.movieName}
          movieImage={this.state.content[this.state.currentIndex]?.movieImage}
          movieDescription={
            this.state.content[this.state.currentIndex]?.movieDescription
          }
          nextBackIndex={this.nextBackIndex.bind(this)}
          currentIndex={this.state.currentIndex}
        />
        <BannerTopList
          movie={this.state.content}
          currentIndex={this.state.currentIndex}
          selectContent={this.selectContent.bind(this)}
        />
      </div>
    );
  }
}

export default BannerTop;
