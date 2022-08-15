import { NavLink, Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar-wrapper">
      <div className="navbar-left">
        <Link to="/homepage">Logo</Link>
      </div>
      <div className="navbar-center-spacer"></div>
      <div className="navbar-right">
        <NavLink to="/homepage">Home</NavLink>
        <NavLink to="/weather">Weather</NavLink>
        <NavLink to="/search-swapi">Swapi</NavLink>
        <NavLink to="/calendar">Calendar</NavLink>
        <NavLink to="/pic-carousel">Carousel</NavLink>
        <NavLink to="/random-word-generator">RandWord</NavLink>
        <NavLink to="/about">About</NavLink>
        <Link to="/logout">Logout</Link>
      </div>
    </div>
  );
}

export default Navbar;
