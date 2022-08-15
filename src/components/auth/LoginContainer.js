import { Switch, Route } from "react-router-dom";

import Login from "../pages/Login";
import HomePage from "../pages/HomePage";
import DefaultContainer from "./DefaultContainer";
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
      </Switch>
    </div>
  );
}

export default LoginContainer;
