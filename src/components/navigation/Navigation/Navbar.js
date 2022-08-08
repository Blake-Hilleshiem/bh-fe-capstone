import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar-wrapper">
      <div className="navbar-left">Logo</div>
      <div className="navbar-center-spacer"></div>
      <div className="navbar-right">
        <NavLink
          to="/about"
          component={() => {
            return <div>about</div>;
          }}
        ></NavLink>
      </div>
    </div>
  );
}

export default Navbar;
