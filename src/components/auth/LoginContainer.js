import { Switch, Route } from "react-router-dom";

import Login from "../pages/Login";
import DefaultContainer from "./DefaultContainer";
// import AboutPage from "../pages/AboutPage";

// import { StandardUser } from "../../helpers/userRoles";
// import NavBar from "../navigation/Navigation/Navbar";

function LoginContainer() {
  return (
    <div>
      {/* <StandardUser>
        <Route path="/" component={NavBar} />
      </StandardUser> */}
      <Switch>
        <Route exact path="/" component={DefaultContainer} />
        <Route path="/login" component={Login} />
        {/* <Route path="/about" component={AboutPage} /> */}
      </Switch>
    </div>
  );
}

export default LoginContainer;
