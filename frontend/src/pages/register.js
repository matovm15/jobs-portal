import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authSelector, registerUser, registerCompany } from "../features/auth/authSlice";
import AuthLayout from "../components/layout/AuthLayout";

const Register = () => {
  const dispatch = useDispatch();
  const { isLoading, isError } = useSelector(authSelector);
  const [toggleCandidate, setToggleCandidate] = useState(true);
  const [toggleEmployer, setToggleEmployer] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    first_name: "",
    last_name: "",
  });

  const candidateStyle = toggleCandidate ? "theme-btn btn-style-seven" : "theme-btn btn-style-four";
  const employerStyle = toggleEmployer ? "theme-btn btn-style-seven" : "theme-btn btn-style-four";

  const handleCandidate = () => {
    setToggleCandidate(!toggleCandidate);
    setToggleEmployer(!toggleEmployer);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toggleCandidate ? dispatch(registerUser(formData)) : dispatch(registerCompany(formData));
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
              <h3>Create a Free Account</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <div className="btn-box row">
                    <div className="col-lg-6 col-md-12">
                      <a href="#" className={candidateStyle} onClick={handleCandidate}>
                        <i className="la la-user"></i> Candidate{" "}
                      </a>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <a href="#" className={employerStyle} onClick={handleCandidate}>
                        <i className="la la-briefcase"></i> Employer{" "}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label>Username</label>
                  <input
                    type="text"
                    value={formData.username}
                    onChange={handleChange}
                    name="username"
                    placeholder="username"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>First Name</label>
                  <input
                    type="text"
                    value={formData.first_name}
                    onChange={handleChange}
                    name="first_name"
                    placeholder="first name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    type="text"
                    value={formData.last_name}
                    onChange={handleChange}
                    name="last_name"
                    placeholder="Last Name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    name="email"
                    placeholder="Email"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Password</label>
                  <input
                    id="password-field"
                    value={formData.password}
                    onChange={handleChange}
                    type="password"
                    name="password"
                    className=""
                    placeholder="Password"
                  />
                </div>

                <div className="form-group">
                  <button className="theme-btn btn-style-one " type="submit" name="Register">
                    {isLoading ? "Loading..." : "Register"}
                  </button>
                </div>
              </form>

              <div className="bottom-box">
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

export default Register;
