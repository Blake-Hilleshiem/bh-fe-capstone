import { Switch, Route } from "react-router-dom";

import Login from "../pages/Login";
import HomePage from "../pages/HomePage";

function LoginContainer() {
  return (
    <div>
      To Display Something ...
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default LoginContainer;
