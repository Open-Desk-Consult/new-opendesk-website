import FirstSectionAbout from "../components/About/FirstSectionAbout";
import SecondSectionAbout from "../components/About/SecondSectionAbout";
import ThirdSectionAbout from "../components/About/ThirdSectionAbout";
import FivthSectionHome from "../components/Home/ContactUsSectionHome";
import Seo from "../components/Seo";

const AboutUs = () => {
  return (
    <>
      <Seo title="About Open Desk" />
      <FirstSectionAbout />
      <SecondSectionAbout />
      <ThirdSectionAbout />
      <FivthSectionHome />
    </>
  );
};

export default AboutUs;
