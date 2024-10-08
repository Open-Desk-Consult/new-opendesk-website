import FirstSectionHome from "../components/Home/FirstSectionHome";
import OurServicesSectionHome from "../components/Home/OurServicesSectionHome";
import CarouselSectionHome from "../components/Home/CarouselSection";
import AboutUsSectionHome from "../components/Home/AboutUsSectionHome";
import ContactUsSectionHome from "../components/Home/ContactUsSectionHome";
import ProjectsSectionsHome from "../components/Home/ProjectsSectionsHome";
import Seo from "../components/Seo";

const LandingPage = () => {
  return (
    <>
      <Seo title="Home" />
      <FirstSectionHome />
      <CarouselSectionHome />
      <AboutUsSectionHome />
      <OurServicesSectionHome />
      <ProjectsSectionsHome />
      <ContactUsSectionHome />
    </>
  );
};

export default LandingPage;
