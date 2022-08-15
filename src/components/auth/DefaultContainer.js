import { Switch, Route } from "react-router-dom";
import { useContext, useEffect } from "react";

import { UserContext } from "../../UserProvider";
import Homepage from "../pages/HomePage";

function Logout() {
  const { logout } = useContext(UserContext);

  useEffect(() => {
    logout();
  }, []);

  return <div>...Logging Out</div>;
}

export default function DefaultContainer() {
  return (
    <Switch>
      <Route path="/hompage" component={Homepage} />
      <Route path="/logout" component={Logout} />
    </Switch>
  );
}
