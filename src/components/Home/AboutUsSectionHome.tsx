import groupImage from "../../assets/GroupImage.png";
import CustomButton from "../CustomButton";
import { useCustomNavigation } from "../../hook/useCustomNavigation";

const AboutUsSectionHome = () => {
  const onClick = useCustomNavigation();
  return (
    <>
      <div className="lg:hidden flex flex-col gap-y-4 !px-[16px] lg:px-[64px] mr-6 mt-5">
        <div className="text-[25px] leading-[12.35px] font-bold text-[#CE5A3B] !text-left">
          About us
        </div>
        <div className="text-[28px] leading-[30.36px] font-bold text-[#3A5B89] !text-left w-[80%]">
          The team helping teams
        </div>
        <div className="mt-5 mb-5">
          <img src={groupImage} alt="opendesk image" />
        </div>
        <div className="text-[#142A49] font-normal text-base leading-5">
          Open Desk is a leading technology company specializing in app design,
          development, project management, UX engineering, and customer support.
          Our skilled team creates innovative, user-friendly applications that
          meet the highest standards. At Open Desk, we elevate your digital
          presence with elegant and expertly implemented solutions
        </div>
        <CustomButton
          btnText="Know more?"
          color="secondary"
          onClick={() => {
            onClick("/about-us");
          }}
          className="!mt-4"
        />
      </div>
      <div className="!w-full hidden lg:grid lg:grid-cols-6 mt-12 !px-[64px]">
        <div className="col-span-3 space-y-10">
          <div className="text-[35px] leading-6 font-bold text-[#CE5A3B]">
            About us
          </div>
          <div className="text-[40px] leading-[35px] font-bold text-[#3A5B89]">
            The team helping teams
          </div>
          <div className="font-normal text-2xl leading-8 w-[580px] h-[280px] text-[#142A49]">
            Open Desk is a leading technology company specializing in app
            design, development, project management, UX engineering, and
            customer support. Our skilled team creates innovative, user-friendly
            applications that meet the highest standards. At Open Desk, we
            elevate your digital presence with elegant and expertly implemented
            solutions
          </div>
          <CustomButton
            btnText="Know more?"
            color="secondary"
            onClick={() => {
              onClick("/about-us");
            }}
            className="!mt-4"
          />
        </div>
        <div className="col-span-3">
          <img src={groupImage} alt="opendesk image" />
        </div>
      </div>
    </>
  );
};

export default AboutUsSectionHome;
