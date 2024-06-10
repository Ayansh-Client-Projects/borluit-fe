import Navbar from "@components/Navbar";
import HomePage from "@page/home";
import OurProductsPage from "@page/OurProducts";
import AboutUsPage from "@page/about-us";
import MissionVisionPage from "@page/mission-vision";

const App = () => {
  return (
    <>
      <Navbar />
      <HomePage />
      <OurProductsPage />
      <AboutUsPage />
      <MissionVisionPage />
    </>
  );
};

export default App;
