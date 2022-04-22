import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { authSelector } from "../features/auth/authSlice";

const PrivateRoute = () => {
  const { user } = useSelector(authSelector);
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
