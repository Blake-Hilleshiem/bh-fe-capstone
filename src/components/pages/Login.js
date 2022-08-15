import { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";

import { UserContext } from "../../UserProvider";

function Login() {
  const history = useHistory();
  const { setUser, setAuthIsLoading, authIsLoading } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
    <div className="login-wrapper">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div>
          <input
            type="email"
            required
            placeholder="email"
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
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Login;
