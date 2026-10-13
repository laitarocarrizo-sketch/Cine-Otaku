import { Navigate, Outlet } from "react-router";

export const ProtectedRoutes = ({ isAllowed, user }) => {
  if (!user || !isAllowed) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};
