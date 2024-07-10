import FirstSectionHome from "../components/Home/FirstSectionHome";
import FourthSectionHome from "../components/Home/FourthSectionHome";
import SecondSectionHome from "../components/Home/SecondSectionHome";
import ThirdSectionHome from "../components/Home/ThirdSectionHome";
import FivthSectionHome from "../components/Home/FivthSectionHome";
import Footer from "../layout/Footer";

const LandingPage = () => {
  return (
    <>
      <FirstSectionHome />
      <SecondSectionHome />
      <ThirdSectionHome />
      <FourthSectionHome />
      <FivthSectionHome />
      <Footer />
    </>
  );
};

export default LandingPage;
