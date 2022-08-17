import { useState, useEffect, useContext } from "react";
import { useHistory, Link } from "react-router-dom";

import { UserContext } from "../../UserProvider";
import Logo from "../../images/Logo.png";

export default function Login() {
  const history = useHistory();
  const { setUser, setAuthIsLoading, authIsLoading } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setAuthIsLoading(true);

    fetch("https://devpipeline-mock-api.herokuapp.com/api/auth/login", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        "content-type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "Logged In") {
          setUser(data.user);
          setAuthIsLoading(false);
          history.push("./homepage");
        }
      })
      .catch((err) => {
        setAuthIsLoading(false);
        console.error("Login Error: ", err);
      });
  }

  return (
    <div>
      <div className="navbar-wrapper">
        <div className="navbar-left">
          <Link className="logo-wrapper" to="/login">
            <img src={Logo} alt="octopus" />
          </Link>
        </div>
        <div className="navbar-center-spacer"></div>
        <div className="navbar-right">
          {/* <Link to="/about">About</Link> */}
        </div>
      </div>
      <div className="login-container">
        <div className="login-wrapper">
          <form onSubmit={handleSubmit}>
            <h2>Login:</h2>
            <div>
              <input
                type="email"
                required
                placeholder="email"
                className="login-input"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div>
              <input
                type="password"
                required
                placeholder="password"
                className="login-input"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div>
              <input className="login-button" type="submit" />
            </div>
            {/* <button>Submit</button> */}
            {errorMessage}
          </form>
        </div>
      </div>
    </div>
  );
}

// export default Login;
