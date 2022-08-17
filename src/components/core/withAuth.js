import { useContext } from "react";
import { Redirect } from "react-router-dom";

import { UserContext } from "../../UserProvider";

export default function withAuth(authorizedRoles) {
  return ({ children, withRedirect }) => {
    const { user } = useContext(UserContext);
    // console.log("AUTH:", user);
    if (authorizedRoles.includes(user?.role)) {
      return children;
    } else {
      return withRedirect ? <Redirect to="/login" /> : null;
    }
  };
}
