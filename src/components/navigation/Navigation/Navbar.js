import { NavLink, Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar-wrapper">
      <div className="navbar-left">
        <Link to="/">Logo</Link>
      </div>
      <div className="navbar-center-spacer"></div>
      <div className="navbar-right">
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink exact to="/weather">
          Weather
        </NavLink>
        <NavLink to="/search-swapi">Swapi</NavLink>
        <NavLink to="/calendar">Calendar</NavLink>
        <NavLink to="/pic-carousel">Carousel</NavLink>
        <NavLink to="/word-of-the-day">WoTD</NavLink>
        <NavLink to="/about">About</NavLink>
        <Link to="/login">Logout</Link>
      </div>
    </div>
  );
}

export default Navbar;
