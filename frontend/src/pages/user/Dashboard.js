/* eslint-disable */
import React from "react";
import { useSelector } from "react-redux";
import { authSelector } from "../../features/auth/authSlice";
import LoggedInLayout from "../../components/layout/LoggedInLayout";
import SideBar from "../../components/sidebar/SideBar";
import StatsCards from "../../components/cards/StatsCards";
import LineChart from "../../charts/line.chart";

const Dashboard = () => {
  const { user } = useSelector(authSelector)
  return (
    <LoggedInLayout>
      <div className="sidebar-backdrop"></div>
      <SideBar />
      <section className="user-dashboard">
        <div className="dashboard-outer">
          <div className="upper-title-box">
            <h3>Howdy, {user.username}!!</h3>
            <div className="text">Ready to jump back in?</div>
          </div>
          <div className="row">
            {[1, 2, 3, 4].map((_, idx) => (
              <StatsCards key={idx} title={"Applied Jobs"} icon="flaticon-briefcase" count={22} />
            ))}
          </div>
          <div className="row">
            <div className="col-lg-7">
              <div className="graph-widget ls-widget">
                <div className="tabs-box">
                  <div className="widget-title">
                    <h4>Your Profile Views</h4>
                  </div>
                  <div className="widget-content">
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="notification-widget ls-widget">
                <div className="widget-title">
                  <h4>Notifications</h4>
                </div>
                <div className="widget-content">
                  <ul className="notification-list">
                    {[1, 2, 3, 4, 5, 6, 7].map((_, idx) => (
                      <li key={idx}>
                        <span className="icon flaticon-briefcase"></span>
                        <strong>Wade Warren</strong> applied for a job
                        <span className="colored"> Web Developer</span>
                        <span className="time"> 2 hours ago</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="applicants-widget ls-widget">
                <div className="widget-title">
                  <h4>Jobs Applied Recently</h4>
                </div>
                <div className="widget-content">
                  <div className="row">
                    {[1, 2, 3, 4, 5, 6].map((_, idx) => (
                      <div className="job-block col-lg-6 col-md-12 col-sm-12" key={idx}>
                        <div className="inner-box">
                          <div className="content">
                            <span className="company-logo">
                              <img src="../images/resource/company-logo/1-1.png" alt="" />
                            </span>
                            <h4>
                              <a href="#">Software Engineer (Android), Libraries</a>
                            </h4>
                            <ul className="job-info">
                              <li>
                                <span className="icon flaticon-briefcase"></span> Segment
                              </li>
                              <li>
                                <span className="icon flaticon-map-locator"></span> London, UK
                              </li>
                              <li>
                                <span className="icon flaticon-clock-3"></span> 11 hours ago
                              </li>
                              <li>
                                <span className="icon flaticon-money"></span> $35k - $45k
                              </li>
                            </ul>
                            <ul className="job-other-info">
                              <li className="time">Full Time</li>
                              <li className="privacy">Private</li>
                              <li className="required">Urgent</li>
                            </ul>
                            <button className="bookmark-btn">
                              <span className="flaticon-bookmark"></span>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="copyright-text">
        <p>&copy; { new Date().getFullYear() } Superio. All Right Reserved.</p>
      </div>
    </LoggedInLayout>
  );
};

export default Dashboard;
