import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../features/auth/authSlice";

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const msg = dispatch(logoutUser());
    if (msg) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div>
      <h1>Logging out...</h1>
      <small>You will be redirected to the homepage</small>
    </div>
  );
};

export default Logout;
