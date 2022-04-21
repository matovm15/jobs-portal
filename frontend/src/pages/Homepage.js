/* eslint-disable */
import Banner from "../components/banner/Banner";
import Layout from "../components/layout/Layout";
import JobCategories from "../components/categories/JobCategories";
import FeaturedJobs from "../components/featuredJobs/FeaturedJobs";
import Testimonials from "../components/testimonials/Testimonials";
import AboutSection from "../components/about/AboutSection";
import CTO from "../components/cto/CTO"
import Footer from "../components/footer/Footer"

const Homepage = () => {
  return (
    <Layout>
      <Banner />
      <JobCategories />
      <FeaturedJobs />
      {/* <Testimonials /> */}
      <AboutSection />
      <CTO />
      <Footer />
    </Layout>
  );
};

export default Homepage;
