import { Link } from "react-router-dom";
// import { useContext } from "react";

// import { UserContext } from "../../UserProvider";

function HomePage() {
  // const { user } = useContext(UserContext);
  // console.log(" from home AUTH:", user);
  return (
    <div className="home-page-container">
      <h1>Widgets:</h1>
      <div className="features-row">
        <Link to="/weather">
          <div className="widget-link">
            <div>Weather</div>
            <p>
              A widget that will pull current temperature and forcast the hours
              of the day
            </p>
          </div>
        </Link>
        <Link to="/search-swapi">
          <div className="widget-link">
            <div>SWAPI search</div>
            <p>
              A widget that uses filtered searching to display Star Wars
              details. ie. People, Planets, etc.{" "}
            </p>
          </div>
        </Link>
        <Link to="/tree-generator">
          <div className="widget-link">
            <div>Tree Generator</div>
            <p>
              This widget revisits a coding challenge from my early days of
              coding. It creates an ascii character tree based on a height
              input.
            </p>
          </div>
        </Link>
        <Link to="/pic-carousel">
          <div className="widget-link">
            <div>Picture Carousel</div>
            <p>A widget that cycles through images on click</p>
          </div>
        </Link>
        <Link to="/random-word-generator">
          <div className="widget-link">
            <div>Word of the Day</div>
            <p>A widget that generates a random word on click</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
