import { Switch, Route } from "react-router-dom";

import Login from "../pages/Login";
import DefaultContainer from "./DefaultContainer";

function LoginContainer() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={DefaultContainer} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default LoginContainer;
