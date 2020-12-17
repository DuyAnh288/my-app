import React, { Component } from "react";
import Dotdotdot from "react-dotdotdot";

class BannerTopList extends Component {
  constructor(props) {
    super(props);
    this.refDiv = React.createRef(null);
  }

  updateScroll(index, check) {
    const div = this.refDiv.current;
    if (index > 4) {
      let top = 100 * (index - 4);

      div.scrollTop = top;
    } else {
      div.scrollTop = 0;
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.currentIndex !== this.props.currentIndex) {
      this.updateScroll(this.props.currentIndex);
    }
  }

  selectContent(index) {
    this.props.selectContent(index);
  }

  render() {
    return (
      <div className="slidey-list col-md-4" ref={this.refDiv}>
        <ul>
          {this.props.movie.map((item, index) => (
            <li
              key={index}
              style={{ height: 100 }}
              className={`${
                this.props.currentIndex === index ? "slidey-active" : ""
              }`}
            >
              <table className="slidey-list-table">
                <tbody onClick={this.selectContent.bind(this, index)}>
                  <tr>
                    <td rowSpan="2" className="slidey-list-thumbnail-container">
                      <div
                        className="slidey-list-thumbnail"
                        style={{
                          backgroundImage: `url(${item.movieImage})`,
                          width: 91,
                          height: 91,
                        }}
                      ></div>
                    </td>
                    <td className="slidey-list-title">{item.movieName}</td>
                  </tr>
                  <tr>
                    <td
                      className="slidey-list-description is-truncated"
                      style={{
                        width: 296,
                        height: 74,
                        display: "block",
                        overflowWrap: "break-word",
                      }}
                    >
                      <Dotdotdot clamp={2}>
                        <p>{item.movieDescription}</p>
                      </Dotdotdot>
                    </td>
                  </tr>
                </tbody>
              </table>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default BannerTopList;
