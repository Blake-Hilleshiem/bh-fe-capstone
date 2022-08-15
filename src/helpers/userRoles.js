import withAuth from "../core/withAuth";

export const StandardUser = withAuth([
  "standard",
  "user",
  "admin",
  "super-admin",
]);
export const AdminUser = withAuth(["admin", "super-admin"]);
