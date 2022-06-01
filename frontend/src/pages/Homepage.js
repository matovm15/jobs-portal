/* eslint-disable */
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { authSelector } from "../features/auth/authSlice";
import Banner from "../components/banner/Banner";
import Layout from "../components/layout/Layout";
import JobCategories from "../components/categories/JobCategories";
import FeaturedJobs from "../components/featuredJobs/FeaturedJobs";
import Testimonials from "../components/testimonials/Testimonials";
import AboutSection from "../components/about/AboutSection";
import CTO from "../components/cto/CTO";

const Homepage = () => {
  const { user } = useSelector(authSelector);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/user/dashboard");
    }
  }, [user, navigate]);

  return (
    <Layout>
      <Banner />
      <JobCategories />
      <FeaturedJobs />
      {/* <Testimonials /> */}
      <AboutSection />
      <CTO />
    </Layout>
  );
};

export default Homepage;
