/* eslint-disable */
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authSelector, loginUser, reset } from "../features/auth/authSlice";
import AuthLayout from "../components/layout/AuthLayout";

const Login = () => {
  const { isLoading, isError, errorMessage } = useSelector(authSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isError && errorMessage) {
      dispatch(reset());
    }
    dispatch(loginUser(userData));
  };
  
  return (
    <AuthLayout>
      <div className="login-section">
        <div
          className="image-layer"
          style={{ backgroundImage: "url(images/background/12.jpg)" }}
        ></div>
        <div className="outer-box">
          <div className="login-form default-form">
            <div className="form-inner">
              <h3>Login to Superio</h3>
              {isError && (
                <div className="message-box error">
                  <p>{errorMessage}</p>
                  <button className="close-btn">
                    <span className="close_icon"></span>
                  </button>
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Username</label>
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    required
                    value={userData.username}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label>Password</label>
                  <input
                    id="password-field"
                    type="password"
                    name="password"
                    required
                    value={userData.password}
                    placeholder="Password"
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <div className="field-outer">
                    <a href="#" className="pwd">
                      Forgot password?
                    </a>
                  </div>
                </div>

                <div className="form-group">
                  <button className="theme-btn btn-style-one" type="submit" name="log-in">
                    {isLoading ? " Logging In..." : "Log In"}
                  </button>
                </div>
              </form>

              <div className="bottom-box">
                <div className="text">
                  Don't have an account? <a href="/register">Signup</a>
                </div>
                <div className="divider">
                  <span>or</span>
                </div>
                <div className="btn-box row">
                  <div className="col-lg-6 col-md-12">
                    <a href="#" className="theme-btn social-btn-two facebook-btn">
                      <i className="fab fa-facebook-f"></i> Log In via Facebook
                    </a>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <a href="#" className="theme-btn social-btn-two google-btn">
                      <i className="fab fa-google"></i> Log In via Gmail
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Login;
