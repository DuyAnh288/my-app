import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getMovie from "../APICall/GetMovie";
import userImage from "../../images/user.jpg";

export default function MovieDetailContent(props) {
    let { movieID } = useParams();
    const linkAPI = `https://api.themoviedb.org/3/movie/${movieID}?api_key=1e2d3e04a46a4b641682a83ebd1b0bf1&language=en-US`;
    const [movieName, setMovieName] = useState("");
    const [movieImage, setmovieImage] = useState("");

  useEffect(() => {
    getMovie(linkAPI).then((movie) =>{
        setMovieName(movie.movieName);
        setmovieImage(movie.movieImage);
    })
  }, [movieID]);

  return (
    <div className="col-sm-8 single-left">
      <div className="song">
        <div className="song-info">
          <h3>{`${movieName} - Official Trailer`}</h3>
        </div>
        <div className="video-grid-single-page-agileits">
          <div data-video="dLmKio67pVQ" id="video">
            <img src={movieImage} alt="" className="img-responsive" />
          </div>
        </div>
      </div>
      <div className="song-grid-right">
        <div className="share">
          <h5>Share this</h5>
          <div className="single-agile-shar-buttons">
            <ul>
              <li>
                <div
                  className="fb-like"
                  data-href="https://www.facebook.com/w3layouts"
                  data-layout="button_count"
                  data-action="like"
                  data-size="small"
                  data-show-faces="false"
                  data-share="false"
                ></div>
              </li>
              <li>
                <div
                  className="fb-share-button"
                  data-href="https://www.facebook.com/w3layouts"
                  data-layout="button_count"
                  data-size="small"
                  data-mobile-iframe="true"
                >
                  <a
                    className="fb-xfbml-parse-ignore"
                    target="_blank"
                    href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.facebook.com%2Fw3layouts&amp;src=sdkpreparse"
                  >
                    Share
                  </a>
                </div>
              </li>
              <li className="news-twitter">
                <a
                  href="https://twitter.com/w3layouts"
                  className="twitter-follow-button"
                  data-show-count="false"
                >
                  Follow @w3layouts
                </a>
                <script
                  async
                  src="//platform.twitter.com/widgets.js"
                  charSet="utf-8"
                ></script>
              </li>
              <li>
                <a
                  href="https://twitter.com/intent/tweet?screen_name=w3layouts"
                  className="twitter-mention-button"
                  data-show-count="false"
                >
                  Tweet to @w3layouts
                </a>
                <script
                  async
                  src="//platform.twitter.com/widgets.js"
                  charSet="utf-8"
                ></script>
              </li>
              <li>
                <div className="g-plusone" data-size="medium"></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="clearfix"></div>

      <div className="all-comments">
        <div className="all-comments-info">
          <a href="#">Comments</a>
          <div className="agile-info-wthree-box">
            <form>
              <input type="text" placeholder="Name" required="" />
              <input type="text" placeholder="Email" required="" />
              <input type="text" placeholder="Phone" required="" />
              <textarea placeholder="Message" required=""></textarea>
              <input type="submit" value="SEND" />
              <div className="clearfix"></div>
            </form>
          </div>
        </div>
        <div className="media-grids">
          <div className="media">
            <h5>TOM BROWN</h5>
            <div className="media-left">
              <a href="#">
                <img src={userImage} title="One movies" alt=" " />
              </a>
            </div>
            <div className="media-body">
              <p>
                Maecenas ultricies rhoncus tincidunt maecenas imperdiet ipsum id
                ex pretium hendrerit maecenas imperdiet ipsum id ex pretium
                hendrerit
              </p>
              <span>
                View all posts by :<a href="#"> Admin </a>
              </span>
            </div>
          </div>
          <div className="media">
            <h5>MARK JOHNSON</h5>
            <div className="media-left">
              <a href="#">
                <img src={userImage} title="One movies" alt=" " />
              </a>
            </div>
            <div className="media-body">
              <p>
                Maecenas ultricies rhoncus tincidunt maecenas imperdiet ipsum id
                ex pretium hendrerit maecenas imperdiet ipsum id ex pretium
                hendrerit
              </p>
              <span>
                View all posts by :<a href="#"> Admin </a>
              </span>
            </div>
          </div>
          <div className="media">
            <h5>STEVEN SMITH</h5>
            <div className="media-left">
              <a href="#">
                <img src={userImage} title="One movies" alt=" " />
              </a>
            </div>
            <div className="media-body">
              <p>
                Maecenas ultricies rhoncus tincidunt maecenas imperdiet ipsum id
                ex pretium hendrerit maecenas imperdiet ipsum id ex pretium
                hendrerit
              </p>
              <span>
                View all posts by :<a href="#"> Admin </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
