/* eslint-disable */
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../features/auth/authSlice";

const Logout = () => {
  const dispatch = useDispatch();
  // console.log(user)

  useEffect(() => {
    dispatch(logoutUser());
  }, [dispatch]);

  return (
    <div>
      <h1>Logging out...</h1>
      <small>You will be redirected to the homepage</small>
    </div>
  );
};

export default Logout;
