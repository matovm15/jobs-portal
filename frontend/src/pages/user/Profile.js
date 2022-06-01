import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { profileSelector, getProfile } from "../../features/profile/profileSlice";
import { authSelector } from "../../features/auth/authSlice";
import SideBar from "../../components/sidebar/SideBar";
import ProfileForm from "../../components/profile/ProfileForm";
import LoggedInLayout from "../../components/layout/LoggedInLayout";

const Profile = () => {
  const dispatch = useDispatch();
  const { profile, isLoading, isError, errorMessage } = useSelector(profileSelector);
  const { user } = useSelector(authSelector);

  useEffect(() => {
    dispatch(getProfile(user.id));
  }, [dispatch, user.id]);

  return (
    <LoggedInLayout>
      <div className="sidebar-backdrop"></div>
      <SideBar />
      <section className="user-dashboard">
        <div className="dashboard-outer">
          <div className="upper-title-box">
            <h3>My Profile</h3>
            <div className="text">Ready to jump back in?</div>
            {isError && <div style={{ color: "red"}}>{errorMessage}</div>}
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="ls-widget">
                <div className="tabs-box">
                  <div className="widget-title">
                    <h4>My Profile</h4>
                  </div>

                  <div className="widget-content">
                    <div className="uploading-outer">
                      <div className="uploadButton">
                        <input
                          className="uploadButton-input"
                          type="file"
                          name="attachments[]"
                          accept="image/*, application/pdf"
                          id="upload"
                          multiple=""
                        />
                        <label className="uploadButton-button ripple-effect" htmlFor="upload">
                          Browse Logo
                        </label>
                        <span className="uploadButton-file-name"></span>
                      </div>
                      <div className="text">
                        Max file size is 1MB, Minimum dimension: 330x300 And Suitable files are .jpg
                        &amp; .png
                      </div>
                    </div>
                    { !isLoading && <ProfileForm  data={profile}/> }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </LoggedInLayout>
  );
};

export default Profile;
