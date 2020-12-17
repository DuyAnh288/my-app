import React, { Component } from "react";

class BannerTopContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progressBar: "",
    };
  }

  clickNext() {
    this.props.nextBackIndex(1, "next");
  }

  clickBack() {
    this.props.nextBackIndex(-1, "back");
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.currentIndex !== this.props.currentIndex) {
      this.setState({ progressBar: "none" });
        setTimeout(() => {
          this.setState({ progressBar: "" });
        }, 10);
    }
  }

  render() {
    return (
      <div
        className="slidey-image col-md-8"
        style={{ backgroundImage: `url(${this.props.movieImage})` }}
      >
        <div
          className="slidey-overlay"
          style={{ opacity: 1, display: "block" }}
        >
          <p className="slidey-overlay-title">{this.props.movieName}</p>
          <p className="slidey-overlay-description">
            {this.props.movieDescription}
          </p>
          <span
            className="slidey-progress"
            style={{
              width: 1000,
              overflow: "hidden",
              display: `${this.state.progressBar}`,
            }}
          ></span>
        </div>
        <div
          onClick={this.clickBack.bind(this)}
          className="slidey-controls slidey-controls-previous"
        >
          <i className="fa fa-chevron-left"></i>
        </div>
        <div
          onClick={this.clickNext.bind(this)}
          className="slidey-controls slidey-controls-next"
        >
          <i className="fa fa-chevron-right"></i>
        </div>
      </div>
    );
  }
}

export default BannerTopContent;
