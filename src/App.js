import MovieDetailPage from "./components/movieDetail/MovieDetailPage";
import Home from "./components/home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import "./css/bootstrap.css";
import "./css/style.css";
import "./css/contactstyle.css";
import "./css/faqstyle.css";
import "./css/flexslider.css";
import "./css/font-awesome.min.css";
import "./css/googlefont.css";
import "./css/jquery.slidey.min.css";
import "./css/medile.css";
import "./css/news.css";
import "./css/owl.carousel.css";
import "./css/popuo-box.css";
import "./css/single.css";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/detail/:movieID" component={MovieDetailPage}/>
      </Switch>
    </Router>
  );
}

export default App;
