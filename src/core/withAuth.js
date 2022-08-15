import { useContext } from "react";
import { Redirect } from "react-router-dom";

import { UserContext } from "../UserProvider";

export default function withAuth(authorizedRoles) {
  return ({ children, withRedirect }) => {
    const { user, authIsLoading } = useContext(UserContext);

    if (authorizedRoles.includes(user?.role)) {
      return children;
    } else {
      return withRedirect ? <Redirect path="/login" /> : null;
    }
  };
}
