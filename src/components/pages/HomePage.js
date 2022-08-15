import { Link } from "react-router-dom";
// import { useContext } from "react";

// import { UserContext } from "../../UserProvider";

function HomePage() {
  // const { user } = useContext(UserContext);
  // console.log(" from home AUTH:", user);
  return (
    <div className="home-page-container">
      <h1>Features</h1>
      <div className="features-row">
        <Link to="/weather">
          <div className="widget-link">Weather</div>
        </Link>
        <Link to="/search-swapi">
          <div className="widget-link">SWAPI search</div>
        </Link>
        <Link to="/calendar">
          <div className="widget-link">Calendar</div>
        </Link>
        <Link to="/pic-carousel">
          <div className="widget-link">Picture Carousel</div>
        </Link>
        <Link to="/random-word-generator">
          <div className="widget-link">Word of the Day</div>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
