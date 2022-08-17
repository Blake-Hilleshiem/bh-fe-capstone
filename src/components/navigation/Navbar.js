import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../../images/Logo.png";

function Navbar() {
  const [display, setDisplay] = useState(false);
  const [dropDownClass, setDropDownClass] = useState("widgets-dropdown-hidden");
  const [dropDownLinkClass, setDropDownLinkClass] = useState(
    "widgets-dropdown-link-hidden"
  );

  function handleToggleMenu() {
    setDisplay(!display);
    if (!display) {
      setDropDownClass("widgets-dropdown");
      setDropDownLinkClass("widgets-dropdown-link");
    } else {
      setDropDownClass("widgets-dropdown-hidden");
      setDropDownLinkClass("widgets-dropdown-link-hidden");
    }
    // console.log(display);
  }

  return (
    <div className="navbar-wrapper">
      <div className="navbar-left">
        <Link className="logo-wrapper" to="/homepage">
          <img src={Logo} alt="octopus" />
        </Link>
      </div>
      <div className="navbar-center-spacer"></div>
      <div className="navbar-right">
        <NavLink className="widgets-dropdown-link" to="/homepage">
          Home
        </NavLink>
        <div className={dropDownClass} onClick={handleToggleMenu}>
          <div className="menu-toggle">Widgets</div>
          <NavLink className={dropDownLinkClass} to="/weather">
            Weather
          </NavLink>
          <NavLink className={dropDownLinkClass} to="/search-swapi">
            Swapi
          </NavLink>
          <NavLink className={dropDownLinkClass} to="/tree-generator">
            Tree
          </NavLink>
          <NavLink className={dropDownLinkClass} to="/pic-carousel">
            Carousel
          </NavLink>
          <NavLink className={dropDownLinkClass} to="/random-word-generator">
            Random Word
          </NavLink>
        </div>
        <NavLink className="widgets-dropdown-link" to="/about">
          About
        </NavLink>
        <Link className="widgets-dropdown-link" to="/logout">
          Logout
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
