import { useState, useEffect, createContext } from "react";
import { useHistory } from "react-router-dom";

export const UserContext = createContext();

console.log("user context: ", UserContext);

export default function UserProvider({ children }) {
  const history = useHistory();
  const [user, setUser] = useState(null);
  const [authIsLoading, setAuthIsLoading] = useState(true);

  console.log("history: ", history);

  const userState = {
    user,
    setUser,
    authIsLoading,
    setAuthIsLoading,
  };

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
        setAuthIsLoading(false);
        console.error("Credentials Fetch Error: ", err);
      });
  }, []);

  return (
    <UserContext.Provider value={userState}>{children}</UserContext.Provider>
  );
}
