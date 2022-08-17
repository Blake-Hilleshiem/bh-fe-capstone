import { Route } from "react-router-dom";

import "./styles/App.scss";
import LoginContainer from "./components/auth/LoginContainer";
import DefaultContainer from "./components/auth/DefaultContainer";
import { StandardUser } from "./components/helpers/userRoles";
import UserProvider from "./UserProvider";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Route path="/" component={LoginContainer} />

        <StandardUser withRedirect>
          <Route component={DefaultContainer} />
        </StandardUser>
      </UserProvider>
    </div>
  );
}

export default App;
