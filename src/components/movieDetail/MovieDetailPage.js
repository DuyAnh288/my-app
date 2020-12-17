import React, { Component } from "react";
import Header from "../header/Header";
import Category from "../category/Category";
import MovieDetailContent from "./MovieDetailContent";
import UpNextMovie from "./UpNextMovie";
import BannerBottom from "../bannerBottom/BannerBottom";

class MovieDetailPage extends Component {

  render() {
    return (
      <div>
        <Header />
        <Category />
        <div className="single-page-agile-main">
          <div className="container">
            <div className="agileits-single-top">
              <ol className="breadcrumb">
                <li>
                  <a href="/">Home</a>
                </li>
                <li className="active">Single</li>
              </ol>
            </div>
            <div className="single-page-agile-info">
              <div className="show-top-grids-w3lagile">
                <MovieDetailContent />
                <UpNextMovie />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieDetailPage;
