import { useState, useEffect, createContext } from "react";
import { useHistory } from "react-router-dom";

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const history = useHistory();
  const [user, setUser] = useState(null);
  const [authIsLoading, setAuthIsLoading] = useState(true);

  function logout() {
    setAuthIsLoading(true);
    fetch("https://devpipeline-mock-api.herokuapp.com/api/auth/logout", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "Logged out") {
          setUser(null);
          history.push("/login");
          //             ^^ '/' will take you to home, maybe make navbar to navigate to '/login'
        }
        setAuthIsLoading(false);
      })
      .catch((err) => {
        console.error("logout error");
      });
    setAuthIsLoading(false);
  }

  useEffect(() => {
    setAuthIsLoading(true);

    fetch("https://devpipeline-mock-api.herokuapp.com/api/auth/check-login", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.user.role) {
          setUser(data.user);
          history.push("/homepage");
        } else {
          setUser(null);
        }
        setAuthIsLoading(false);
      })
      .catch((err) => {
        console.error("Credentials Fetch Error: ", err);
        setAuthIsLoading(false);
      });
  }, []);

  const userState = {
    user,
    setUser,
    authIsLoading,
    setAuthIsLoading,
    logout,
  };

  return (
    <UserContext.Provider value={userState}>{children}</UserContext.Provider>
  );
}
