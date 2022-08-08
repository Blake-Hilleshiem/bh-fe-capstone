import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./styles/App.scss";
import Navbar from "./components/navigation/Navigation/Navbar";
import Login from "./components/login/Login";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import Weather from "./components/pages/Weather";
import SearchSwapi from "./components/pages/SearchSwapi";
import Calendar from "./components/pages/Calendar";
import PictureCarousel from "./components/pages/PictureCarousel";
import WordOfTheDay from "./components/pages/WordOfTheDay";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={Navbar} />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/about" component={AboutPage} />
          <Route path="/home" component={HomePage} />
          <Route path="/weather" componet={Weather} />
          <Route path="/search-swapi" componet={SearchSwapi} />
          <Route path="/calandar" component={Calendar} />
          <Route path="/pic-carousel" component={PictureCarousel} />
          <Route path="/word-of-the-day" component={WordOfTheDay} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
