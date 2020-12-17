import React, { Component } from "react";
import { Link } from 'react-router-dom';

class BannerBottomContent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="owl-item" style={{ width: 222 }}>
        <div className="item">
          <div className="w3l-movie-gride-agile w3l-movie-gride-agile1">
            <Link to={`/detail/${this.props.movieID}`} className="hvr-shutter-out-horizontal">
              <img
                src={this.props.movieImage}
                title="album-name"
                className="img-responsive"
                alt=" "
              />
              <div className="w3l-action-icon">
                <i className="fa fa-play-circle" aria-hidden="true"></i>
              </div>
            </Link>
            <div className="mid-1 agileits_w3layouts_mid_1_home">
              <div className="w3l-movie-text">
                <h6>
                  <Link to={`/detail/:${this.props.movieID}`}>{this.props.movieName}</Link>
                </h6>
              </div>
              <div className="mid-2 agile_mid_2_home">
                <p>{this.props.movieReleaseDate}</p>
                <div className="block-stars">
                  <ul className="w3l-ratings">
                    <li>
                      <a href="#">
                        <i className="fa fa-star" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star-half-o" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="clearfix"></div>
              </div>
            </div>
            <div className="ribben">
              <p>NEW</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BannerBottomContent;
