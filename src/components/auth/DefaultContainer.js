import { Switch, Route } from "react-router-dom";
import { useContext, useEffect } from "react";

import { UserContext } from "../../UserProvider";
import HomePage from "../pages/HomePage";
import Weather from "../pages/Weather";
import AboutPage from "../pages/AboutPage";
import SearchSwapi from "../pages/SearchSwapi";
import TreeGenerator from "../pages/TreeGenerator";
import PictureCarousel from "../pages/PictureCarousel";
import RandomWordGen from "../pages/RandomWordGen";
import NavBar from "../navigation/Navbar";

function Logout() {
  const { logout } = useContext(UserContext);

  useEffect(() => {
    logout();
  }, []);

  return <div>...Logging Out</div>;
}

export default function DefaultContainer() {
  const { user } = useContext(UserContext);
  return (
    <div>
      {user._id ? <Route path="/" component={NavBar} /> : console.log("false")}

      <Switch>
        <Route path="/homepage" component={HomePage} />
        <Route path="/logout" component={Logout} />
        <Route path="/weather" component={Weather} />
        <Route path="/about" component={AboutPage} />
        <Route path="/search-swapi" component={SearchSwapi} />
        <Route path="/tree-generator" component={TreeGenerator} />
        <Route path="/pic-carousel" component={PictureCarousel} />
        <Route path="/random-word-generator" component={RandomWordGen} />
      </Switch>
    </div>
  );
}
