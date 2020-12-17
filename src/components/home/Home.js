import React, { Component } from "react";
import Header from "../header/Header";
import Category from "../category/Category";
import BannerTop from "../slidey/BannerTop";
import BannerBottom from "../bannerBottom/BannerBottom";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Category />
        <BannerTop />
        <BannerBottom />
      </div>
    );
  }
}

export default Home;
