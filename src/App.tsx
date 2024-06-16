import Navbar from "@components/Navbar";
import HomePage from "@page/home";
import OurProductsPage from "@page/our-products";
import AboutUsPage from "@page/about-us";
import MissionVisionPage from "@page/mission-vision";
import CSPage from "@page/c-s";
import ReviewPage from "@page/review";
import ContactUs from "@components/ContactUs";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <HomePage />
      <OurProductsPage />
      <AboutUsPage />
      <MissionVisionPage />
      <CSPage />
      <ReviewPage />
      <ContactUs />
      <Footer />
    </>
  );
};

export default App;
